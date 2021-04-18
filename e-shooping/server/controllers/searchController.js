const apiResponse = require('../helpers/apiResponse');
const ProductsModel = require('../models/productsModel');


exports.autoComplete = [async(req, res) => {
  try {
    
    const type = req.query.type.toLowerCase();
    if (type) {
      let result = [];
      const productsResult = await ProductsModel.find({});
      productsResult.forEach(item => {
        const productData = item.reationShip.toLowerCase();
        if (productData.match(new RegExp(`${type}`, 'g'))) {
          // return item.productTitle;
          const data = {
            id: item._id,
            name: item.slug
          };
          result.push(data);
        }
      });

      apiResponse.successResponseWithData(res, '', result);
    } else {
      apiResponse.successResponseWithData(res, '', []);

    }
  } catch (e) {
    apiResponse.errorResponse(res, 'some error occurred while retrieving category.');
  }

}];


