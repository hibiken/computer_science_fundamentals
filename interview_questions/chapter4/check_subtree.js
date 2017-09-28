const checkSubtree = (root1, root2) => {
  if (root1 === null) return false;
  if (root1.val === root2.val && isIdentical(root1, root2)) {
    return true;
  }

  return checkSubtree(root1.left, root2) || checkSubtree(root1.right, root2);
};

const isIdentical = (root1, root2) => {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  if (root1.val !== root2.val) return false;
  return isIdentical(root1.left, root2.left) && isIdentical(root1.right, root2.right);
};

/* Test */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const root1 = new Node(1);
root1.left = new Node(3);
root1.right = new Node(5);
root1.left.left = new Node(7);
root1.left.right = new Node(8);
root1.right.right = new Node(9);
root1.left.right.left = new Node(11);
root1.left.right.right = new Node(2);

const root2 = new Node(3);
root2.left = new Node(7);
root2.right = new Node(8);
root2.right.left = new Node(11);
root2.right.right = new Node(2);

console.log('True', checkSubtree(root1, root2));
