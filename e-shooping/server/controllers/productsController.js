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


exports.selectedProduct = [async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const productResult = await ProductsModel.findById(id);
        if (productResult) {
            apiResponse.successResponseWithList(res, productResult);
        }
    } catch (e) {
        apiResponse.ErrorResponse(res, 'some error occurred while retrieving category.');
    }
}];



