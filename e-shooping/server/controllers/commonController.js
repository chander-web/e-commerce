const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();
const ProductsModel = require('../models/productsModel');



exports.allOffers = [async (req, res) => {
    try {
        const offersResult = await ProductsModel.find({ offers: true }, {
            image: 1, _id: 1, productTitle: 1
        }).limit(4);
        if (offersResult) {
            apiResponse.successResponseWithList(res, offersResult);
        } else {
            apiResponse.notFoundResponse(res, 'offers not found');

        }
    } catch (e) {
        apiResponse.ErrorResponse(res, 'some error occurred while retrieving category.');
    }

}]

