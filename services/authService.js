const bcrypt = require('bcrypt');
const User = require('../models/User.js')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const constants = require('../config/constants.js')

const hash = (password) => {
    return bcrypt.hash(password, 10)
}

const areCredentialsValid = async (username, password) => {
    let user = await (User.findOne({ username }));
    if (user) {
        let isPasswordValid = await bcrypt.compare(password, user.password);
        return isPasswordValid ? true : false 
    }
}

const createToken = (user) => {
    return jwt.sign(
        { id: user._id, username: user.username },
        constants.SECRET,
        { expiresIn: '5h' })
}

const createUser = (username, password) => {
    hash(password).then(password => {
        let user = new User({
            username,
            password
        })

        return user.save()
    })
}

module.exports = {
    createUser,
    checkCredentials
}