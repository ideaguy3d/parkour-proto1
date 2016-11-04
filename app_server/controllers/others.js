/**
 * Created by Julius Alvarado on 11/1/2016.
 */

module.exports.about = function(req, res){
    res.render('generic-text', {title: 'About Hardcore Parkour'});
};

module.exports.parkour = function(req, res){
    res.render('locations-list', {title: 'The Sport of Parkour'});
};

//