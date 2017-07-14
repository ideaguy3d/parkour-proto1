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
        var pos = primeHashCode(key);
        console.log(pl+pl+key+' - '+pos);
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
        var pos = primeHashCode(key);
        if(table[pos] !== undefined) {
            if(table[pos].key === key) {
                table[pos] = undefined;
                return true;
            } else {
                var idx = ++pos, idx2 = pos++;
                console.log("idx = "+idx+", idx2 = "+idx2+", pos = ", pos);
                while(table[idx] === undefined || table[idx].key !== key) {
                    if(idx > table.length) {
                        console.error("ERROR in .remove(): index is larger than table.length");
                        return false;
                    }
                    idx++;
                }
                if(table[idx].key === key) {
                    table[idx] = undefined;
                    return true;
                }
            }
        }
        return "key provided is not even in the hash table !!";
    };

    this.get = function (key) {
        var pos = primeHashCode(key);
        if (table[pos] !== undefined) {
            if (table[pos].key === key) return table[pos].value;
            else {
                var index = ++pos, infinieLoopGaurd=0;
                while (table[index] === undefined || table[index].key !== key) {
                    if(index > table.length) {
                        // somehow I've entered this loop with a key that isn't in the hash table
                        // but started the linear probe.
                        console.log("ERROR: key not in table; index = " +index+", table.length = "+table.length);
                        break;
                    }
                    index++;
                    infinieLoopGaurd++;
                    if(infinieLoopGaurd > 1000000) {
                        break;
                    }
                }
                if (index > table.length) return undefined;
                else {
                    return table[index].key === key ? table[index].value : "keys do not match";
                }
            }
        }
        return "you entered a key that is 'undefined'";
    };

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    var primeHashCode = function(key){
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 37 + key.charCodeAt(i);
        }
        return hash % 1017;
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

    console.log(pl+"hash.get('Paul') = ");
    console.log(pl+hash.get(' Paul'));
    console.log("hash.remove('voo') = "+hash.remove('_voo'));
}
// hashTableTest();
testHash2();
dash();