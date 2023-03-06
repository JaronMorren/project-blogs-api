'use strict';
const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, 
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      }, 
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: 'blog_posts',
      timestamps: false,
      underscored: true,
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'users' }  
      )
    }

    return BlogPost;
  };

  module.exports = BlogPostModel;