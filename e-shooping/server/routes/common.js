const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const commonController = require('../controllers/commonController');

// base url :- api/common



router.get('/allOffers', commonController.allOffers);

router.get('/sidebar/:slug', commonController.sidebar);


module.exports = router;


