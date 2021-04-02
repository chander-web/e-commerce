const validationSchema = require('./categorySchema');
const apiResponse = require('../../helpers/apiResponse');
const saveCategoryValidation = (req, res, next) => {
    const result = validationSchema.saveCategorySchema.validate(req.body);
    if (result.error) {
        apiResponse.validationError(res, result.error.details[0].message);
    } else {
        next();
    }
}


module.exports = { saveCategoryValidation };
