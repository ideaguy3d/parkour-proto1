/**
 * Created by Julius Alvarado on 7/14/2017.
 */


/****/
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
    console.log (jSum(s, ao));
}
// jSumMain();

//#endregion

//#region matrix diagonal difference

function diagDiff() {
    let a = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

    //-- algorithm starts:
    var primaryDiagonelSum = 0;
    var primaryDiagonel = a.map(function(row, idx, matrix){
        let pos = row[idx];
        primaryDiagonelSum += pos;
        return pos;
    });
    var secondaryDiagonelSum = 0;
    var secondaryDiagonel = a.map(function(row, idx, matrix){
        let i = row.length - 1 - idx;
        let pos = row[i];
        secondaryDiagonelSum += pos;
        return pos;
    });
    let ans = primaryDiagonelSum - secondaryDiagonelSum;
    console.log(ans < 0 ? ans*-1 : ans);
}
diagDiff();

//#endregion



