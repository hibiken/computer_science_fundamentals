class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'black';
  }

  rbInsert(val) {
    const newNode = this.bstInsert(val);
    newNode.left = NIL_NODE;
    newNode.right = NIL_NODE;
    newNode.color = 'red';
    this.rbInsertFixUp(newNode);
  }

  bstInsert(val) {
    if (val < this.val) {
      // Insert left;
      if (this.left === null) {
        const newNode = new Node(val);
        this.left = newNode;
        newNode.parent = this;
        return newNode;
      } else {
        return this.left.insert(val);
      }
    } else {
      // Insert right;
      if (this.right === null) {
        const newNode = new Node(val);
        this.right = newNode;
        newNode.parent = this;
        return newNode;
      } else {
        return this.right.insert(val);
      }
    }
  }

  // Restore Red-Black properties in O(lgN) time;
  rbInsertFixUp(currentNode) {
    while (currentNode.parent && currentNode.parent.color === 'red') {
      if (this.parent.isLeftChild()) {
        uncle = this.parent.parent.right;
        if (uncle.color === 'red') {
          this.parent.color = 'black';
          uncle.color = 'black';
          this.parent.parent = 'red';
          currentNode = this.parent.parent;
        } else {
          if (this.isRightChild()) {
            currentNode = this.parent;
            currentNode.leftRotate();
          }
          currrentNode.parent.parent.rightRotate();
          currentNode.parent.color = 'black';
          currentNode.parent.parent.color = 'red';
        }
      } else {}
    }

    if (currentNode.parent === null) {
      currentNode.color = 'black';
    }
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

const NIL_NODE = new Node(null);
