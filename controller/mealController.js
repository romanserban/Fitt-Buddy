const User = require('../model/user')
const Meal = require('../model/meal');


module.exports.renderNewMeal = async (req, res) => {
    const user = await User.findById(res.locals.currentUser);
    res.render('meal/new.ejs', { user });
}

module.exports.addNewMeal = async (req, res) => {
    const m = new Meal(req.body.meal);
    const user = await User.findById(res.locals.currentUser);
    m.day = Date.now();
    user.meal.push(m);
    await m.save();
    await user.save();
    res.redirect('/tracking');
}

module.exports.indexMeals = async (req, res) => {
    const user = await User.findById(res.locals.currentUser).populate('meal');
    res.render('meal/list.ejs', { user });
}

module.exports.deleteMeal = async (req, res) => {
    const { id } = req.params;
    await Meal.findByIdAndDelete(id);
    req.flash('success', 'You delete a meal!')
    res.redirect(`/tracking`);
}
module.exports.renderMeal = async (req, res) => {
    const meal = await Meal.findById(req.params.id);
    res.render('meal/edit.ejs', { meal });
}
module.exports.updateMeal = async (req, res) => {
    const { id } = req.params;
    await Meal.findByIdAndUpdate(id, { ...req.body.meal });
    req.flash('success', 'Your update was successfully!')
    res.redirect(`/tracking`);
}