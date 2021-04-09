const productsSchema = require('./productSchema');
const apiResponse = require('../../helpers/apiResponse');
var fs = require('fs');

const saveProductsValidation = (req, res, next) => {
  // delete the image file
  const result = productsSchema.productCategory.validate(req.body);
  if (result.error) {
    fs.unlink(`${req.file.path}`, () => { });
    apiResponse.validationError(res, result.error.details[0].message);
  } else {
    next();
  }

};





module.exports = { saveProductsValidation };
