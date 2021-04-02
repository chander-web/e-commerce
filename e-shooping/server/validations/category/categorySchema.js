const Joi = require('joi');

const saveCategorySchema = Joi.object({
    categoryImage: Joi.string(),
    categoryName: Joi.string().required(),

});



module.exports = { saveCategorySchema }