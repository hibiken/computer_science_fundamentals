class MaxHeap {
  constructor(nums = []) {
    this.heapSize = nums.length;
    this.buildMaxHeap(nums);
  }

  add(val) {
    this.items.push(val);
    this.heapSize += 1;
    this.heapifyUp(this.items.length - 1);
  }

  extractMax() {
    const item = this.items[0];
    const lastItem = this.items.pop();
    this.items[0] = lastItem;
    this.heapSize -= 1;
    this.heapifyDown(0);
    return item;
  }

  peekMax() {
    return this.items[0];
  }

  buildMaxHeap(nums) {
    this.items = nums;
    for (let i = Math.floor(nums.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // TODO:
  increaseKey(i, newKey) {}

  // TODO:
  heapSort() {
    for (let i = this.items.length - 1; i > 0; i--) {

    }

    console.log('Sorted', this.items);
  }

  heapifyUp(i) {
    let index = i;
    while (this.hasParent(index) && this.parent(index) < this.items[index]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  heapifyDown(i) {
    let index = i;
    let smallerChildIndex = index;
    while (this.hasLeftChild(index)) {
      if (this.hasLeftChild(index) && this.leftChild(index) > this.items[index]) {
        smallerChildIndex = this.leftChildIndex(index);
      }
      if (this.hasRightChild(index) && this.rightChild(index) > this.items[smallerChildIndex]) {
        smallerChildIndex = this.rightChildIndex(index);
      }

      if (smallerChildIndex === index) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  }

  swap(i, j) {
    const temp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = temp;
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChildIndex(i) {
    return 2 * i + 1;
  }

  rightChildIndex(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return this.items[this.parentIndex(i)];
  }

  leftChild(i) {
    return this.items[this.leftChildIndex(i)];
  }

  rightChild(i) {
    return this.items[this.rightChildIndex(i)];
  }

  hasParent(i) {
    return this.parentIndex(i) >= 0;
  }

  hasLeftChild(i) {
    return this.leftChildIndex(i) <= this.heapSize;
  }

  hasRightChild(i) {
    return this.rightChildIndex(i) <= this.heapSize;
  }

  _debug() {
    console.log('items', this.items);
  }
}

/* Test */
const heap = new MaxHeap([2, 4, 1, 5, 4, 13, 55]);
heap._debug();
heap.add(33);
heap._debug();
heap.heapSort();
// const maxHeap = new MaxHeap();
// maxHeap.add(8);
// maxHeap.add(14);
// maxHeap.add(7);
// maxHeap.add(5);
// maxHeap.add(16);
// maxHeap.add(1);
// maxHeap.add(20);
// maxHeap._debug();
// console.log(maxHeap.peekMax()); // 20
// console.log(maxHeap.extractMax()); //20 
// maxHeap._debug();
// console.log(maxHeap.peekMax()); // 8

