const apiResponse = require('../helpers/apiResponse');
exports.pagination = (model) => {
  return async(req, res, next) => {
    const page = parseInt(req.body.page);
    const pageSize = parseInt(req.body.pageSize);
    const categoryId = req.body.categoryId;
    const startIndex = (page - 1) * pageSize;
    try {
      const productsResult = await model.find({ categoryId: categoryId }).skip(startIndex).limit(pageSize);
      const totalItemCount = await model.find({ categoryId: categoryId }).count();
      if (productsResult) {
        res.paginatedResult = productsResult;
        res.totalItemCount = totalItemCount;
        res.categoryId = categoryId;
        next();
      }
    } catch (e) {
      apiResponse.errorResponse(res, 'some error occurred while retrieving products.');

    };
  };
};