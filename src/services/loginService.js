const { User } = require('../models');

const getLoginData = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = { getLoginData };

// https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/6.4/src/services/userService.js