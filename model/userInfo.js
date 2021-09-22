const mongoose = require('mongoose');
const userInfoSchema = new mongoose.Schema({
    userId: {
        type: Object
    },
    weight: {
        type: Number,
        required: [true, 'connot be empty'],
    },
    height: {
        type: Number,
        required: [true, 'connot be empty'],
    },
    bday: {
        type: Date,
        required: [true, 'connot be empty'],
    },
    gender: {
        type: String,
        required: [true, 'cannot be empty'],
        enum: ['male', 'female'],
        default: 'male'
    },
    calories: {
        type: String
    },
    carbs: {
        type: String
    },
    fats: {
        type: String
    },
    protein: {
        type: String
    },
    program: {
        type: String,
        enum: ['gain', 'loss', 'maintain'],
    }
})

module.exports = mongoose.model('userInfo', userInfoSchema);


