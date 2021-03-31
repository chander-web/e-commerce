const User = require('../models/UserModel');
const apiResponse = require('../helpers/apiResponse');
const bcrypt = require('bcrypt');


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