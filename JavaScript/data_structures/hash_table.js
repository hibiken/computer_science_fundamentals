class HashTable {
  constructor() {
    this.size = 11;
    this.table = new Array(this.size).map(_ => null);
  }

  put(key, item) {
    const index = this.hash(key);
    if (this.table[index] === null) {
      const head = new ListNode(key, item);
      this.table[index] = head;
    } else {
      const newHead = new ListNode(key, item);
      newHead.next = this.table[index];
      this.table[index].prev = newHead;
      this.table[index] = newHead;
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index] === null) return null;
    return this.table.find(key);
  }

  has(key) {}

  remove(key) {}

  prehash(key) {
    let value = 0;
    if (key.length === 0) return 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      value = ((value<<5)-value)+char;
      value = value & value; // Convert to 32bit integer
    }
    return value;
  }

  hash(key) {
    return prehash(key) % this.size;
  }
}

class ListNode {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function prehash(key) {
}

console.log(prehash("ken"));
