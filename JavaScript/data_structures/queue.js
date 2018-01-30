class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Remove from the head.
    this.tail = null; // Add new items here.
  }

  // O(1) time;
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.head.data;
  }

  // O(1) time;
  add(item) {
    const newNode = new QueueNode(item);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // O(1) time;
  remove() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    const data = this.head.data;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return data;
  }

  isEmpty() {
    return this.head === null;
  }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);

console.log(queue.peek());
console.log(queue.remove());
queue.add('hi');
console.log(queue.remove());
console.log(queue.remove());
