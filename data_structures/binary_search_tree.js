// h : Height of BST
// N : Number of nodes in BST

class Node {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  // O(h) time;
  insert(key) {
    if (key < this.key) {
      // Go left
      if (this.left === null) {
        const newNode = new Node(key);
        this.left = newNode;
        newNode.parent = this;
      } else {
        this.left.insert(key);
      }
    } else {
      // Go right
      if (this.right === null) {
        const newNode = new Node(key);
        this.right = newNode;
        newNode.parent = this;
      } else {
        this.right.insert(key);
      }
    }
  }

  // O(h) time;
  contains(key) {
    if (key === this.key) {
      return true;
    }
    if (key < this.key) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(key);
    } else {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(key);
    }
  }

  min() {
    if (this.left === null) {
      return this.key;
    } else {
      return this.left.min();
    }
  }

  max() {
    if (this.right === null) {
      return this.key;
    } else {
      return this.right.max();
    }
  }

  successor() {
    if (this.right) {
      return this.right.min();
    } else {
      let parent = this.parent;
      let currentNode = this;
      while (parent !== null && currentNode === parent.right) {
        currentNode = parent;
        parent = currentNode.parent;
      }
      return parent !== null ? parent.key : null;
    }
  }

  predecessor() {}

  // O(N) time;
  printInOrder() {
    if (this.left) {
      this.left.printInOrder();
    }
    console.log(this.key);
    if (this.right) {
      this.right.printInOrder();
    }
  }

  // O(N) time;
  printInPreOrder() {
    console.log(this.key);
    if (this.left) {
      this.left.printInPreOrder();
    }
    if (this.right) {
      this.right.printInPreOrder();
    }
  }

  // O(N) time;
  printInPostOrder() {
    if (this.left) {
      this.left.printInPostOrder();
    }
    if (this.right) {
      this.right.printInPostOrder();
    }
    console.log(this.key);
  }
};


/*** Test ***/
const root = new Node(15);

root.insert(6);
root.insert(18);
root.insert(3);
root.insert(7);
root.insert(17);
root.insert(20);
root.insert(2);
root.insert(4);
root.insert(13);
root.insert(9);

// console.log('BST', root);
// console.log('has 20?', root.contains(20));
// console.log('has 21?', root.contains(21));
// console.log('sort print!');
// console.log(root.printInPostOrder());
console.log('min', root.min());
console.log('max', root.max());
console.log('successor of 15', root.successor());


