const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        minlength: 4,
        maxlength: 15,
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
})
