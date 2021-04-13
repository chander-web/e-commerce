const mongoose = require('mongoose');
const { Schema } = mongoose;

const subMenuSchema = new Schema({
  subId: { type: String, required: true },
  subCategoryName: { type: String, required: true },
}, {versionKey: false});


module.exports = mongoose.model('submenu', subMenuSchema);

