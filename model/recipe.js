const mongoose = require('mongoose');
const Review = require('./review')
const recipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Cannot be empty'],
            unique: true
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
        image: String,
        description: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review"
            }
        ]


    }
)

recipeSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Recipe', recipeSchema);