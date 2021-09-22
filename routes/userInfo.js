const express = require('express');
const router = express.Router();
const { requireLogin, validateUserInfo } = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const userInfoController = require('../controller/userInfoController')


router.get('/userInfo', requireLogin, catchAsync(userInfoController.renderUserInfo));

router.post('/userInfo', validateUserInfo, requireLogin, catchAsync(userInfoController.addUserInfo));

router.get('/physicalActivity', requireLogin, catchAsync(userInfoController.renderPhysicalActivity));

router.post('/physicalActivity', requireLogin, catchAsync(userInfoController.addPhysicalActivity));


module.exports = router;