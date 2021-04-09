const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  image: { type: String },
  category: { type: String, required: true },
  categoryTitle: { type: String, required: true },
});


module.exports = mongoose.model('Category', categorySchema);

