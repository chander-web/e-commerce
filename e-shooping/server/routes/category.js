const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const categoryValidation = require('../validations/category/categoryValidation');

// base url :- api/category

router.post('/saveCategory', categoryValidation.saveCategoryValidation, categoryController.saveCategory)


module.exports = router;


