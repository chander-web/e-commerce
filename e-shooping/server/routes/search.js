const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const searchController = require('../controllers/searchController');

// base url :- api/search

router.get('/autoComplete', searchController.autoComplete);
router.post('/list', searchController.list);




module.exports = router;


