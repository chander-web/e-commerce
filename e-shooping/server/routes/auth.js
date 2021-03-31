const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const cutomValidation = require('../validations/auth/authValidation');

// base url :- api/auth

router.post('/login', cutomValidation.loginValidation, authController.login)
router.post('/register', cutomValidation.authValidation, authController.register)


module.exports = router;