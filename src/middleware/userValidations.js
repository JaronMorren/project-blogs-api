const { loginService } = require('../services');

const validateDisplayName = (request, response, next) => {
    const { displayName } = request.body;
  
    if (displayName.length < 8) {
      return response.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
  };

  const validateEmail = async (request, response, next) => {
    const { email, password } = request.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email.match(emailRegex)) {
  return response.status(400).json({ message: '"email" must be a valid email' });
    }

  const existingUser = await loginService.getLoginData({ email, password });

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
  
  module.exports = { validateDisplayName, validateEmail, validatePassword };
// I wrote these functions in this file with the mentorship of Marcio Daniel