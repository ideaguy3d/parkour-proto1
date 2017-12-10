/**
 * Created by Julius Alvarado on 6/18/2017.
 */

const express = require('express');
const router = express.Router();

function dash() {
    // helper to make results in terminal window more readable
    console.log();
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log();

}

function SetClass() {
    let items = {};

    this.has = function (val) {
        return items.hasOwnProperty(val);
    };

    this.add = function (val) {
        // should also make sure this is a raw value e.g. string, number, or boolean
        if (!this.has(val)) {
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

    this.size = function () {
        return Object.keys(items).length;
    };

    this.values = function () {
        return Object.keys(items);
    };

    this.union = function (otherSet) {
        var unionSet = new SetClass();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (var e = 0; e < values.length; e++) {
            var obj = values[e];
            unionSet.add(obj);
        }
        return unionSet;
    };

    this.intersection = function(otherSet){
        var intersectionSet = new SetClass();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            var obj = values[i];
            if(otherSet.has(obj)) intersectionSet.add(obj);
        }
        return intersectionSet;
    };

    this.difference = function(otherSet){
       var diffSet = new SetClass();
       var values = this.values();
        for (var i = 0; i < values.length; i++) {
            var obj = values[i];
            if(!otherSet.has(obj)) diffSet.add(obj); 
        }
       return diffSet;
    };

    this.subset = function(otherSet){
        var values = this.values();
        if(this.size() > otherSet.size()) return false;
        else {
            for (var i = 0; i < values.length; i++) {
                var obj = values[i];
                if(!otherSet.has(obj)) return false;
            }
            return true;
        }
    }
} // end of SetClass()

//#region testing set operations
dash();
console.log("in Set data structure file:");
function unionSetTest() {
    var setA = new SetClass();
    for (var i = 0; i < 4; i++) {
        var obj = setA[i];
        setA.add(i);
    }

    var setB = new SetClass();
    for (var e = 0; e < [3, 4, 5, 6].length; e++) {
        var obj1 = [3, 4, 5, 6][e];
        setB.add(obj1);
    }
    console.log("setA and setB");
    console.log(setA.values());
    console.log(setB.values());
    var unionAB = setA.union(setB);
    console.log(unionAB.values());
}
function intersectionSetTest() {
    var setA = new SetClass(), setB = new SetClass();
    setA.add(1); setA.add(2); setA.add(3); setA.add(4);
    setB.add(4) ;setB.add(3); setB.add(7); setB.add(19);
    var intersectionSet = setA.intersection(setB);
    console.log("intersectionSet.values() = ");
    console.log(intersectionSet.values());
}
function differenceSetTest() {
    var setA = new SetClass(), setB = new SetClass();
    setA.add(1); setA.add(2); setA.add(3); setA.add(19);
    setB.add(2); setB.add(3); setB.add(4);
    var diffAB = setA.difference(setB),
    diffBA = setB.difference(setA);
    console.log("setA.difference(setB) = ");
    console.log(diffAB.values());
    console.log("setB.difference(setA) = ");
    console.log(diffBA.values());
}
function subsetSetTest() {
    var setA = new SetClass(), setB = new SetClass(), setC = new SetClass();
    setA.add(1); setB.add(2);
    setB.add(1); setB.add(2); setB.add(3);
    setC.add(2); setC.add(3); setC.add(4);
    console.log("setA.subset(setB) ? "+setA.subset(setB));
    console.log("setA.subset(setC) ? "+setA.subset(setC));
}
// unionSetTest();
// intersectionSetTest();
// differenceSetTest();
// subsetSetTest();
dash();
//#endregion

router.get('/', function (req, res, next) {
    res.send('update 1: Set Data Structure implementation');
});

router.get('/add', function (req, res, next) {
    var a = req.query.a,
        b = req.query.b;
    var set = new SetClass();
    set.add(a);
    set.add(b);
    // console.log("set.values() = ");
    // console.log(set.values());
    res.send("result = " + set.values());
});

module.exports = router;