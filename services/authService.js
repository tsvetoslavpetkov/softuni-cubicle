const bcrypt = require('bcrypt');
const User = require('../models/User.js')

const hash = (password) => {
     return bcrypt.hash(password, 10)
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
    createUser
}