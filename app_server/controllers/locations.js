/**
 * Created by Julius Alvarado on 10/30/2016.
 */

module.exports.homelist = function(req, res){
    res.render('index', {title: 'Hardcore Parkore Listings'});
};

module.exports.locationInfo = function(req, res){
    res.render('index', {title: 'Location info for parkour spots'});

};

module.exports.addReview = function(req, res){
    res.render('index', {title: 'Review this parkour location'});

};

//