const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authValidation = require('../validations/auth/authValidation');

// base url :- api/auth

router.post('/register', authValidation, authController.register)


module.exports = router;