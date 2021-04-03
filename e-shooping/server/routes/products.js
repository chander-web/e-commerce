const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const productsValidation = require('../validations/products/productsValiation');
const imageUploader = require('../helpers/imageUpload')
// base url :- api/products

router.post('/saveProducts', imageUploader.simpleUploadExecute('products'),
    productsValidation.saveProductsValidation, productsController.saveProducts)



module.exports = router;


