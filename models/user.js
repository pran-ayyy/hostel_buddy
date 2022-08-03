const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    regno: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    friends: {
        type: mongoose.model('User', userschema),
        required: false,
    }
})

module.exports = mongoose.model('User', userSchema)