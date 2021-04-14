const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
  name: { type: String, required: true, trim: true},
  slug: {type: String, required: true, unique: true},
  parentId: {type: String}

}, {versionKey: false});


module.exports = mongoose.model('Menus', menuSchema);

