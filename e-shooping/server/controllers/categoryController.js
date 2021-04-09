const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();
const ImageUpload = require('../helpers/imageUpload');
const CategoryModel = require('../models/CategoryModel');

exports.saveCategory = [(req, res) => {
  ImageUpload.isFileExist(req);
  const category = new CategoryModel({
    image: `upload/${req.body.category}/${req.file.filename}`,
    category: req.body.category,
    categoryTitle: req.body.categoryTitle
  });
  category.save()
    .then(data => {
      apiResponse.successResponseWithData(res, 'Created category SuccesFully', data);
    });
}];

exports.allCategory = [async(req, res) => {
  try {
    const categoryResult = await CategoryModel.find();
    if (categoryResult) {
      apiResponse.successResponseWithList(res, categoryResult);
    }
  } catch (e) {
    apiResponse.errorResponse(res, 'some error occurred while retrieving category.');
  }




}];

