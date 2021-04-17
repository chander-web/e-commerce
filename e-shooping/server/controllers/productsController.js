const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();
const ProductsModel = require('../models/productsModel');
const MenuModel = require('../models/MenuModel');
const slugify = require('slugify');
  
exports.saveProducts = [async(req, res) => {
  const menuList = await MenuModel.find({ _id: req.body.categoryId });
  if (menuList.length) {
    const relation = await realationShip(menuList[0]);
    relation.push(req.body.productTitle);

    const apiReq = {
      ...req.body,
      slug: slugify(req.body.productTitle),
      categoryType: menuList[0].slug,
      reationShip: relation.toString()
    };
    const products = new ProductsModel(apiReq);
    products.image = `products/${req.file.filename}`;
    products.save((error, product) => {
      if (error) return apiResponse.successResponse(res, 'Duplicate Entry');
      if (product) return apiResponse.successResponseWithData(res, 'Products created SuccesFully', product);
    });
  }

}];
// creating relation of products
async function realationShip(parentId) {
  var result = [];
  let pId = parentId;
  let flag = true;
  while (flag) {
    const menuList = await MenuModel.find({ _id: pId });
    if (menuList.length) {
      result.push(menuList[0].slug);
      pId = menuList[0].parentId;
    } else {
      flag = false;
    }

  }
  return result;
};


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



