const bcrypt = require('bcrypt');
const User = require('../models/User.js')
const { SECRET } = require('../config/constants.js');
const { jwtSign } = require('../utils/jwtUtils.js')

const hash = (password) => {
    return bcrypt.hash(password, 10)
}

const loginUser = async (username, password) => {
    let user = await User.findOne({ username })
        
    if (!user) {
        throw {message: 'Invalid username or password'}
    }
    
    let isPasswordValid = await bcrypt.compare(password, user.password);
   
    if(!isPasswordValid){
        throw {message: 'Invalid username or password'}
    }
    
    return createToken(user)    
}

const registerUser = (username, password) => {
    hash(password).then(password => {
        let user = new User({
            username,
            password
        })
        return user.save()
    })
}

const createToken = (user) => {
    let payload = {
        id: user._id,
        username: user.username
    }
    return jwtSign(payload, SECRET);
}

module.exports = {
    registerUser,
    loginUser
}