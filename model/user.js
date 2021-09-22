const mongoose = require('mongoose');
const Meal = require('../model/meal')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Cannot be empty'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'cannot be empty']
    },
    email: {
        type: String,
        required: [true, 'cannot be empty'],
        unique: true
    },
    meal: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meal'
    }]
})

module.exports = mongoose.model('User', userSchema);

