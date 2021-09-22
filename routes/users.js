const express = require('express');
const router = express.Router();
const { requireLogin, validateUser } = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const userController = require('../controller/userController')

router.get('/register', userController.renderUser);

router.post('/register', validateUser, catchAsync(userController.register));

router.get('/login', userController.renderLogin);

router.post('/login', catchAsync(userController.login));

router.get('/logout', catchAsync(userController.logout));

router.get('/profile/:id', requireLogin, catchAsync(userController.renderProfile));

router.get('/changePassword/:id', requireLogin, catchAsync(userController.renderChangePw));

router.put('/changePassword/:id', requireLogin, catchAsync(userController.changePw));

module.exports = router;