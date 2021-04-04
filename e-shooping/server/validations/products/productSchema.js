const Joi = require('joi');

const productCategory = Joi.object({
    image: Joi.string(),
    productTitle: Joi.string().required(),
    productPrice: Joi.number().required(),
    productStock: Joi.boolean().required(),
    soldBy: Joi.string().required(),

});



module.exports = { productCategory }



