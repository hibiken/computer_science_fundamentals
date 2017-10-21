class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'black';
  }

  // O(1) time operation.
  leftRotate() {
    const node = this.right;
    this.right = node.left;

    if (!node.left.isNil()) {
      node.left.parent = this;
    }
    node.parent = this.parent;

    if (this.parent !== null) {
      if (this.isLeftChild()) {
        this.parent.left = node;
      } else {
        this.parent.right = node;
      }
    }
    node.left = this;
    this.parent = node;
  }

  // O(1) time operation.
  rightRotate() {
    const node = this.left;
    this.left  = node.right;

    if (!node.right.isNil()) {
      node.right.parent = this;
    }
    node.parent = this.parent;

    if (this.parent !== null) {
      if (this.isLeftChild()) {
        this.parent.left = node;
      } else {
        this.parent.right = node;
      }
    }
    node.right = this;
    this.parent = node;
  }

  isNil() {
    return this.val === null;
  }

  isLeftChild() {
    return this.parent !== null && this === this.parent.left;
  }

  isRightChild() {
    return this.parent !== null && this. == this.parent.right;
  }
}

const nilNode = new Node(null);
