/* Adjacency lists representing a directed acyclic graph */
const adjLists = new Map();
adjLists.set(1, [2]);
adjLists.set(2, [3, 4, 6]);
adjLists.set(3, [4]);
adjLists.set(4, [5]);
adjLists.set(5, [7]);
adjLists.set(6, [7]);
adjLists.set(7, []);

/**
 * @param {Map} adjLists - adjacency lists represengint a directed graph
 * @return {Boolean} isAcyclic - returns true if the graph is acyclic, false
 * otherwise
 */
const checkAcyclic = (adjLists) => {
  const vertices = Array.from(adjLists.keys());
  const visited = new Set();

  for (let i = 0; i < vertices.length; i++) {
    const v = vertices[i];
    if (!visited.has(v)) {
      const visiting = new Set();
      const result = dfsVisit(v, adjLists, visited, visiting);
      if (result === false) {
        return false;
      }
    }
  }
  return true;
};

const dfsVisit = (node, adjLists, visited, visiting) => {
  visited.add(node);
  visiting.add(node);

  const adjNodes = adjLists.get(node);
  for (let i = 0; i < adjNodes.length; i++) {
    const adjNode = adjNodes[i];
    if (visiting.has(adjNode)) {
      return false;
    }

    if (!visited.has(adjNode)) {
      const result = dfsVisit(adjNode, adjLists, visited, visiting);
      if (result === false) {
        return false;
      }
    }
  }
  visiting.delete(node); // <--- this is IMPORTANT!
  return true;
};

// console.log('is Acyclic ->', checkAcyclic(adjLists));

const topologicalSort = (adjLists) => {
  const vertices = Array.from(adjLists.keys());
  const visited = new Set();
  const order = [];

  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    if (!visited.has(vertex)) {
      topologicalSortHelper(adjLists, vertex, visited, order);
    }
  }

  return order.reverse();
};

const topologicalSortHelper = (adjLists, sourceVertex, visited, order) => {
  visited.add(sourceVertex);
  const adjNodes = adjLists.get(sourceVertex);
  adjNodes.forEach((v) => {
    if (!visited.has(v)) {
      topologicalSortHelper(adjLists, v, visited, order);
    }
  });
  order.push(sourceVertex);
};

console.log('topologically sorted', topologicalSort(adjLists));
