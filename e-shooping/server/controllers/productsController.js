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
  const { type } = req.query;
  // const startIndex = (parseInt(page) - 1) * pageSize;
  try {
    const productsResult = await ProductsModel.find();
    const productFind = productsResult.filter(product => {
      const productType = type.toLowerCase();
      const productData = product.reationShip.toLowerCase();
      if (productData.match(new RegExp(`${productType}`, 'g'))) {
        return product;
      } 
    });

    // const productsResult = await model.find({ categoryType: type }, {categoryType: 0, productStock: 0, categoryId: 0, offers: 0, soldBy: 0, _id: 0 }).skip(startIndex).limit(parseInt(pageSize));
    if (productFind) {
      res.paginatedResult = productFind;
      res.totalItemCount = productFind.length;
      apiResponse.successResponseWithListPagination(res, res.paginatedResult);
    }
  } catch (e) {
    apiResponse.errorResponse(res, 'some error occurred while retrieving products.');

  };

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



