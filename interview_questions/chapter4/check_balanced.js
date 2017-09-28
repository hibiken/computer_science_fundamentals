const cache = new Map();

const checkBalanced = (root) => {
  if (root === null) return true;

  if (Math.abs(treeHeight(root.left) - treeHeight(root.right)) > 1) {
    return false;
  }

  return checkBalanced(root.left) && checkBalanced(root.right);
};

// NOTE: memoize
const treeHeight = (root) => {
  if (root === null) return 0;
  if (root.left === null && root.right  === null) return 1;
  if (cache.has(root)) return cache.get(root);

  const result = Math.max(treeHeight(root.right), treeHeight(root.left)) + 1;
  cache.set(root, result);
  return result;
};

/** Test **/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};


const root = new Node('A');
root.left = new Node('B');
root.right = new Node('C');
root.left.right = new Node('D');
root.left.right.left = new Node('E');

console.log('False: ', checkBalanced(root));

const root2 = new Node('A');
root2.left = new Node('B');
root2.right = new Node('C');
root2.left.right = new Node('D');

console.log('True: ', checkBalanced(root2));

const root3 = new Node('A');
console.log('True: ', checkBalanced(root3));
