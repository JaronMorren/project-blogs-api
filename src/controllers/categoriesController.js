const { categoriesService } = require('../services');

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
  createCategory,
};