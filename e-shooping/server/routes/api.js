const express = require('express');
const app = express();
const auth = require('../routes/auth');
const common = require('../routes/common');

const category = require('../routes/category');



app.use('/auth', auth);
app.use('/common', common);
app.use('/category', category);


module.exports = app;