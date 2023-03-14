const { postsService } = require('../services');

const getBlogPosts = async (_request, response) => {
    try {
    const posts = await postsService.getBlogPosts();
  
    return response.status(200).json(posts);
} catch (error) {
    return response.status(500).json({ message: error.message });
  }
  };

  module.exports = {
    getBlogPosts,
  };