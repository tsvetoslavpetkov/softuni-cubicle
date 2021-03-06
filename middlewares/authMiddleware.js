const { jwtVerify } = require('../utils/jwtUtils.js')
const { SECRET, TOKEN_COOKIE_NAME } = require('../config/constants.js')

exports.auth = (req, res, next) => {
    let token = req.cookies[TOKEN_COOKIE_NAME];

    if (!token) {
        next();
        return
    }

    jwtVerify(token, SECRET)
        .then(decodedToken => {
            req.user = decodedToken;
            res.locals.user = decodedToken;
            next();
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).redirect('/login')
        })
};

exports.isAuth = (req, res, next) => {
    if(!req.user){
        return res.status(401).redirect('/login')
    }

    next();
};
