/**
 * Created by Julius Alvarado on 7/14/2017.
 */

const pl = " ->   ";
console.log();
console.log("in 'algorithmsPrac1.js' file");
console.log();
console.log();
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
const votes = ['Mich', 'Mich', 'Harry', 'Dave', 'Mich', 'Vic', 'Harry',
    'Alex', 'Mary', 'Mike', 'Mary', 'Mike', 'Alex', 'Mary'];
// console.log("The winner of the election is...");
// console.log(electionWinner2(votes));
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

    // fill the set data structure
    let jset = new setStruct();
    for (let i = 0; i < items.length; i++) {
        let obj = items[i];
        jset.put(obj);
    }

    let nonDuplicates = jset.values();
    let countVotes = {};

    nonDuplicates.forEach(function (val, idx, arr) {
        let count = 0;
        items.forEach(function (elem) {
            if (val === elem) {
                countVotes[val] = ++count;
            }
        });
    });

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

    console.log();
    console.log("-----------------");
    console.log("jsort = ");
    console.log(jsort);
} // END OF: electionWinner()

function electionWinner2(votes) {
    //-- get rid of duplicates:
    const SetStruct = function () {
        let items = {};
        this.has = function (val) {
            return items.hasOwnProperty(val);
        };
        this.put = function (val) {
            if (!this.has(val)) items[val] = val;
        };
        this.values = function () {
            return Object.keys(items);
        }
    };
    let votesNonDuplicate = new SetStruct();
    for (let i = 0; i < votes.length; i++) {
        votesNonDuplicate.put(votes[i])
    }
    let votesNonDuplicateArr = votesNonDuplicate.values();
    votesNonDuplicateArr.sort();

    //-- count all the votes:
    let votesSum = {};
    votes.forEach((elem, idx, arr) => {
        if (votesSum.hasOwnProperty(elem)) votesSum[elem] += 1;
        else votesSum[elem] = 1;
    });

    // put the integer value of each vote in an array to use spread operator on it
    let numberOfVotes = [], count = 0;
    for (let prop in votesSum) {
        numberOfVotes[count] = votesSum[prop];
        ++count;
    }

    count = 0;
    // put the people with the most votes into their own array
    let highestVote = Math.max(...numberOfVotes);
    let peopleWithMostVotes = [];
    for(let prop in votesSum) {
        if (votesSum[prop] === highestVote) {
            peopleWithMostVotes[count++] = prop;
        }
    }

    return peopleWithMostVotes.sort()[peopleWithMostVotes.length-1];
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
// for (let k in testArrays) {console.log(pl + `TEST: firstDuplicate(${k}) = ${firstDuplicate(testArrays[k])}`);}
function firstDuplicate(a) {
    let storedIdxArr = [],
        storedIdxObj = {},
        minVal;
    let returnVal,
        atLeastOneDuplicate = false;
    let arr = Array.from(a);

    for (let idx = 0; idx < arr.length; idx++) {
        let ahead = idx + 1,
            curr = arr[idx],
            dc = arr.includes(curr, ahead);
        if (dc) {
            atLeastOneDuplicate = true;
            storedIdxArr[idx] = arr.indexOf(curr, ahead);
            if (storedIdxObj[curr]) {
                // do nothing because prop already exists
                // and I do not want to override it.
            } else {
                storedIdxObj[curr] = arr.indexOf(curr, ahead);
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
                } else if (!returnVal && (objSize === propCount)) {
                    return -1;
                }
            }
        } else {
            return parseInt(storedIdxObjKeysArr[0]);
        }
    }
    return returnVal;
}

function firstDuplicate1011(a) { // 1011 for 10/11 tests pass
    let storedIdxArr = [],
        storedIdxObj = {},
        minVal;
    let returnVal,
        atLeastOneDuplicate = false;

    a.forEach(function (elem, idx, arr) {
        let ahead = idx + 1,
            curr = arr[idx],
            dc = arr.includes(curr, ahead);

        if (dc) {
            atLeastOneDuplicate = true;
            storedIdxArr[idx] = arr.indexOf(curr, ahead);
            storedIdxObj[curr] = arr.indexOf(curr, ahead);
        } else if (!atLeastOneDuplicate && (idx === (arr.length - 1))) {
            returnVal = null;
        }
    });

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
                } else if (!returnVal && (objSize === propCount)) {
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

//#region //-- object reduce sum total --\\

let dataSet1 = [
    {team: 'omicron', score: 7},
    {team: 'bravo', score: 8},
    {team: 'alpha', score: 2},
    {team: 'omicron', score: 4},
    {team: 'bravo', score: 9},
    {team: 'alpha', score: 3},
    {team: 'alpha', score: 5},
];
let dataSet2 = {
    prop1:  {team: 'omicron', score: 7},
    prop2: {team: 'bravo', score: 8},
    prop3: {team: 'alpha', score: 2},
    prop4: {team: 'omicron', score: 4},
    prop5: {team: 'bravo', score: 9},
    prop6: {team: 'alpha', score: 3},
    prop7: {team: 'alpha', score: 5},
};

// get dataSet1 to reduce team duplicates to something like:
// [{team: 'o', score: totalScore}, {team: 'a', score: totalScore}...] & sort by team w/highest score at top
console.log("objectSetSumTotal(dataSet1) = ");
console.log(objectSetSumTotal(dataSet1));
function objectSetSumTotal(data) {
    let dataArr = [], dataArrObjVals = {}, count = 0;
    let jset = new Set();

    // get rid of the duplicatates
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        jset.add(obj.team);
    }

    // create an array w/non duplicates of data team prop vals
    var jsetVals = [];
    jset.forEach(function(v1){
        jsetVals[count++] = v1;
    });

    // create an array of complex objects w/identical props as 'data'
    jsetVals.forEach(function(elem, idx){
       dataArr[idx] = {
           team: elem,
           score: 0
       }
    });

    // start summing up the totals for each duplicate obj
    data.forEach((elem) => {
        // inner loop
        dataArr.forEach((el) => {
            if(el.team === elem.team) {
                el.score += elem.score;
            }
        });
    });

    dataArr.sort((a,b) => b.score-a.score);

    return dataArr;
}

function objectReduceSumTotal(data) {

}



//#endregion //-- object reduce sum total --\\


//#region debugPrac


//#endregion


//



