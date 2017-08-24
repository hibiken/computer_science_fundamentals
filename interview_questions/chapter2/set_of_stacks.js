class SetOfStacks {
  constructor(capacity) {
    this.stackSet = [];
    this.setIndex = 0;
    this.capacity = capacity;
    this.currentStackSize = 0;
  }

  // O(1) time.
  push(item) {
    const currentStack = this.getCurrentStack();
    if (!currentStack) {
      const newStack = [item];
      this.stackSet[this.setIndex] = newStack;
    } else if (currentStack.length === this.capacity) {
      const newStack = [item];
      this.setIndex += 1;
      this.stackSet[this.setIndex] = newStack;
    } else {
      currentStack.push(item);
    }
  }

  // O(1) time.
  pop() {
    const currentStack = this.getCurrentStack();
    const data = currentStack.pop();
    if (currentStack.length === 0 && this.setIndex > 0) {
      this.setIndex -= 1;
      this.stackSet.pop();
    }
    return data;
  }

  popAt(index) {
    if (index > this.setIndex) {
      throw new Error("invalid index");
    }
    const stack = this.stackSet[index];
    return stack.pop();
  }

  getCurrentStack() {
    return this.stackSet[this.setIndex];
  }
}


// Test
const setOfStack = new SetOfStacks(5);
setOfStack.push(1);
setOfStack.push(2);
setOfStack.push(3);
setOfStack.push(4);
setOfStack.push(5);
setOfStack.push(6);
setOfStack.push(7);
console.log(setOfStack.pop());
console.log(setOfStack.pop());
console.log(setOfStack.pop());
console.log(setOfStack.pop());
console.log(setOfStack.pop());
console.log(setOfStack.pop());
console.log(setOfStack.pop());
