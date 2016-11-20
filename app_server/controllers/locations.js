/**
 * Created by Julius Alvarado on 10/30/2016.
 */

module.exports.homelist = function (req, res) {
    res.render('index', {
        title: 'Hardcore Parkore web app',
        pageHeader: {
            title: 'HardcoreParkore',
            strapline: 'Find locations near you to do some Parkour!'
        }
    });
};


module.exports.locationInfo = function (req, res) {
    res.render('location-info',
        {
            title: 'Location info for parkour spot.',
            pageHeader: {title: 'HardcoreParkore.com'},
            sidebar: {
                context: 'Parkour is a new sport that uses techniques from gymnastics and acrobatics to own street street structures by doing tricks off them.',
                callToAction: 'If you\'ve been to this parkour spot and would like to write what you liked or didn\'t like about this spot... Leave a review !  '
            },
            location: {
                name: '-HardcoreParkore-',
                address: '125 Jump Street, San Jose, ca 95112',
                rating: 3,
                facilities: ['Stair Sets', 'Gaps', 'Parallel Walls'],
                coords: {lat: 37.774929, lng: -122.419416},
                openingTimes: [
                {
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                },{
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                },{
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [
                {
                    author: 'Romulus Augustus',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                    author: 'Julius Maximus',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. Freeform wasn\'t great, but the Phalanx jumping was fast.'
                }]
            }
        }
    );

};

module.exports.addReview = function (req, res) {
    res.render('location-review-form',
        {title: 'Review this parkour location'});
};


//\\