const Recipe = require('../model/recipe');
const fs = require('fs');

module.exports.indexRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).populate('author');
    res.render('recipes/index', { recipes });
}

module.exports.indexMyRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).populate('author');
    res.render('recipes/myrecipes', { recipes });
}

module.exports.renderNewRecipe = async (req, res) => {
    res.render('recipes/new');
}

module.exports.addNewRecipe = async (req, res) => {
    const r = new Recipe(req.body.recipe);
    r.image = '/' + req.file.path;
    r.author = res.locals.currentUser;
    req.flash('success', 'You add a recipe successfully!');
    await r.save();
    res.redirect(`/recipes/${r._id}`);
}

module.exports.getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }
    ).populate('author');
    res.render('recipes/show', { recipe });
}

module.exports.renderEditRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.render('recipes/edit', { recipe });
}

module.exports.editRecipe = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id, { ...req.body.recipe });
    req.flash('success', 'The recipe was edit successfully!')
    res.redirect(`/recipes/${recipe._id}`);
}


module.exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const recipe = await Recipe.findById(id);
    var str = recipe.image;
    const pathFile = str.slice(1);
    fs.unlinkSync(pathFile)
    await Recipe.findByIdAndDelete(id);
    req.flash('success', 'You succesfully deleted your recipe!')
    res.redirect(`/recipes/myrecipes`);
}