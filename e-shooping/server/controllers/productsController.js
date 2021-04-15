const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();
const ProductsModel = require('../models/productsModel');
const MenuModel = require('../models/MenuModel');
const slugify = require('slugify');
const mongoose = require('mongoose');

exports.saveProducts = [async(req, res) => {
  const menuList = await MenuModel.find({_id: req.body.categoryId});
  const apiReq = {
    ...req.body,
    slug: slugify(req.body.productTitle),
    categoryType: menuList[0].slug

  };
  const products = new ProductsModel(apiReq);
  products.image = `products/${req.file.filename}`;
  products.save((error, product) => {
    if (error) return apiResponse.successResponse(res, 'Duplicate Entry');
    if (product) return apiResponse.successResponseWithData(res, 'Products created SuccesFully', product);

  });
}];



exports.listProducts = [async(req, res) => {
  apiResponse.successResponseWithListPagination(res, res.paginatedResult);
}];


exports.productDetail = [async(req, res) => {
  try {
    const slug = req.params.slug;
    const productResult = await ProductsModel.find({ slug: slug });
    if (productResult) { 
      apiResponse.successResponseWithList(res, productResult);
    }
  } catch (e) {
    apiResponse.errorResponse(res, 'some error occurred while retrieving category.');
  }
}];



