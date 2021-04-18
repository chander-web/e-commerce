const apiResponse = require('../helpers/apiResponse');
exports.pagination = (model) => {
  return async(req, res, next) => {
    const { type } = req.query;
    // const startIndex = (parseInt(page) - 1) * pageSize;
    try {

      const productsResult = await model.find();
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
        next();
      }
    } catch (e) {
      apiResponse.errorResponse(res, 'some error occurred while retrieving products.');

    };
  };
};