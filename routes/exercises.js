const express = require('express');
const router = express.Router();
const { requireLogin, validateExercise } = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const exerciseController = require('../controller/exerciseController')


router.get('/', catchAsync(exerciseController.renderExercises))

router.get('/category/:category', catchAsync(exerciseController.renderByCategory))

router.get('/new', requireLogin, catchAsync(exerciseController.renderNewExercise))

router.post('/new', requireLogin, validateExercise, catchAsync(exerciseController.newExercise))

router.get('/myExercises', requireLogin, catchAsync(exerciseController.myExercises))

router.delete('/:id', requireLogin, catchAsync(exerciseController.deleteExercise))

module.exports = router;