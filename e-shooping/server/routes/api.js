const express = require('express');
const app = express();
const auth = require('../routes/auth');

const menu = require('./menu');
const products = require('../routes/products');
const common = require('../routes/common');
const search = require('../routes/search');



app.use('/auth', auth);
app.use('/menu', menu);
app.use('/products', products);
app.use('/common', common);
app.use('/search', search);

module.exports = app;