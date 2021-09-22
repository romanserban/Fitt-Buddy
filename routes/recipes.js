const express = require('express');
const router = express.Router();
const path = require('path');
const recipeController = require('../controller/recipeController');
const catchAsync = require('../utils/catchAsync');
const { validateRecipe, requireLogin } = require('../middleware');

const multer = require('multer');

const fs = require('fs');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (request, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

router.get('/', catchAsync(recipeController.indexRecipes));

router.get('/myrecipes', requireLogin, catchAsync(recipeController.indexMyRecipes));

router.get('/new', requireLogin, catchAsync(recipeController.renderNewRecipe));

router.post('/', upload.single('image'), validateRecipe, requireLogin, catchAsync(recipeController.addNewRecipe));

router.get('/:id', requireLogin, catchAsync(recipeController.getRecipeById));

router.get('/:id/edit', requireLogin, catchAsync(recipeController.renderEditRecipe));

router.put('/:id', validateRecipe, requireLogin, catchAsync(recipeController.editRecipe));

router.delete('/:id', requireLogin, catchAsync(recipeController.deleteRecipe));

module.exports = router;