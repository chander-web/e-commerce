const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const categoryValidation = require('../validations/category/categoryValidation');
const ImageUpload = require('../helpers/imageUpload');
// base url :- api/category

router.post('/saveCategory', ImageUpload.upload.single('image'),
    categoryValidation.saveCategoryValidation, categoryController.saveCategory)

router.get('/allCategory', categoryController.allCategory)


module.exports = router;


