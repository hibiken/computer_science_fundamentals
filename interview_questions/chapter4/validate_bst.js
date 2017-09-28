/*
 *
 * return boolean
 */
const validateBST = (rootNode) => {
  return isBetween(rootNode, -Infinity, Infinity);
};

const isBetween = (node, min, max) => {
  if (node === null) return true;

  if (node.val < min || max < node.val) return false;

  let isLeftValid = true;
  if (node.left) {
    isLeftValid = isBetween(node.left, min, node.val);
  }

  let isRightValid = true;
  if (node.right) {
    isRightValid = isBetween(node.right, node.val, max);
  }

  return isLeftValid && isRightValid;
};

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
};

const root = new Node(5);
root.left = new Node(3);
root.right = new Node(8);

const invalid = new Node(5);
invalid.left = new Node(6);
invalid.right = new Node(8);

console.log('Expect: true', validateBST(root)); // ---> true
console.log('Expect: false', validateBST(invalid)); // ---> false
