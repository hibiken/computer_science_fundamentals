/**
 * @param {Map} graph - adjacency lists representing a graph
 * @param {Node} startNode - a node in the graph
 */

const dfsVisit = (graph, startNode, parents) => {
  parents.set(startNode, null);
  console.log(startNode);
  const adjacentNodes = graph.get(startNode);

  adjacentNodes.forEach((node) => {
    if (!parents.has(node)) {
      parents.set(node, startNode);
      dfsVisit(graph, node, parents);
    }
  });
};

/**
 * @param {Set | Array} vertices - a set of all vertices.
 * @param {Map} graph - adjacency lists reporesenting a graph
 */

const dfs = (vertices, graph) => {
  const parents = new Map();

  vertices.forEach((v) => {
    if (!parents.has(v)) {
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

dfs(['a', 'b', 'c', 'd', 'e', 'f', 'g'], Adj);
