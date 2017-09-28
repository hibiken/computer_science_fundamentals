/**
 * @param {Map} graph - adjacency lists reprenting a graph
 * @param {Node} start - start
 * @param {Node} end - end
 * @return {Boolean} found - return true if path exist, false otherwise
 */
const isPathExist = (graph, start, end) => {
  const levels = new Map();
  levels.set(start, 0);
  let currentLevel = 1;
  let frontier = [start];
  let found = false;

  while (frontier.length > 0) {
    const next = [];
    frontier.forEach((node) => {
      if (node === end) {
        found = true;
      }
      const adjNodes = graph.get(node);
      adjNodes.forEach((adjNode) => {
        if (!levels.has(adjNode)) {
          levels.set(adjNode, currentLevel);
          next.push(adjNode);
        }
      });
    });

    frontier = next;
    currentLevel += 1;
  }

  return found;
};

/* Test */
const adj = new Map();
adj.set(0, [1, 4, 5]);
adj.set(1, [3, 4]);
adj.set(2, [1]);
adj.set(3, [2, 4]);
adj.set(4, []);
adj.set(5, []);

console.log(isPathExist(adj, 0, 3)); // true
console.log(isPathExist(adj, 5, 4)); // false
