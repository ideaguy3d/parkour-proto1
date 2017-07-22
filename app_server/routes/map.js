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
    let items = {};

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
        return Object.keys(items);
    };

    this.getItems = function () {
        return items;
    }
}

dash();
console.log("in the Map data structure file:");
console.log();
function mapTest() {
    var map = new MapClass();
    map.set('foo', ' - fred, foo@mail.com');
    map.set('bar', ' - brenda, bar@mail.com');
    map.set('voo', ' - victoria, voo@mail.com');
    map.set('car', ' - carol, car@mail.com');
    console.log("-> map.has('voo') = " + map.has('voo'));
    console.log("-> map.size() = " + map.size());
    console.log("-> map.keys() = " + map.keys());
    console.log("-> map.values() = " + map.values());
    console.log("-> map.get('bar') = " + map.get('bar'));
    map.remove('foo');
    console.log("< removed 'foo' >");
    console.log("-> map.has('voo') = " + map.has('voo'));
    console.log("-> map.size() = " + map.size());
    console.log("-> map.keys() = " + map.keys());
    console.log("-> map.values() = " + map.values());
    console.log("-> map.get('foo') = " + map.get('foo'));
    console.log("-> map.getItems() = "+map.getItems());
}
// mapTest();
dash();