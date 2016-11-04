/**
 * Created by Julius Alvarado on 10/30/2016.
 */

module.exports.homelist = function(req, res){
    res.render('index', {title: 'Hardcore Parkore web app'});
};

module.exports.locationInfo = function(req, res){
    res.render('location-info', {title: 'Location info for parkour spots'});

};

module.exports.addReview = function(req, res){
    res.render('location-review-form', {title: 'Review this parkour location'});

};

//