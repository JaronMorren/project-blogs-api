const { usersService } = require('../services');
const { createToken } = require('../auth/authorisation');

const getUsers = async (_request, response) => {
  try {
    const users = await usersService.getUsers();
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

const createUser = async (request, response) => {
    try {
      const { displayName, email, password, image } = request.body;
  
      const user = await usersService.createUser({
        displayName,
        email,
        password,
        image,
      });
  
      const token = createToken(email);
  
      if (!user) throw Error;
      return response.status(201).json({ token });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  };

module.exports = { createUser, getUsers };

// https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/6.4/src/controllers/users.js