/**
 * Created by Julius Alvarado on 7/16/2017.
 */


/**
 * Created by Julius Alvarado on 7/16/2017.
 */
/**
 * Created by Julius Alvarado on 7/14/2017.
 */

const pl = " ->   ";

//#region //-- array left shift operation --\\

function readLine() {
    return "5 4";
}
function jLeftShift(arr, size, shiftLeft) {
    var ac = Array.from(arr);

    for (var i = 0; i < shiftLeft; i++) {
        var firstElem = ac[0];
        //console.log("ac[ac.length-1] = "+firstElem);

        ac.push(firstElem);
        ac.shift();
        //console.log("ac = "+ac);
    }

    return ac;
}
function mainLeftShift() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]); // size of the arry
    var k = parseInt(n_temp[1]); // amount to shift by

    var ans = jLeftShift([1, 2, 3, 4, 5, 55, 11], n, k).toString().replace(/,/g, " ");
    // console.log("jLeftShift(a, n, k).toString().replace(/,/g, \" \") = ");
    console.log(ans);
}
// mainLeftShift();

//#endregion

//#region //-- Adding sum of an array --\\

function jSum(size, ar) {
    return ar.reduce(function (sum, val) {
        return sum + val
    }, 0);
}

function jSumMain() {
    let str = "1000000001 1000000002 1000000003 1000000004 1000000005";
    let ao = str.split(" ");
    ao = ao.map(val => parseInt(val));
    console.log("ao = ");
    console.log(ao);
    let s = ao.length;
    console.log("jSumMain = ");
    console.log(jSum(s, ao));
}
// jSumMain();

//#endregion

//#region //-- matrix diagonal difference --\\

function diagDiff() {
    let a = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

    //-- algorithm starts:
    var primaryDiagonelSum = 0;
    var primaryDiagonel = a.map(function (row, idx, matrix) {
        let pos = row[idx];
        primaryDiagonelSum += pos;
        return pos;
    });
    var secondaryDiagonelSum = 0;
    var secondaryDiagonel = a.map(function (row, idx, matrix) {
        let i = row.length - 1 - idx;
        let pos = row[i];
        secondaryDiagonelSum += pos;
        return pos;
    });
    let ans = primaryDiagonelSum - secondaryDiagonelSum;
    console.log("diagonal diff = ");
    console.log(ans < 0 ? ans * -1 : ans);
}
// diagDiff();

//#endregion

//#region //-- vote question --\\
const votes = ['Alex', 'Mich', 'Harry', 'Dave', 'Mich', 'Vic', 'Harry',
    'Alex', 'Mary', 'Mary'];
// electionWinner(votes);
function electionWinner(votes) {
    // create an internal set data structure to eliminate duplicates
    const setStruct = function () {
        const set = {};

        this.has = function (val) {
            return set.hasOwnProperty(val);
        };

        this.put = function (val) {
            if (!this.has(val)) {
                set[val] = val;
            }
        };

        this.values = function () {
            return Object.keys(set);
        };
    };
    // create a copy of the original arr
    let items = Array.from(votes);
    // full the set data structure
    let jset = new setStruct();
    for (var i = 0; i < items.length; i++) {
        var obj = items[i];
        jset.put(obj);
    }
    // console.log("jset.values() = ");
    // console.log(jset.values());

    let nonDuplicates = jset.values();
    let countVotes = {};

    nonDuplicates.map(function (val, idx, arr) {
        let count = 0;
        items.forEach(function (elem) {
            if (val === elem) {
                countVotes[val] = ++count;
            }
        });
    });

    console.log(countVotes);

    let jsort = items.sort(function (a, b) {
        let nameA = a.toUpperCase(); // ignore upper and lowercase
        let nameB = b.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal so return 0
        return 0;
    });
    console.log("jsort = ");
    console.log(jsort);
}
//#endregion electionVoteAlgorithm

//#region //-- random array algorithm prac --\\
console.log();
let testArrays = {
    a1: [2, 3, 3, 1, 5, 2],
    a2: [2, 4, 3, 5, 1],
    a3: [2, 3, 3],
    a4: [3, 3, 3],
    a5: [1, 1, 2, 2, 1]
};
for (let k in testArrays) {console.log(pl + `TEST: firstDuplicate(${k}) = ${firstDuplicate(testArrays[k])}`);}
function firstDuplicate(a) {
    let storedIdxArr = [],
        storedIdxObj = {},
        minVal;
    let returnVal,
        atLeastOneDuplicate = false;
    let arr = Array.from(a);

    for(let idx=0; idx<arr.length; idx++) {
        let ahead = idx + 1,
            curr = arr[idx],
            dc = arr.includes(curr, ahead);
        if (dc) {
            atLeastOneDuplicate = true;
            storedIdxArr[idx] = arr.indexOf(curr, ahead);
            storedIdxObj[curr] = arr.indexOf(curr, ahead);
            if(storedIdxObj[curr]) {
                // do nothing because prop already exists
                // and I do not want to override it.
            }
            else {
                console.log("in else clause");
                // storedIdxObj[curr] = arr.indexOf(curr, ahead);
            }
        }
        else if (!atLeastOneDuplicate && (idx === (arr.length - 1))) {
            returnVal = null;
        }
    }

    minVal = Math.min(...storedIdxArr);

    if (!returnVal && !atLeastOneDuplicate) {
        return -1;
    }
    else {
        let storedIdxObjKeysArr = Object.keys(storedIdxObj);
        if (storedIdxObjKeysArr.length > 1) {
            let propCount = 0;
            let objSize = Object.keys(storedIdxObj).length;
            for (let prop in storedIdxObj) {
                propCount++;
                if (storedIdxObj[prop] === minVal) {
                    returnVal = parseInt(prop);
                } else if( !returnVal && (objSize === propCount) ) {
                    return -1;
                }
            }
        } else {
            return parseInt(storedIdxObjKeysArr[0]);
        }
    }
    return returnVal;
}
//#endregion



//#region //-- debug practice --\\

function DebugPrac() {

}

//#endregion







//



