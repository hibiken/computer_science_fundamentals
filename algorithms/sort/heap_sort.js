// TODO: Implement heap sort
// FIXME: buildMaxHeap is broken

class MaxHeap {
  constructor(items = []) {
    this.items = items;
    this.heapSize = items.length;

    if (this.heapSize > 0) {
      this._buildMaxHeap();
    }
  }

  _buildMaxHeap() {
    // Force min element to be the leaf so that it will trigger maxHeapify
    const lastLeafParentIndex = this._getParentIndex(this.heapSize - 1);
    console.log('lastLeafParentIndex', lastLeafParentIndex);

    for (let i = lastLeafParentIndex; i >= 0; i--) {
      this._maxHeapifyDown(i);
    }
  }

  _maxHeapifyDown(i) {
    if (!this._hasLeftChild(i)) return;

    if (this._hasLeftChild(i) && this._hasRightChild(i)) {
      if (this._leftChild(i) >= this._rightChild(i) && this._leftChild(i) > this.items[i]) {
        this._swap(i, this._getLeftChildIndex(i));
        this._maxHeapifyDown(this._getLeftChildIndex(i));
      } else if (this._leftChild(i) < this._rightChild(i) && this._rightChild(i) > this.items[i]) {
        this._swap(i, this._getRightChildIndex(i));
        this._maxHeapifyDown(this._getRightChildIndex(i));
      }
    }
  }

  _maxHeapifyUp(i) {
    if (!this._hasParent(i)) return;

    if (this._parent(i) < this.items[i]) {
      this._swap(i, this._getParentIndex(i));
      this._maxHeapifyUp(this._getParentIndex(i));
    }
  }


  _swap(i, j) {
    const temp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = temp;
  }

  _getParentIndex(i) {
    return Math.floor((i-1)/2);
  }

  _getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  _getRightChildIndex(i) {
    return i * 2 + 2;
  }

  _hasParent(i) {
    return this._getParentIndex(i) >= 0;
  }

  _hasLeftChild(i) {
    return this._getLeftChildIndex(i) < this.heapSize;
  }

  _hasRightChild(i) {
    return this._getRightChildIndex(i) < this.heapSize;
  }

  _parent(i) {
    const parentIndex = this._getParentIndex(i);
    return this.items[parentIndex];
  }

  _leftChild(i) {
    const leftChildIndex = this._getLeftChildIndex(i);
    return this.items[leftChildIndex];
  }

  _rightChild(i) {
    const rightChildIndex = this._getRightChildIndex(i);
    return this.items[rightChildIndex];
  }
}


const heap = new MaxHeap([1, 7, 2, 8, 4, 14, 10, 9, 3, 16]);
console.log('heap', heap);

