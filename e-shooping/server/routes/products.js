const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const productsController = require('../controllers/productsController');
const productsValidation = require('../validations/products/productsValiation');
const imageUploader = require('../helpers/imageUpload');

// base url :- api/products

router.post('/saveProducts', imageUploader.simpleUploadExecute('products'),
  productsValidation.saveProductsValidation, productsController.saveProducts);


router.get('/listProducts', productsController.listProducts);

router.get('/productDetail/:slug', productsController.productDetail);


module.exports = router;




