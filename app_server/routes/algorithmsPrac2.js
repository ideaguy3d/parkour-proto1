/**
 * Created by Julius Alvarado on 8/22/2017.
 */
var pl = " ->    ";

function HashTableClass() {
    let table = [];

    let ValuePairStruct = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return `[${this.key} - ${this.value}]`;
        };
    };

    function primeHashFunction(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 37 + key.charCodeAt(i);
        }
        return hash % 1017;
    }

    this.put = function (key, value) {

    };

    this.remove = function () {

    };

    this.get = function (key) {

    };
}


console.log("in the 'hasTable.js' file:");
console.log();
function hashTableTest() {
    let hash = new HashTableClass();
    hash.put('foo', 'felicia@mail.com');
    hash.put('car', 'carina@mail.com');
    hash.put('voo', 'vanessa@mail.com');
    hash.put('jar', 'jessica@mail.com');
    console.log(pl + hash.get('car'));
    console.log(pl + hash.get('moo'));
    hash.remove('jar');
    console.log(pl + hash.get('jar'));
}

hashTableTest();