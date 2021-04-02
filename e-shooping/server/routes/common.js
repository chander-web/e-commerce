const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path');




const imageUploadController = require('../controllers/imageUploadController');
// const categoryValidation = require('../validations/category/');
// categoryValidation.saveCategoryValidation, 

// base url :- api/common

// set storage multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname} - ${Date.now()}${path.extname(file.originalname)}`)
    }
})

// Init upload
const upload = multer({ storage: storage });



router.post('/imageUpload', upload.single('image'), imageUploadController.imageUpload)





module.exports = router;



