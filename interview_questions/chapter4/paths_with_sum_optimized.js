const countPaths = (root, targetSum) => {
  return countPathsWithSum(root, targetSum, 0, new Map());
};

const countPathsWithSum = (node, targetSum, runningSum, pathCount) => {
  if (node === null) return 0;
  const newRunningSum = runningSum + node.val;
  const complement = newRunningSum - targetSum;
  let totalPaths = 0;
  if (pathCount.has(complement)) {
    totalPaths += pathCount.get(complement);
  }
  if (newRunningSum === targetSum) {
    totalPaths += 1;
  }

  incrementHashTable(pathCount, newRunningSum, 1);
  totalPaths += countPathsWithSum(node.left, targetSum, newRunningSum, pathCount);
  totalPaths += countPathsWithSum(node.right, targetSum, newRunningSum, pathCount);
  incrementHashTable(pathCount, newRunningSum, -1);

  return totalPaths;
};

const incrementHashTable = (hashTable, key, delta) => {
  let newCount = delta;
  if (hashTable.has(key)) {
    newCount += hashTable.get(key);
  }

  if (newCount === 0) {
    hashTable.delete(key);
  } else {
    hashTable.set(key, newCount);
  }
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

console.log('Should equal 4 --> ', countPaths(root, 12));
