const apiResponse = require('../helpers/apiResponse');

exports.pagination = (model) => {
    return async (req, res, next) => {
        const page = parseInt(req.body.page);
        const pageSize = parseInt(req.body.pageSize);
        const startIndex = (page - 1) * pageSize;
        try {
            const productsResult = await model.find().skip(startIndex).limit(pageSize);
            if (productsResult) {
                res.paginatedResult = productsResult;
                next();
            }
        } catch (e) {
            apiResponse.ErrorResponse(res, 'some error occurred while retrieving products.');
        }

    }

}