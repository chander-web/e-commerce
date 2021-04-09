const validationSchema = require('./authSchema');
const apiResponse = require('../../helpers/apiResponse');
const authValidation = (req, res, next) => {
  const result = validationSchema.authSchema.validate(req.body);
  if (result.error) {
    apiResponse.validationError(res, result.error.details[0].message);
  } else {
    next();
  }
};

const loginValidation = (req, res, next) => {
  const result = validationSchema.loginSchema.validate(req.body);
  if (result.error) {
    apiResponse.validationError(res, result.error.details[0].message);
  } else {
    next();
  }
};


module.exports = { authValidation, loginValidation };
