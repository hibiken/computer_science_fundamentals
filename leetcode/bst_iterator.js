/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = [];
    let currentNode = root;

    while (currentNode !== null) {
        this.stack.push(currentNode);
        currentNode = currentNode.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let currentNode = this.stack.pop();
    const returnVal = currentNode.val;

    if (currentNode.right) {
        currentNode = currentNode.right;

        while (currentNode !== null) {
            this.stack.push(currentNode);
            currentNode = currentNode.left;
        }
    }

    return returnVal;
};


/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
