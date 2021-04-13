const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
var morgan = require('morgan');


require('dotenv').config();



const app = express();
const postsRoute = require('./routes/api');


// public folder
app.use(express.static('public'));

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet.hidePoweredBy());



app.use('/api', postsRoute);

// Db connect
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });


// server is running
app.listen(process.env.PORT || 4000);