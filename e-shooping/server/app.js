const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors');

require('dotenv').config();




const app = express();
const postsRoute = require('./routes/api');


// public folder
app.use(express.static('public'));

// middleware
app.use(cors());
app.use(bodyParser.json());



app.use('/api', postsRoute);

// Db connect
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('database connected'))
    .catch(() => console.log('database not connected'));


// server is running
app.listen(process.env.PORT || 4000);