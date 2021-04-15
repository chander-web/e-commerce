const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const searchController = require('../controllers/searchController');

// base url :- api/search

router.get('/autoComplete', searchController.autoComplete);




module.exports = router;


