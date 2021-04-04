const express = require('express');
const app = express();
const auth = require('../routes/auth');

const category = require('../routes/category');
const products = require('../routes/products');



app.use('/auth', auth);
app.use('/category', category);
app.use('/products', products);


module.exports = app;