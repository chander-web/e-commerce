const Joi = require('joi');

const menuSchema = Joi.object({
  name: Joi.string().required(),
  parentId: Joi.string()
});



module.exports = { menuSchema };