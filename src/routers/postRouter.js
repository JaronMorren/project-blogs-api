const express = require('express');
const { postsController } = require('../controllers');
const { validateToken } = require('../middleware/userValidations');

const postRouter = express.Router();

postRouter.get('/', validateToken, postsController.getBlogPosts);

module.exports = postRouter;