const express = require('express');
const router = express.Router();
const commonController = require('../controllers/commonController');

// base url :- api/common



router.get('/allOffers', commonController.allOffers)


module.exports = router;


