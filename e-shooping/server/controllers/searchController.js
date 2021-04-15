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

