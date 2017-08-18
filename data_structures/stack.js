class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    if (this.top === null) {
      throw new Error('stack is empty');
    }
    const item = this.top.data;
    this.top = this.top.next;
    return item;
  }

  push(item) {
    const node = new StackNode(item);
    node.next = this.top;
    this.top = node;
  }

  peek() {
    if (this.top === null) {
      throw new Error('stack is empty');
    }
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

stack = new Stack();
console.log('isEmpty', stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);

console.log('test', stack.pop());
console.log('isEmpty', stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
