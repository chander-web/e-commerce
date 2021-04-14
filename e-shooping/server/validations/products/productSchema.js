const Joi = require('joi');

const productCategory = Joi.object({
  image: Joi.string(),
  productTitle: Joi.string().required(),
  productPrice: Joi.number().required(),
  productStock: Joi.boolean().required(),
  description: Joi.string().required(),
  soldBy: Joi.string().required(),
  offers: Joi.boolean(),
  categoryId: Joi.string().required(),
  categoryType: Joi.string()

});



module.exports = { productCategory };



