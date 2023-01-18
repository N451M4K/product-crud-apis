'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductMaster.init({
    productName: {
      type: DataTypes.STRING,
    },
    productDescription: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'ProductMaster',
  });
  return ProductMaster;
};