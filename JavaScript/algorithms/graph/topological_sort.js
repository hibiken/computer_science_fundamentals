/**
 * @param {Map} graph - adjacency lists representing a graph
 * @return {Array} - a linear order of the vertices
 *
 * Analysis
 * V - # of vertices
 * E - # of edges
 */

const topologicalSort = (graph) => {
  const inDegree = new Map();
  // O(V) space
  const vertices = Array.from(graph.keys()); // ['A', 'B',...]
  // O(V) time
  vertices.forEach((vertexKey) => {
    inDegree.set(vertexKey, 0);
  });

  // O(E) time
  vertices.forEach((vertexKey) => {
    const adjacentNodes = graph.get(vertexKey);
    adjacentNodes.forEach((adjNodeKey) => {
      inDegree.set(
        adjNodeKey,
        inDegree.get(adjNodeKey) + 1
      ); // increment in-degree
    });
  });

  const next = [];
  for (let [key, value] of inDegree) {
    if (value === 0) {
      next.push(key);
    }
  }

  const linearOrder = [];
  while (next.length > 0) {
    const node = next.pop();
    linearOrder.push(node);

    const adjacentNodes = graph.get(node);
    adjacentNodes.forEach((adjNodeKey) => {
      inDegree.set(
        adjNodeKey,
        inDegree.get(adjNodeKey) - 1
      );

      if (inDegree.get(adjNodeKey) === 0) {
        next.push(adjNodeKey);
      }
    });
  }

  return linearOrder;
};

/* Test */
// adjacency lists representing a directed acyclic graph.
const adjLists = new Map();
adjLists.set('A', ['B', 'F']);
adjLists.set('B', ['C', 'D']);
adjLists.set('C', []);
adjLists.set('D', ['C', 'H']);
adjLists.set('F', ['G']);
adjLists.set('G', ['H']);
adjLists.set('H', []);

console.log('sorted: ', topologicalSort(adjLists));


