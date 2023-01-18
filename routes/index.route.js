const { Router } = require('express');
const allRoute = Router();
const productRoute = require('./product.route');
const categoryRoute = require('./category.route');

allRoute.use('/product', productRoute);
allRoute.use('/category', categoryRoute);

module.exports = allRoute;