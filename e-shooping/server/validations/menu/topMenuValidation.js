const validationSchema = require('./menuSchema');
const apiResponse = require('../../helpers/apiResponse');

const menuValidation = (req, res, next) => {

  const result = validationSchema.menuSchema.validate(req.body);
  if (result.error) {
    apiResponse.validationError(res, result.error.details[0].message);
  } else {
    next();
  }

};









module.exports = { menuValidation };
