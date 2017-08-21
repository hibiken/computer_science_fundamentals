function HashTable(cmp, hashFun) {
  this.tableSize = 512;
  this.listArray = new Array(this.tableSize);

  for (let i = 0; i < this.tableSize; i++) {
    this.listArray[i] = null;
  }

  function Node(key, data, next) {
    this.key = key;
    this.data = data;
    this.next = next;
  }

  HashTable.Node = Node;
  HashTable.comp = comp;
  HashTable.HashFun = hashFun;
}

// TODO: Implement this.

