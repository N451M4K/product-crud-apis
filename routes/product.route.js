const { Router } = require('express');
const router = Router();
const controller = require('../controller/product.controller');

router.post('/create_product', controller.createProduct);
router.get('/product_list', controller.productList);
router.put('/update_product', controller.updateProduct);
router.delete('/delete_product', controller.deleteProduct);
module.exports = router;