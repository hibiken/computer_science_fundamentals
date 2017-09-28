class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
};


// return Node
const successor = (node) => {
  if (node.right) {
    // find min of right subtree
    let currentNode = node.right;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  } else {
    // go up to find the next value
    let currentNode = node;
    let parent = node.parent;
    while (parent !== null && currentNode === parent.right) {
      currentNode = parent;
      parent = currentNode.parent;
    }
    return parent;
  }
};

// Tests 
const root = new Node(7);

//      7
//  5     13
//2,  6, 9  

