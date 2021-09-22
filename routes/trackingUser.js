const express = require('express');
const router = express.Router();
const trackingController = require('../controller/trackingController');
const { requireLogin } = require('../middleware');
const catchAsync = require('../utils/catchAsync');


router.get('/tracking', requireLogin, catchAsync(trackingController.renterTraking))


module.exports = router;