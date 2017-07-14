/**
 * Created by Julius Alvarado on 7/14/2017.
 */

var pl = " ->    ";
function dash() {
    // helper to make results in terminal window more readable
    console.log();
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log();
}

function BinarySearchTreeClass() {
    var jNode = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;

    this.insert = function (key) {
        var newNode = new jNode(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    var insertNode = function(){

    };
}

dash();
console.log('in the "binarySearchTree.js" file');
console.log();
function bstTest1() {

}
dash();