const { User } = require('../models');

const getUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const getUserByID = (userID) => User.findByPk(userID, { attributes: { exclude: 'password' } });

const createUser = async ({ displayName, email, password, image }) => {
  const createdUser = await User.create({ displayName, email, password, image });
  return createdUser;
};

module.exports = { createUser, getUsers, getUserByID };

// // https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/6.4/src/services/userService.js