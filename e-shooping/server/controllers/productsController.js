const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();
const ProductsModel = require('../models/productsModel');

exports.saveProducts = [(req, res) => {
    const products = new ProductsModel(req.body);
    products.image = `products/${req.file.filename}`;
    products.save()
        .then(data => {
            apiResponse.successResponseWithData(res, 'Products created SuccesFully', data);
        })
}]


exports.allProducts = [async (req, res) => {
    apiResponse.successResponseWithList(res, res.paginatedResult);
}]



