class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

/**
 * @param {Node} root - root of binary tree
 * @return {Array} levels - array of level nodes
 */
// O(V+E) time
// O(V) space
const listOfDepths = (root) => {
  const levels = [];
  levels[0] = new ListNode(root.val);
  let currentLevel = 1;

  let frontier = [root];

  while (frontier.length > 0) {
    const nextLevel = [];
    const dummyNode = new ListNode(null);
    let currentNode = dummyNode;
    frontier.forEach((treeNode) => {
      if (treeNode.left !== null) {
        currentNode.next = new ListNode(treeNode.left.val);
        currentNode = currentNode.next;
        nextLevel.push(treeNode.left);
      }
      if (treeNode.right !== null) {
        currentNode.next = new ListNode(treeNode.right.val);
        currentNode = currentNode.next;
        nextLevel.push(treeNode.right);
      }
    });
    if (dummyNode.next) {
      levels[currentLevel] = dummyNode.next;
    }
    frontier = nextLevel;
    currentLevel += 1;
  }

  return levels;
};

/* Test */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(7);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(11);

const levels = listOfDepths(root);
console.log('levels.depth', levels.length);

levels.forEach((level, index) => {
  let currentNode = level;
  const levelNodes = [];
  while (currentNode !== null) {
    levelNodes.push(currentNode.val);
    currentNode = currentNode.next;
  }
  console.log(`level ${index}: ${levelNodes.join(' -> ')}`);
});

