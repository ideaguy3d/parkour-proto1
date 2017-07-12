/**
 * Created by Julius Alvarado on 7/11/2017.
 */

function dash() {
    // helper to make results in terminal window more readable
    console.log();
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log();

}
function MapClass() {
    var items = {};

    this.has = function (key) {
        return key in items;
    };

    this.set = function (key, value) {
        items[key] = value;
    };

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function () {
        var vals = [];
        for (var k in items) {
            if (items.hasOwnProperty(k)) { // or this.has(k) ?
                vals.push(items[k]);
            }
        }
        return vals;
    };

    this.clear = function () {
        items = {};
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.keys = function () {

    };
}

dash();
console.log("in the Map data structure file:");

dash();