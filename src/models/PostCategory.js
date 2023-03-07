'use strict';
module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      }, 
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      }, 
  
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    });
  
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost,
        { 
          foreignKey: 'categoryId',
          otherKey: 'postId',
          through: PostCategory,
          as: 'blogPosts',
        }) 
      models.BlogPost.belongsToMany(models.Category,
        { 
          foreignKey: 'postId',
          otherKey: 'categoryId',
          through: PostCategory,
          as: 'categories',
        });
    }   
      return PostCategory;
  };