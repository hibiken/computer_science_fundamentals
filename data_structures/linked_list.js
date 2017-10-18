class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* Recursive */
const reverseList = (head) => {
  if (head === null) {
    return null;
  }
  const [newHead, _tail] = reverseListHelper(head);
  return newHead;
};

/* Return a tuple of (head, tail) of reversed list */
const reverseListHelper = (head) => {
  if (head.next === null) {
    return [head, head];
  }

  const [newHead, tail] = reverseListHelper(head.next);
  tail.next = head;
  head.next = null;
  return [newHead, head];
};

/* Iterative */
const reverseListIterative = (head) => {
  if (head === null) return null;

  const stack = [];
  let currentNode = head;
  while (currentNode.next !== null) {
    stack.push(currentNode);
    currentNode = currentNode.next;
  }

  const newHead = currentNode;

  while (stack.length > 0) {
    const prev = stack.pop();
    currentNode.next = prev;
    currentNode = prev;
  }

  currentNode.next = null;

  return newHead;
};

/* Better space complexity O(1) */
const betterReverseIterative = (head) => {
  let newNext = null;
  let currentNode = head;
  while (currentNode !== null) {
    const next = currentNode.next;
    currentNode.next = newNext;
    newNext = currentNode;
    currentNode = next;
  };

  return newNext;
};

/* Test */
const h = new ListNode(1);
h.next = new ListNode(2);
h.next.next = new ListNode(3);

//console.log(reverseList(h));
//console.log(reverseListIterative(h));
console.log(betterReverseIterative(h));
