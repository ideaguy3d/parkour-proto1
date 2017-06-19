/**
 * Created by Julius Alvarado on 11/1/2016.
 */
var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET locations collections pages. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* GET pages for other collections */
router.get('/about', ctrlOthers.about);
router.get('/parkour', ctrlOthers.parkour);

module.exports = router;

//\\