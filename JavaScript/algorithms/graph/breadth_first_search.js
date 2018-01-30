class Node {
  constructor(id) {
    this.id = id;
  }
};

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

const zero  = new Node(0);
const one   = new Node(1);
const two   = new Node(2);
const three = new Node(3);
const four  = new Node(4);
const five  = new Node(5);

const Adj = new Map();
const zeroNeighbors = new ListNode(one);
zeroNeighbors.next = new ListNode(four);
zeroNeighbors.next.next = new ListNode(five);
Adj.set(zero.id, zeroNeighbors);

const oneNeighbors = new ListNode(three);
oneNeighbors.next = new ListNode(four);
Adj.set(one.id, oneNeighbors);

const twoNeighbors = new ListNode(two);
Adj.set(two.id, twoNeighbors);

const threeNeighbors = new ListNode(two);
threeNeighbors.next = new ListNode(four);
Adj.set(four.id, threeNeighbors);

/**
 * @param {Map} graph -- adjacency lists
 * @param {Node} startNode -- start node
 * @param {Node} targetNode -- target node
 * @return {Array} shortestPath -- a shortest path from start to target node
 */

const breadthFirstSearch1 = (graph, startNode) => {
  const level = new Map();
  const parent = new Map();
  level.set(startNode.id, 0);
  parent.set(startNode.id, null);

  let levelCount = 1;
  let frontier = [startNode];
  while (frontier.length > 0) {
    const next = [];
    for (let i = 0; i < frontier.length; i++)  {
      const u = frontier[i];
      console.log(u.id);
      let v = Adj.get(u.id);
      while (!!v) {
        if (!level.has(v.data.id)) {
          level.set(v.data.id, levelCount);
          parent.set(v.data.id, u);
          next.push(v.data);
        }
        v = v.next;
      }
    }
    frontier = next;
    levelCount += 1;
  }
};


/**
 * @param {Map} graph -- adjacency lists
 * @param {Node} startNode -- start node
 */
const breadthFirstSearch2 = (graph, startNode) => {
  const levels = new Map();
  const parents = new Map();
  levels.set(startNode.id, 0);
  parents.set(startNode.id, null);

  let levelCount = 1;
  const queue = []; // NOTE: pretend this array is a queue data structure
  queue.push(startNode); // enqueue

  while (queue.length > 0) {
    const node = queue.shift(); // dequeue
    const nodeLevel = levels.get(node.id);
    console.log(node.id);
    let adjNodeList = graph.get(node.id);
    while (adjNodeList) {
      const adjNode = adjNodeList.data;
      if (!levels.has(adjNode.id)) {
        levels.set(adjNode.id, nodeLevel + 1);
        parents.set(adjNode.id, node);
        queue.push(adjNode); // enqueue
      }
      adjNodeList = adjNodeList.next;
    }
  }
};

/** Test **/
breadthFirstSearch1(Adj, zero);
