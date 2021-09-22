
const ExpressError = require('./utils/ExpressError');
const { userSchema, userInfoSchema, recipeSchema, exerciseSchema, reviewSchema, mealSchema } = require('./shemas');
const { request, response } = require('express');



module.exports.requireLogin = (request, response, next) => {
    if (!request.session.user_id) {
        return response.redirect('/login');
    }
    next();
}

module.exports.validateUser = (request, response, next) => {
    const { error } = userSchema.validate(request.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.validateUserInfo = (request, response, next) => {
    const { error } = userInfoSchema.validate(request.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.validateRecipe = (request, response, next) => {
    const { error } = recipeSchema.validate(request.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.validateReview = (request, response, next) => {
    const { error } = reviewSchema.validate(request.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.validateMeal = (request, response, next) => {
    const { error } = mealSchema.validate(request.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.validateExercise = (request, response, next) => {
    const { error } = exerciseSchema.validate(request.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}



