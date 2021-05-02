/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();
const ProductsModel = require('../models/productsModel');
const MenuModel = require('../models/MenuModel');




exports.allOffers = [async(req, res) => {
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
    apiResponse.errorResponse(res, 'some error occurred while retrieving category.');
  }
}];


exports.sidebar = [async(req, res) => {
  const slug = req.params.slug;
  let allMenu = await MenuModel.aggregate([{
    $addFields: {topLevel: false, path: { $concat: [ '/products/', '$slug' ] } 
    }}]);
  let finalRes = [];
  try {    
    let selectedMenuItem = allMenu.find(item => item.slug === slug);
    const topToDown = allMenu.filter(item => item.parentId == selectedMenuItem._id);
    let flag = true;
    if (selectedMenuItem) {
      // top to down
      if (topToDown.length) {
        selectedMenuItem.topLevel = true;
        finalRes = [selectedMenuItem, ...topToDown];
      } else {
        finalRes.push(selectedMenuItem);
      }

      // bottom to up
      while (flag) {
        let bottomToUp = allMenu.filter(item => item._id.toString() === selectedMenuItem.parentId)[0];
        if (bottomToUp) { 
          bottomToUp.topLevel = true;
          selectedMenuItem = bottomToUp;
          finalRes.unshift(bottomToUp);
        } else {
          flag = false;
        }
      }
      apiResponse.successResponseWithList(res, finalRes);
    } else {
      apiResponse.errorResponse(res, 'record not match.');

    }
  } catch (e) {
    apiResponse.errorResponse(res, 'some error occurred while retrieving category.');
  }
}];
