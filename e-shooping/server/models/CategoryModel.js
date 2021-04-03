const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    image: { type: String },
    category: { type: String, required: true },
    categoryTitle: { type: String, required: true },
});


module.exports = mongoose.model('Category', CategorySchema)

