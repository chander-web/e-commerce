const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
  image: { type: String },
  productTitle: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productStock: { type: Boolean, required: true },
  description: { type: String, required: true, trim: true },
  offers: { type: Boolean, default: false },
  soldBy: { type: String, required: true },
  categoryId: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  categoryType: { type: String },
  reationShip: { type: String }

}, { versionKey: false });


module.exports = mongoose.model('Products', productsSchema);

