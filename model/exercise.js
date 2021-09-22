const mongoose = require('mongoose');
const exerciseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Cannot be empty'],
            unique: true
        },
        category: {
            type: String,
            enum: ['abs', 'biceps', 'triceps', 'back', 'shoulders',
                'chest', 'calves', 'forearms', 'trapesiuz', 'legs'],
            required: [true, 'Cannot be empty'],
        },
        description: {
            type: String,
            required: [true, 'Cannot be empty']
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

    }
)

module.exports = mongoose.model('Exercise', exerciseSchema);