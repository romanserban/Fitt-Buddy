const Review = require('../model/review');
const Recipe = require('../model/recipe');



module.exports.addReview = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = res.locals.currentUser;
    recipe.reviews.push(review);
    await review.save();
    await recipe.save();
    req.flash('succes', 'You add a new review');
    res.redirect(`/recipes/${recipe._id}`)
}

module.exports.deleteReview = async (req, res) => {
    const { id, idReview } = req.params;
    await Review.findByIdAndDelete(idReview);
    await Recipe.findByIdAndUpdate(id, { $pull: { reviews: idReview } });
    res.redirect(`/recipes/${id}`);
}