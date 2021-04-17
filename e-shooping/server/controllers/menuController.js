const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();
const MenuModel = require('../models/MenuModel');
const slugify = require('slugify');


exports.create = [async(req, res) => {
  const createObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    createObj.parentId = req.body.parentId;

    const selectParentItem = await MenuModel.find({ _id: req.body.parentId });



  }


  const category = new MenuModel(createObj);
  category.save((error, cate) => {
    if (error) return apiResponse.successResponse(res, 'Duplicate Entry');
    if (cate) return apiResponse.successResponseWithData(res, 'Menu created SuccesFully', cate);
  });
  
}];



exports.getAllMenu = [async(req, res) => {
  try {
    const allMenu = await MenuModel.find();
    if (allMenu) {
      const categoryList = createCategories(allMenu);
      apiResponse.successResponseWithList(res, categoryList);
    }
  } catch (e) {
    apiResponse.errorResponse(res, 'some error occurred while retrieving category.');
  }

}];


function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category; 
  if (parentId) {
    // eslint-disable-next-line 
    category = categories.filter(cat => cat.parentId == parentId);
  } else {
    category = categories.filter(cat => cat.parentId === undefined);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate.id,
      name: cate.name,
      slug: cate.slug,
      children: createCategories(categories, cate._id)
    });
  } 
  return categoryList;
}

