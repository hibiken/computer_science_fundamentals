const BFS = (graph, startNode) => {
  const parents = new Map();
  const levels = new Map();
  parents.set(startNode, null);
  levels.set(startNode, 0);

  let currentLevel = 1;
  frontier = [startNode];
  while (frontier.length > 0) {
    const next = [];
    frontier.forEach((u) => {
      const adjNodes = graph.get(startNode);
      adjNodes.forEach((v) => {
        if (!levels.has(v)) {
          levels.set(v, currentLevel);
          parents.set(v, u);
          next.push(v);
        }
      });
    });
    frontier = next;
    currentLevel += 1;
  }
};
