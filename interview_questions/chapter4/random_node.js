class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(newNode) {
    if (this.left === null) {
      this.left = newNode;
    } else if (this.right === null) {
      this.right = newNode;
    } else {
      return this._getRandomInt(0, 1) === 0 ? this.left.insert(newNode) : this.right.insert(newNode);
    }
  }

  find(val) {
    if (this.val === val) {
      return this;
    }
    const fromLeft = this.left === null ? false : this.left.find(val);
    const fromRight = this.right === null ? false : this.right.find(val);
    return fromLeft || fromRight;
  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

class BinaryTree {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.root.insert(newNode);
    }
    this.size += 1;
  }

  find(val) {
    if (this.root === null) {
      return false;
    }
    return this.root.find(val);
  }

  getRandomNode() {
    if (this.root === null) {
      return false;
    }
    const randomInt = this.root._getRandomInt(1, this.size);
    let currentNode = null;
    const iterator = new BinaryTreeIterator(this.root);
    for (let i = 1; i <= randomInt; i++) {
        currentNode = iterator.next();
    }
    return currentNode;
  }
}

class BinaryTreeIterator {
  constructor(root) {
    let currentNode = root;
    this.stack = [];
    while (currentNode !== null) {
      this.stack.push(currentNode);
      currentNode = currentNode.left;
    }
  }

  next() {
    const node = this.stack.pop();
    if (node.right) {
      let currentNode = node.right;
      while (currentNode !== null) {
        this.stack.push(currentNode);
        currentNode = currentNode.left;
      }
    }
    return node;
  }
}

/** Test **/

const tree = new BinaryTree();
['A','B','C','D','E','F','G'].forEach(item => tree.insert(item));
console.log('size', tree.size);
// console.log('find a', tree.find('A'));
console.log('random node', tree.getRandomNode());
