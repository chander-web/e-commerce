const User = require('../models/UserModel');
const apiResponse = require('../helpers/apiResponse');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();



exports.register = [async (req, res) => {
    const result = req.body;
    const isEmailExists = await User.findOne({ email: result.email });
    if (!isEmailExists) {
        // save register 
        const user = new User(result);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        user.save()
            .then(data => {
                apiResponse.successResponseWithData(res, 'Register created SuccesFully', data);
            })
    } else {

        apiResponse.ConflictResponse(res, 'Email already Exists');

    }
}
]


exports.login = [async (req, res) => {
    const result = req.body;
    const isEmailExists = await User.findOne({ email: result.email });
    if (isEmailExists) {
        passwordValidationForLogin(result, isEmailExists, res);
    } else {
        apiResponse.validationError(res, 'Email or password is incorrect');
    }



}]

const passwordValidationForLogin = async (result, emailRes, res) => {
    const passwordValidation = await bcrypt.compare(result.password, emailRes.password);
    if (passwordValidation) {
        const token = jwt.sign({ _id: emailRes._id }, process.env.TOKEN_SECRET);

        const data = {
            status: true,
            message: 'Login is sucessfully',
            token: token
        };
        return res.status(200).json(data);

    } else {
        apiResponse.validationError(res, 'Invalid Password');

    }
}