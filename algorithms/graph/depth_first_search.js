/**
 * @param {Map} graph - adjacency lists representing a graph
 * @param {Node} startNode - a node in the graph
 */
const dfsVisit = (graph, startNode, parents) => {
  console.log(startNode);
  const adjacentNodes = graph.get(startNode);

  adjacentNodes.forEach((node) => {
    if (!parents.has(node)) {
      parents.set(node, startNode);
      dfsVisit(graph, node, parents);
    }
  });
};

const dfsVisitIterative = (adjLists, source, parents) => {
  const stack = [ source ];

  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node);
    const adjNodes = adjLists.get(node);
    adjNodes.forEach((u) => {
      if (!parents.has(u)) {
        parents.set(u, node);
        stack.push(u);
      }
    });
  }
};

const bfsVisit = (adjLists, source) => {
  const visited = new Set();
  const queue = [];
  queue.push(source);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);
    const adjNodes = adjLists.get(node);
    adjNodes.forEach((u) => {
      if (!visited.has(u)) {
        visited.add(u);
        queue.push(u);
      }
    });
  }
};

/**
 * @param {Set | Array} vertices - a set of all vertices.
 * @param {Map} graph - adjacency lists reporesenting a graph
 */
const dfs = (vertices, graph) => {
  const parents = new Map();

  vertices.forEach((v) => {
    if (!parents.has(v)) {
      parents.set(v, null);
      dfsVisit(graph, v, parents);
    }
  });
};


/* Test */
const Adj = new Map();
Adj.set('a', ['b', 'd']);
Adj.set('b', ['e']);
Adj.set('c', ['e', 'f']);
Adj.set('d', ['b', 'g']);
Adj.set('e', ['d', 'g']);
Adj.set('f', ['f']);
Adj.set('g', []);

// dfs(['a', 'b', 'c', 'd', 'e', 'f', 'g'], Adj);
bfsVisit(Adj, 'a');
