const express = require('express');
const router = express.Router();
const { requireLogin, validateMeal } = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const mealController = require('../controller/mealController');




router.get('/meal/new', requireLogin, catchAsync(mealController.renderNewMeal))

router.post('/meal', requireLogin, catchAsync(mealController.addNewMeal))

router.get('/meal/list', requireLogin, catchAsync(mealController.indexMeals))

router.post('/meal/add', requireLogin, catchAsync(mealController.addNewMeal))

router.delete('/meal/:id', requireLogin, catchAsync(mealController.deleteMeal))

router.get('/meal/:id', requireLogin, catchAsync(mealController.renderMeal))

router.put('/meal/:id', requireLogin, validateMeal, catchAsync(mealController.updateMeal))



module.exports = router;