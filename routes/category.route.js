const { Router } = require('express');
const router = Router();
const controller = require('../controller/category.controller');

router.post('/create_category', controller.createCategory);
router.delete('/delete_category', controller.deleteCategory);
router.get('/category_list', controller.categoryList);

module.exports = router;