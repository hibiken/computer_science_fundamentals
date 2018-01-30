class ListNode {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  append(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  remove(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  moveToHead(node) {
    this.remove(node);
    this.append(node);
  }

  pop() {
    const lastNode = this.tail.prev;
    lastNode.prev.next = this.tail;
    this.tail.prev = lastNode.prev;
    return lastNode;
  }
}

/* get, set O(1) time */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.LRUList = new DoublyLinkedList();
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.LRUList.moveToHead(node);
      return node.value;
    } else {
      return -1;
    }
  }

  set(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.LRUList.moveToHead(node);
    } else {
      const newNode = new ListNode(key, value);
      this.map.set(key, newNode);
      this.LRUList.append(newNode);

      if (this.map.size > this.capacity) {
        const LRU = this.LRUList.pop();
        this.map.delete(LRU.key);
      }
    }
  }
}

// Test
const cache = new LRUCache(2);
cache.set(1, 1);
cache.set(2, 2);
console.log(cache.get(1));
console.log(cache.get(2));
cache.set(3, 3);
console.log(cache.get(3)); // 3
console.log(cache.get(1)); // -1
console.log(cache.get(2)); // 2
cache.set(4, 4);
console.log(cache.get(3)); // -1
console.log(cache.get(2)); // 2
console.log(cache.get(4)); // 4
