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

    var ValuePairStruct = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']';
        }
    };

    this.put = function (key, value) {
        var pos = loseloseHashCode(key);
        if (table[pos] === undefined) {
            table[pos] = new ValuePairStruct(key, value);
        } else {
            var index = ++pos;
            while (table[index] !== undefined) {
                ++index;
            }
            table[index] = new ValuePairStruct(key, value);
        }
    };

    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };

    this.get = function (key) {
        var pos = loseloseHashCode(key);
        if (table[pos] !== undefined) {
            if (table[pos].key === key) return table[pos].value;
            else {
                var index = ++pos, infinieLoopGaurd=0;
                console.log("above loop index = "+index);
                console.log(); console.log(table[index]); console.log();
                while (table[index] === undefined || table[index].key !== key) {
                    index++;
                    infinieLoopGaurd++;
                    if(infinieLoopGaurd > 10000000) {
                        console.log(table[16]);
                        console.log("index = "+index); console.log();
                        break;
                    }
                }
                console.log("after while loop, infinieLoopGaurd = "+infinieLoopGaurd);
                if (table[index].key === key) return table[index].value;
            }
        }
        return undefined;
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
    console.log(pl + hash.get('car'));
    console.log(pl + hash.get('moo'));
    hash.remove('jar');
    console.log(pl + hash.get('jar'));
}
function testHash2() {
    var hash = new HashTableClass();
    hash.put(' Gandalf', 'gandalf@ email.com');
    hash.put(' John', 'johnsnow@ email.com');
    hash.put(' Tyrion', 'tyrion@ email.com');
    hash.put(' Aaron', 'aaron@ email.com');
    hash.put(' Donnie', 'donnie@ email.com');
    hash.put(' Ana', 'ana@ email.com');
    hash.put(' Jonathan', 'jonathan@ email.com');
    hash.put(' Jamie', 'jamie@ email.com');
    hash.put(' Sue', 'sue@ email.com');
    hash.put(' Mindy', 'mindy@ email.com');
    hash.put(' Paul', 'paul@ email.com');
    hash.put(' Nathan', 'nathan@ email.com');
    hash.put('foo', 'felicia@mail.com');
    hash.put('bar', 'brandon@mail.com');
    hash.put('car', 'carina@mail.com');
    hash.put('voo', 'vanessa@mail.com');
    hash.put('jar', 'jessica@mail.com');
    console.log("hash.get() = ");
    console.log(hash.get(' Ana'));
    console.log("uhhhhhhhhh, hello ????????");
}
// hashTableTest();
testHash2();
dash();