const Exercise = require('../model/exercise');



module.exports.renderExercises = async (req, res) => {
    const exercises = await Exercise.find({}).populate('author');
    const category = null;
    res.render('exercises/index.ejs', { exercises, category });
}

module.exports.renderByCategory = async (req, res) => {
    const { category } = req.params;
    const exercises = await Exercise.find({ category: category }).populate('author');
    res.render('exercises/category.ejs', { exercises });
}

module.exports.renderNewExercise = async (req, res) => {
    res.render('exercises/new.ejs');
}

module.exports.newExercise = async (req, res) => {
    const e = new Exercise(req.body.exercise)
    e.author = res.locals.currentUser;
    await e.save();
    req.flash('success', 'You made a new exercise!')
    res.redirect('/exercises')
}

module.exports.myExercises = async (req, res) => {
    const exercises = await Exercise.find({ author: res.locals.currentUser }).populate('author');
    res.render('exercises/myExercises.ejs', { exercises });
}

module.exports.deleteExercise = async (req, res) => {
    const { id } = req.params;
    await Exercise.findByIdAndDelete(id);
    req.flash('success', 'You delete exercise!')
    res.redirect(`/exercises/myExercises`);
}
