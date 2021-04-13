const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const menuController = require('../controllers/menuController');
const validation = require('../validations/menu/topMenuValidation');
// base url :- api/category

router.post('/create',
  validation.menuValidation, menuController.create);



router.get('/getAllMenu', menuController.getAllMenu);

module.exports = router;


