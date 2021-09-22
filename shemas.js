const Joi = require('joi');

module.exports.userSchema = Joi.object({
    user: Joi.object({
        username: Joi.string().min(5).required(),
        password: Joi.string().min(5).required(),
        email: Joi.string().required()
    }).required()
});

module.exports.userInfoSchema = Joi.object({
    moreInfo: Joi.object({
        weight: Joi.string().required(),
        height: Joi.string().required(),
        bday: Joi.date().required(),
        gender: Joi.string().required()
    }).required()
});


module.exports.recipeSchema = Joi.object({
    recipe: Joi.object({
        name: Joi.string().required(),
        calories: Joi.number().required().min(0),
        carbs: Joi.number().required().min(0),
        fats: Joi.number().required().min(0),
        protein: Joi.number().required().min(0),
        description: Joi.string().required(),
        image: Joi.string()
    }).required()
})


module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
})


module.exports.mealSchema = Joi.object({
    meal: Joi.object({
        name: Joi.string().required(),
        calories: Joi.number().required().min(0),
        carbs: Joi.number().required().min(0),
        fats: Joi.number().required().min(0),
        protein: Joi.number().required().min(0),
    }).required()
})

module.exports.exerciseSchema = Joi.object({
    exercise: Joi.object({
        name: Joi.string().required(),
        category: Joi.string().required(),
        description: Joi.string().required(),
    }).required()
})