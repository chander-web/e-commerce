const User = require('../models/UserModel');
const apiResponse = require('../helpers/apiResponse');
var jwt = require('jsonwebtoken');
var fs = require('fs');
require('dotenv').config();

exports.imageUpload = [(req, res, cb) => {
    const dir = `./public/upload/${req.body.category}`;
    fs.exists(dir, exists => {
        const categoryName = req.body.category;
        const basepath = req.file.destination;
        const fileName = req.file.filename;
        if (!exists) {
            fs.mkdir(dir, error => { });
            fs.rename(`${basepath}${fileName}`, `${basepath}${categoryName}/${fileName}`, error => { });
        } else {
            fs.rename(`${basepath}${fileName}`, `${basepath}${categoryName}/${fileName}`, error => { });
        }
    })

    // folerName = req.body;
    // console.log(folerName)
    // uploadImage(req, res, function (err) {
    //     if (!req.file) {
    //         //error handle
    //     } else {
    //         // res.json({ success: true, cv: cv })
    //     }
    // })


    // const isEmailExists = await User.findOne({ email: result.email });
    // if (!isEmailExists) {
    //     // save register 
    //     const user = new User(result);
    //     const salt = await bcrypt.genSalt(10);
    //     user.password = await bcrypt.hash(user.password, salt);

    //     user.save()
    //         .then(data => {
    //             apiResponse.successResponseWithData(res, 'Register created SuccesFully', data);
    //         })
    // } else {

    //     apiResponse.ConflictResponse(res, 'Email already Exists');

    // }
}
]

