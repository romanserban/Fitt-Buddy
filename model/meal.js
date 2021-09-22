const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Cannot be empty'],
        },
        calories: {
            type: Number,
            required: [true, 'Cannot be empty'],
        },
        carbs: {
            type: Number,
            required: [true, 'Cannot be empty'],
        },
        fats: {
            type: Number,
            required: [true, 'Cannot be empty'],
        },
        protein: {
            type: Number,
            required: [true, 'Cannot be empty'],
        },
        day: {
            type: Date,
            required: [true, 'Cannot be empty'],
        },


    }
)

module.exports = mongoose.model('Meal', mealSchema);