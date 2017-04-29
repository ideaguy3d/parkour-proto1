/**
 * Created by Julius Alvarado on 11/12/2016.
 */
var express = require ('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations.api.ctrl');
var ctrlReviews = require('../controllers/reviews.api.ctrl');

//routing locations
router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationsid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationsid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationsid', ctrlLocations.locationsDeleteOne);

//routing reviews
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewsid', ctrlReviews.reviewsReadOne);

module.exports = router;




//\\