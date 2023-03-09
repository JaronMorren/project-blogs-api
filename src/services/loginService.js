const { User } = require('../models');

const getLoginData = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = { getLoginData };