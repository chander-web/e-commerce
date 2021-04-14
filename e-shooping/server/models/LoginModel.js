const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { versionKey: false });


module.exports = mongoose.model('Login', loginSchema);