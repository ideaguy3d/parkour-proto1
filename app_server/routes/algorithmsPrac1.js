/**
 * Created by Julius Alvarado on 7/14/2017.
 */

// array left shift operation
function readLine() {
    return "5 4";
}

function jLeftShift (arr, size, shiftLeft) {
    var ac = Array.from(arr);

    for(var i=0; i < shiftLeft; i++) {
        var firstElem = ac[0];
        //console.log("ac[ac.length-1] = "+firstElem);

        ac.push(firstElem);
        ac.shift();
        //console.log("ac = "+ac);
    }

    return ac;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]); // size of the arry
    var k = parseInt(n_temp[1]); // amount to shift by

    var ans = jLeftShift([1,2,3,4,5,55,11], n, k).toString().replace(/,/g, " ");
    // console.log("jLeftShift(a, n, k).toString().replace(/,/g, \" \") = ");
    console.log(ans);
}

main();

