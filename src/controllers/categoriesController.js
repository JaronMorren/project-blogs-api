const { categoriesService } = require('../services');

const getCategories = async (_request, response) => {
    try {
    const categories = await categoriesService.getCategories();
  
    return response.status(200).json(categories);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

const createCategory = async (request, response) => {
  try {
    const newCategory = request.body;
    if (!newCategory.name) return response.status(400).json({ message: '"name" is required' });

    const category = await categoriesService.createCategory(newCategory);
    return response.status(201).json(category);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategory, getCategories,
};