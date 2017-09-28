// FIXME: Optimize this

const countPaths = (root, targetVal) => {
  if (root === null) return 0;

  return countPathsFromNode(root, targetVal, 0) +
    countPaths(root.left, targetVal) +
    countPaths(root.right, targetVal);
};

// Return path count that sum up to targetVal starting from root;
const getPathCountFrom = (root, targetVal) => {
  let counter = 0;
  const dfsVisit = (node, currentSum, targetVal) => {
    if (node === null) return;
    if (node.val + currentSum  === targetVal) {
      counter += 1;
    }
    dfsVisit(node.left, node.val + currentSum, targetVal);
    dfsVisit(node.right, node.val + currentSum, targetVal);
  }

  dfsVisit(root, 0, targetVal);
  return counter;
};

const countPathsFromNode = (root, targetSum, runningSum) => {
  if (root === null) return 0;
  let pathCount = 0;
  const newRunningSum = root.val + runningSum;
  if (newRunningSum === targetSum) {
    pathCount += 1;
  }
  return pathCount +
    countPathsFromNode(root.left, targetSum, newRunningSum) +
    countPathsFromNode(root.right, targetSum, newRunningSum);
};


/* Test */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const root = new Node(7);
root.left = new Node(5);
root.right = new Node(4);
root.left.left = new Node(-1);
root.left.right = new Node(4);
root.left.left.left = new Node(1);
root.left.right.left = new Node(2);
root.left.right.left.right = new Node(1);
root.right.right = new Node(8);
root.right.right.left = new Node(-3);

// console.log('should equal 2 --> ', countPathsFromNode(root, 12, 0));
// console.log('Should equal 2 === ', getPathCountFrom(root, 12));
console.log('Should equal 4 --> ', countPaths(root, 12));
