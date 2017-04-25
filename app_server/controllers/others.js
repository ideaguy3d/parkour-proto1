/**
 * Created by Julius Alvarado on 11/1/2016.
 */

module.exports.about = function (req, res) {
    res.render('generic-text',
        {title: 'About Hardcore Parkour'}
    );
};

//
module.exports.parkour = function (req, res) {
    res.render('locations-list', {
        title: 'The Sport of Parkour',
        pageHeader: {
            title: 'HardcoreParkore',
            strapline: ' Find locations near you to do some Parkour!'

        },
        sidebar: "Ello, Looking for some good spots to do some parkour? HardcoreParkore.com helps finds the best places to do some parkour.",
        locations: [
            {
                name: 'Freerunning Palace',
                address: '125 Jump Street, Silicon Valleys, ca 95112',
                rating: 3,
                facilities: ['Stair Sets', 'Gaps', 'Parallel Walls'],
                distance: '100m'
            }, {
                name: 'Freeform Jungle',
                address: '125 Freeform Street, Silicon Valleys, ca 95112',
                rating: 4,
                facilities: ['Stair Sets', 'Gaps'],
                distance: '200m'
            }, {
                name: 'Phalanx Jumpers Playground',
                address: '125 Backflip Street, Silicon Valleys, ca 95112',
                rating: 2,
                facilities: ['Stair Sets', 'Gaps', 'Parallel Walls'],
                distance: '250m'
            }
        ]
    });
};

//