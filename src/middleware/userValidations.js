const { loginService } = require('../services');

const validateDisplayName = (require, response, next) => {
    const { displayName } = require.body;
  
    if (displayName.length < 8) {
      return response.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
  };

  const validateEmail = async (req, res, next) => {
    const { email, password } = req.body;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
// https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    
    if (!email.match(emailRegex)) {
  return res.status(400).json({ message: '"email" must be a valid email' });
    }

  const existingUser = await loginService.getLoginData({ email, password });

  if (existingUser) {
    return res.status(409).json({ message: 'User already registered' });
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