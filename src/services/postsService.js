const { BlogPost, User, Category } = require('../models');

// Gabriel Gonçalves helped me to write this function
const getBlogPosts = async () => {
    const blogPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return blogPosts;
};

module.exports = {
    getBlogPosts,
  };