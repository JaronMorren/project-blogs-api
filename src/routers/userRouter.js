const express = require('express');
const { usersController } = require('../controllers');
const { validateDisplayName, validateEmail, validatePassword,
 } = require('../middleware/userValidations');

const userRouter = express.Router();

userRouter.post('/', 
validateDisplayName, validatePassword, validateEmail, 
usersController.createUser);

module.exports = userRouter;