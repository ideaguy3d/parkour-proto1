/**
 * Created by Julius Alvarado on 12/9/2017.
 * ap4 = Algorithm Practice 4
 */

// Practice Problems
/**
 Given a string s, find and return the first instance of a non-repeating character in it.
 If there is no such character, return '_'.
 **/
let case1 = "abacabajdabacabad";
function firstNonRepeatedChar(s) {
    let zArr = [];
    for (let i = 0; i < s.length; i++) {
        zArr[i] = s[i];
    }

    let val = "_";
    let tArr = [];
    for (let i = 0; i < zArr.length; i++) {
        let cv = zArr[i];
        if (zArr.indexOf(cv, i + 1) === -1) {
            if(tArr.indexOf(cv) > -1) { // curVal is in tracker array
                break;
            }
            val = cv;
        }
        tArr[i] = cv;
    }
    return val;
}
console.log(" ---- firstNonRepeatedChar ---- ");
console.log("\n {{ " + firstNonRepeatedChar(case1) + " }}");
