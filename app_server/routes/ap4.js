/**
 * Created by Julius Alvarado on 12/9/2017.
 * ap4 = Algorithm Practice 4
 */

// Practice Problems
/**
 Given a string s, find and return the first instance of a non-repeating character in it.
 If there is no such character, return '_'.
 **/
let case1 = "abacabadjabacabad";
function firstNonRepeatedChar(s) {
    let zArr = [];
    for (let i = 0; i < s.length; i++) {
        zArr[i] = s[i];
    }

    let val = "_";
    zArr.forEach(function (e, i) {
        if (zArr.indexOf(e, i + 1) === -1) {
            console.log(" - "+e);
            val = e;
            return;
        }
    });
    return val;
}
console.log("firstNonRepeatedChar");
console.log(firstNonRepeatedChar(case1));
