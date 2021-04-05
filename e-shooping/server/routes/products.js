const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const productsValidation = require('../validations/products/productsValiation');
const imageUploader = require('../helpers/imageUpload');
const paginationMiddleware = require('../middlewares/pagination');
const ProductsModel = require('../models/productsModel');

// base url :- api/products

router.post('/saveProducts', imageUploader.simpleUploadExecute('products'),
    productsValidation.saveProductsValidation, productsController.saveProducts)

router.post('/allProducts/:categoryId', paginationMiddleware.pagination(ProductsModel), productsController.allProducts)

router.get('/selectedProduct/:id', productsController.selectedProduct)


module.exports = router;


