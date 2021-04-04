const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    image: { type: String },
    productTitle: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productStock: { type: Boolean, required: true },
    soldBy: { type: String, required: true },
});


module.exports = mongoose.model('Products', ProductsSchema)

