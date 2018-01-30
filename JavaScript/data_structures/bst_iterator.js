/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

class BSTIterator {
  constructor(root) {
    this.stack = [];
    let currentNode = root;
    while (currentNode !== null) {
      this.stack.push(currentNode);
      currentNode = currentNode.left;
    }
  }

  hasNext() {
    return this.stack.length > 0;
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
    return node.val;
  }
}

/* Test */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val) {
      // Insert left;
      if (this.left === null) {
        this.left = new Node(val);
      } else {
        this.left.insert(val);
      }
    } else {
      // Insert right;
      if (this.right === null) {
        this.right = new Node(val);
      } else {
        this.right.insert(val);
      }
    }
  }
}

const root = new Node(5);
[3, 10, 1, 4, 7, 15, 8, 12, 20].forEach(num => root.insert(num));

const i = new BSTIterator(root);
const a = [];
while (i.hasNext()) a.push(i.next());

console.log(a);
