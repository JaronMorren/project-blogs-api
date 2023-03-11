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
  
  module.exports = { validateDisplayName, validateEmail, validatePassword };
