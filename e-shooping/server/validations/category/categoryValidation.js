const validationSchema = require('./categorySchema');
const apiResponse = require('../../helpers/apiResponse');
var fs = require('fs');

const saveCategoryValidation = (req, res, next) => {
    // delete the image file
    const result = validationSchema.saveCategorySchema.validate(req.body);
    if (result.error) {
        fs.unlink(`${req.file.path}`, (err) => {
            if (err) {
                console.log(err);
            }
        });
        apiResponse.validationError(res, result.error.details[0].message);
    } else {
        next();
    }

}





module.exports = { saveCategoryValidation };
