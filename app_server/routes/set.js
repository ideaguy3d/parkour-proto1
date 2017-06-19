/**
 * Created by Julius Alvarado on 6/18/2017.
 */

var express = require('express');
var router = express.Router();

function JSetClass() {
    var items = {};

    this.has = function (val) {
        return items.hasOwnProperty(val);
    };

    this.add = function (val) {
        // should also make sure this is a raw value e.g. string, number, or boolean
        if (!this.has(val)) {
            console.log("val "+ val);
            items[val] = val;
            return true;
        }
        return false;
    };

    this.remove = function (val) {
        if (this.has(val)) {
            delete items[val];
            return true;
        }
        return false;
    };

    this.clear = function () {
        items = {};
    };

    this.size = function(){
        return Object.keys(items).length;
    };

    this.values = function(){
        return Object.keys(items);
    }
}

router.get('/', function (req, res, next) {
    res.send('update 1: Set Data Structure implementation');
});

router.get('/add', function (req, res, next) {
    var a = req.query.a,
        b = req.query.b;
    var set = new JSetClass();
    set.add(a);
    set.add(b);
    // console.log("set.values() = ");
    // console.log(set.values());
    res.send("result = "+set.values());
});

module.exports = router;