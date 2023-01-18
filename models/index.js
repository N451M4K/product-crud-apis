'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//checking connection
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.ProductMaster = require('./productmaster')(sequelize, Sequelize);
db.CategoryMaster = require('./categorymaster')(sequelize, Sequelize);
db.CategoryMaster.hasOne(db.ProductMaster, { foreignKey: 'categoryId' });
db.ProductMaster.belongsTo(db.CategoryMaster, {foreignKey:'categoryId'});

// db.sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("db altered successfully");
//   })
//   .catch((err) => {
//     console.log("err//or", err); 
//   });

module.exports = db;
