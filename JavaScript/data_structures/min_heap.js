/* MinHeap
 * An implementation of Priority Queue ADT
 */

class MinHeap {
  constructor(items = []) {
    this.items = items;
    if (this.items.length > 0) {
      this._buildMinHeap();
    }
  }

  _buildMinHeap() {
    const lastLeafParentIndex = this._getParentIndex(this.items.length - 1);
    this._minHeapifyUp(lastLeafParentIndex);
  }

  // O(logN) time
  insert(item) {
    this.items.push(item);
    this._minHeapifyUp(this.items.length - 1);
  }

  // O(1) time
  min() {
    return this.items[0];
  }

  // O(logN) time
  extractMin() {
    const min = this.items[0];
    // Replace root with the last leaf
    this.items[0] = this.items[this.items.length - 1];
    this.items.splice(-1, 1); // delete the last leaf
    this._minHeapifyDown(0);
    return min;
  }

  // O(logN) time
  _minHeapifyDown(i) {
    if (!this._hasLeftChild(i)) return;

    if (this._hasLeftChild(i) && this._hasRightChild(i)) {
      // swap with the smaller off the two children
      if (this._leftChild(i) < this._rightChild(i)) {
        this._swap(i, this._getLeftChildIndex(i));
        this._minHeapifyDown(this._getLeftChildIndex(i));
      } else {
        this._swap(i, this._getRightChildIndex(i));
        this._minHeapifyDown(this._getRightChildIndex(i));
      }
    } else if (this._hasLeftChild(i)) {
      // swap with the left child
      this._swap(i, this._getLeftChildIndex(i));
      this._minHeapifyDown(this._getLeftChildIndex(i));
    }
  }

  // O(logN) time
  _minHeapifyUp(i) {
    if (!this._hasParent(i)) return;

    if (this._parent(i) > this.items[i]) {
      this._swap(i, this._getParentIndex(i));
      this._minHeapifyUp(this._getParentIndex(i));
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
    const parentIndex = this._getParentIndex(i);
    return parentIndex >= 0 && parentIndex < this.items.length;
  }

  _hasLeftChild(i) {
    const leftChildIndex = this._getLeftChildIndex(i);
    return leftChildIndex < this.items.length;
  }

  _hasRightChild(i) {
    const rightChildIndex = this._getRightChildIndex(i);
    return rightChildIndex < this.items.length;
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

/*** Test ***/
const heap = new MinHeap([11, 22, 33, 44, 55, 66, 77]);
heap.insert(32);
heap.insert(45);
heap.insert(12);
heap.insert(7);
heap.insert(52);
heap.insert(3);
console.log('test', heap);

console.log('min', heap.extractMin());
console.log('min', heap.extractMin());
console.log('min', heap.extractMin());
console.log('min', heap.extractMin());
console.log('min', heap.extractMin());
console.log('min', heap.extractMin());
console.log('heap', heap);
