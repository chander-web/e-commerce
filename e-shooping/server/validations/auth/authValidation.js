const authSchema = require('./authSchema');
const apiResponse = require('../../helpers/apiResponse');
const authValidation = (req, res, next) => {
    const result = authSchema.validate(req.body);
    if (result.error) {
        apiResponse.validationError(res, result.error.details[0].message);
    } else {
        next();
    }
}


module.exports = authValidation;
