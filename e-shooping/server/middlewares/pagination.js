const apiResponse = require('../helpers/apiResponse');
exports.pagination = (model) => {
  return async(req, res, next) => {
    const { type, page, pageSize } = req.query;
    const startIndex = (parseInt(page) - 1) * pageSize;
    try {

      const productsResult = await model.find({ categoryType: type }, {categoryType: 0, productStock: 0, categoryId: 0, offers: 0, soldBy: 0, _id: 0 }).skip(startIndex).limit(parseInt(pageSize));
      const totalItemCount = await model.find({ categoryType: type }).count();
    
      if (productsResult) {
        res.paginatedResult = productsResult;
        res.totalItemCount = totalItemCount;
        next();
      }
    } catch (e) {
      apiResponse.errorResponse(res, 'some error occurred while retrieving products.');

    };
  };
};