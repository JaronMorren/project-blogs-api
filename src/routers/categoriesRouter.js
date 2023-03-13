const express = require('express');
const { categoriesController } = require('../controllers');
const { validateToken } = require('../middleware/userValidations');

const categoriesRouter = express.Router();

categoriesRouter.get('/', validateToken, categoriesController.getCategories);
categoriesRouter.post('/', validateToken, categoriesController.createCategory);

module.exports = categoriesRouter;