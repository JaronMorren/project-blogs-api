const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const createdUser = await User.create({ displayName, email, password, image });
  return createdUser;
};

module.exports = { createUser };

// // https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/6.4/src/services/userService.js