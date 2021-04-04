const express = require('express');
const multer = require('multer')
const path = require('path');
var fs = require('fs');


var folderUrl = '';
var simpleStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./public/${folderUrl}/`)
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const simpleUpload = multer({ storage: simpleStorage });
exports.simpleUploadExecute = (path) => {
    folderUrl = path
    return simpleUpload.single('image');
}







// This is for dynamic folder operation
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

exports.upload = multer({ storage: storage });

exports.isFileExist = (req) => {
    console.log(req);
    const dir = `./public/upload/${req.body.category}`;

    fs.exists(dir, exists => {
        const categoryName = req.body.category;
        const basepath = req.file.destination;
        const fileName = req.file.filename;
        if (!exists) {
            fs.mkdir(dir, error => {
                if (error) {
                    console.log(error);
                }
                else {
                    fs.rename(`${basepath}${fileName}`, `${basepath}${categoryName}/${fileName}`, error => { });
                }
            });
        } else {
            fs.rename(`${basepath}${fileName}`, `${basepath}${categoryName}/${fileName}`, error => { });
        }
    })
}










