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
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

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