class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const lowestCommonAncestor = (root, node1, node2) => {
  if (root === null) return false;

  if ([node1, node2].includes(root)) {
    return root;
  }

  const inLeftSubtree  = lowsetCommonAncestor(root.left, node1, node2);
  const inRightSubtree = lowsetCommonAncestor(root.right, node1, node2);

  if (inLeftSubtree && inRightSubtree) {
    return root;
  }

  return inLeftSubtree ? inLeftSubtree : inRightSubtree;
};

