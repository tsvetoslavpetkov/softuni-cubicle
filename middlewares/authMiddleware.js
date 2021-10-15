const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/constants.js')

const auth = async (req, res, next) => {
    let token = req.cookies['cubicle_auth_token'];

    if (!token) {
        return next();
    }

    jwt.verify(token, SECRET, function (err, decodedToken) {
        if (err) {
            return res.status(401).redirect('/login')
        }

        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();
    });
}

module.exports = auth;