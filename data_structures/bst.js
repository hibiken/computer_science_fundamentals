class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  insert(val) {
    if (val < this.val) {
      // Insert left
      if (this.left === null) {
        const newNode = new Node(val);
        this.left = newNode;
        newNode.parent = this;
      } else {
        this.left.insert(val);
      }
    } else {
      // Insert right
      if (this.right === null) {
        const newNode = new Node(val);
        this.right = newNode;
        newNode.parent = this;
      } else {
        this.right.insert(val);
      }
    }
  }

  contains(val) {
    if (this.val === val) {
      return true;
    }
    if (val < this.val) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(val);
    } else {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(val);
    }
  }

  minimum() {
    if (this.left === null) {
      return this;
    }
    return this.left.minimum();
  }

  maximum() {
    if (this.right === null) {
      return this;
    }
    return this.right.maximum();
  }

  successor() {
    if (this.right) {
      return this.right.minimum();
    }
    let parent = this.parent;
    let currentNode = this;
    while (parent !== null && currentNode !== parent.left) {
      currentNode = parent;
      parent = parent.parent;
    }
    return parent;
  }

  predecessor() {
    if (this.left) {
      this.left.maximum();
    }
    let parent = this.parent;
    let currentNode = this;
    while (parent !== null && currentNode !== parent.right) {
      currentNode = parent;
      parent = parent.parent;
    }
    return parent;
  }
}

const searchTree = (root, val) => {
  if (root === null || root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchTree(root.left, val);
  }
  return searchTree(root.right, val);
};

const iterativeTreeSearch = (root, val) => {
  let currentNode = root;
  while (currentNode !== null && currentNode.val !== val) {
    if (currentNode.val > val) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return currentNode;
};

const getMinimum = (root) => {
  let currentNode = root;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode;
};

const getMaximum = (root) => {
  let currentNode = root;
  while (currentNode.right !== null) {
    currentNode = currentNode.right;
  }
  return currentNode;
};

const root = new Node(7);

[8, 10, 5, 3, 2, 4, 11, 12, 1].forEach(num => root.insert(num));

// console.log(root.contains(10));
// console.log('min ==> ', root.minimum());
// console.log('max ==> ', root.maximum());

// console.log(searchTree(root, 6));
// console.log(searchTree(root, 4));

const node = iterativeTreeSearch(root, 8);
console.log('node', node);
console.log('next', node.successor());
