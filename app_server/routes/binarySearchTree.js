/**
 * Created by Julius Alvarado on 7/14/2017.
 */

let pl = " ->    ";
function dash() {
    // helper to make results in terminal window more readable
    console.log();
    console.log("----------------------------------------------------------------");
    console.log("----------------------------------------------------------------");
    console.log();
}

function BinarySearchTreeClass() {
    const Node = function (key) {
        this.left = null;
        this.right = null;
        this.key = key;
    };
    let root = null;

    this.insert = function (key) {
        const newNode = new Node(key);

        if(root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    this.search = function () {

    };

    this.inOrderTransverse = function () {

    };

    this.preOrderTransverse = function () {

    };

    this.postOrderTranverse = function () {

    };

    this.max = function () {

    };

    this.remove = function () {

    };

    const insertNode = function (node, newNode) {
        if(newNode.key < node.key) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };
}

dash();

console.log('in the "binarySearchTree.js" file');
console.log();

function bstTest1() {

}

dash();