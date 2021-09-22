const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const { requireLogin, validateReview } = require('../middleware');
const reviewController = require('../controller/reviewController');



router.post('/', requireLogin, validateReview, catchAsync(reviewController.addReview))

router.delete('/:idReview', catchAsync(reviewController.deleteReview))

module.exports = router;