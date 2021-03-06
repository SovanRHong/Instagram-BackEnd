const models =require ('../models')


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    models.comment.belongsTo(models.post)
    models.comment.belongsTo(models.user)
    }
  };
  comment.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    like: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};