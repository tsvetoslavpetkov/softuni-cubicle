const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        minlength: 4,
        maxlength: 20,
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
