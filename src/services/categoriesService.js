const { Category } = require('../models');

const createCategory = (category) => Category.create(category);

const getCategories = () => Category.findAll();

module.exports = {
  createCategory, getCategories,
};