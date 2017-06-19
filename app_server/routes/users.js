var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/rankings', function (req, res, next) {
    var rankings = {
        romulus: 98,
        julius: 97,
        commodus: 92,
        optimus: 89,
        overall: {
            series1: "foobar info",
            series2: 'moocar info',
            series3: 'boofar info'
        }
    };
    res.json(rankings);
});

module.exports = router;
