const express = require('express');
const { usersController } = require('../controllers');
const { validateDisplayName, validateEmail, validatePassword, validateToken,
 } = require('../middleware/userValidations');

const userRouter = express.Router();

userRouter.post('/', 
validateDisplayName, validatePassword, validateEmail, 
usersController.createUser);

userRouter.get('/',
validateToken, usersController.getUsers);

module.exports = userRouter;