const apiResponse = require('../helpers/apiResponse');
const MenuModel = require('../models/MenuModel');


exports.autoComplete = [async(req, res) => {
  try {
    
    const type = req.query.type.toLowerCase();
    if (type) {
      const allMenu = await MenuModel.find({});
      const filterResult = allMenu.filter(item => {
        const items = item.slug.toLowerCase();
        if (items.match(new RegExp(`${type}`, 'g'))) {
          return item;
        }
      });
      apiResponse.successResponseWithData(res, '', filterResult);
    } else {
      apiResponse.errorResponse(res, 'some error occurred while retrieving category.');

    }
  } catch (e) {
    apiResponse.errorResponse(res, 'some error occurred while retrieving category.');
  }

}];



exports.list = [async(req, res) => {
  try {
    const value = req.body.type.toLowerCase();
    const allMenu = await MenuModel.find({});
    //  const result = search();
    console.log(allMenu);

  } catch (e) {
    apiResponse.errorResponse(res, 'some error occurred while retrieving category.');
  }

}];

// const search = () => {
// const searchResult = [];
//     const searchListFromMenuSchema = allMenu.find(res => res.slug.toLowerCase() === value);

// };
