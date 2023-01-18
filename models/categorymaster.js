'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoryMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  categoryMaster.init({
    categoryName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoryMaster',
  });
  return categoryMaster;
};