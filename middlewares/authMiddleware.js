const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/constants.js')
const User = require('../models/User.js')

const auth = async (req, res, next) => {
    let token = req.cookies['cubicle_auth_token'];
    let decodedToken = false;

    if (token) {
        decodedToken = jwt.verify(req.cookies['cubicle_auth_token'], SECRET);
        let user = await User.findById(decodedToken.id)
        if (user) {
            res.user = user;
            res.locals.user = user;
            next();
        }
    } else {
        res.redirect('/login')
    }
}

module.exports = auth;