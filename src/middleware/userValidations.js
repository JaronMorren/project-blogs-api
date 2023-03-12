const { verifyToken } = require('../auth/authorisation');
const { loginService } = require('../services');

const validateDisplayName = (request, response, next) => {
    const { displayName } = request.body;
  
    if (displayName.length < 8) {
      return response.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
  };
// I wrote these functions with the mentorship of Marcio Daniel

  const validateEmail = async (request, response, next) => {
    const { email, password } = request.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
  return response.status(400).json({ message: '"email" must be a valid email' });
    }
// I wrote these functions with the help of Gabriel Gonçalves
  const existingUser = await loginService.getLoginData(email, password);

  if (existingUser) {
    return response.status(409).json({ message: 'User already registered' });
  }
  next();
};

const validatePassword = async (request, response, next) => {
  const { password } = request.body;
  if (password.length < 6) {
    return response.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
}
next();
};

// https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/6.4/src/middleware/validateToken.js
const validateToken = async (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization) {
      return response.status(401).json({ message: 'Token not found' });
    }
    const payload = verifyToken(authorization);
    request.data = payload.data;
    next();
  } catch (error) {
    response.status(401).json({ message: 'Expired or invalid token' });
  }
};
  
  module.exports = { validateDisplayName, validateEmail, validatePassword, validateToken };
