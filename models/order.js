const mongoose = require('mongoose');
const User = require('./user')

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    placed_by: {
        type: User,
        required: true,
    },
    collected_by: {
        type: User,
        required: false,
    },
    placed_at: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    delivered_at: {
        type: Date,
        required: false,
    },
})

module.exports = mongoose.model('Order', orderSchema)