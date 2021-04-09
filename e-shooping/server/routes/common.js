const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const commonController = require('../controllers/commonController');

// base url :- api/common



router.get('/allOffers', commonController.allOffers);


module.exports = router;


