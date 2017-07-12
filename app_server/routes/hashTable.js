/**
 * Created by Julius Alvarado on 7/12/2017.
 */
var pl = " ->    ";
function dash() {
    // helper to make results in terminal window more readable
    console.log();
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log();

}
function HashTableClass() {
    var table = [];

    this.put = function (key, value) {
        var pos = loseloseHashCode(key);
        // console.log(' ->  ' + pos + ' - ' + key);
        table[pos] = value;
    };

    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };

    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
}

dash();
console.log("in the 'hasTable.js' file:");
console.log();
function hashTableTest() {
    var hash = new HashTableClass();
    hash.put('foo', 'felicia@mail.com');
    hash.put('car', 'carina@mail.com');
    hash.put('voo', 'vanessa@mail.com');
    hash.put('jar', 'jessica@mail.com');
    console.log(pl+hash.get('car'));
    console.log(pl+hash.get('moo'));
    hash.remove('jar');
    console.log(pl+hash.get('jar'));
}
hashTableTest();
dash();