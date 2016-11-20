/**
 * Created by Julius Alvarado on 11/8/2016.
 */

var mongoose = require('mongoose');

var openingTimeShema = new mongoose.Schema({
    days: {type: Number, required: true},
    opening: String, closing: String,
    closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 0, "default": 0},
    timestamp: {type: Date, "default": Date.now},
    reviewText: String
});

var locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number, "default": 0, min: 0, max: 5},
    facilities: [String],
    distance: Number,
    coords: {type: [Number], index: '2dsphere'},
    openingTimes: [openingTimeShema],
    review: [reviewSchema]
});

mongoose.model('Location', locationSchema);