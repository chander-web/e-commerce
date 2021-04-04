const Joi = require('joi');

const saveCategorySchema = Joi.object({
    image: Joi.string(),
    category: Joi.string().required(),
    categoryTitle: Joi.string().required(),

});



module.exports = { saveCategorySchema }