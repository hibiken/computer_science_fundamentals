const buildOrder = (projects, depsList) => {
  const adjLists = buildAdjacencyLists(projects, depsList);
  // run DFS to check if it's a DAG
  checkAcyclic(adjLists);
  // run topological sort on the DAG
  return topologicalSort(adjLists);
};

const buildAdjacencyLists = (projects, deps) => {
  const adjLists = new Map();
  projects.forEach(p => adjLists.set(p, []));
  deps.forEach((dep) => {
    const [first, second] = dep;
    adjLists.set(
      first,
      adjLists.get(first).concat(second)
    );
  });
  return adjLists;
};

const checkAcyclic = (adjLists) => {
  const vertices = Array.from(adjLists.keys());
  const visited = new Set();

  vertices.forEach((v) => {
    if (!visited.has(v)) {
      const visiting = new Set();
      dfsVisit(v, adjLists, visited, visiting);
    }
  });
};

const dfsVisit = (node, adjLists, visited, visiting) => {
  visited.add(node);
  visiting.add(node);

  const adjNodes = adjLists.get(node);
  adjNodes.forEach((adjNode) => {
    if (visiting.has(adjNode)) {
      throw new Error('There is a cyclic dependency');
    }

    if (!visited.has(adjNode)) {
      dfsVisit(adjNode, adjLists, visited, visiting);
    }
  });
};

const topologicalSort = (adjLists) => {
  const sortedByFinishTime = [];
  const vertices = Array.from(adjLists.keys());
  const visited = new Set();

  vertices.forEach((v) => {
    if (!visited.has(v)) {
      dfsCollect(v, adjLists, visited, sortedByFinishTime);
    }
  });

  return sortedByFinishTime.reverse();
};

const dfsCollect = (node, adjLists, visited, sortedByFinishTime) => {
  visited.add(node);

  const adjNodes = adjLists.get(node);
  adjNodes.forEach((adjNode) => {
    if (!visited.has(adjNode)) {
      dfsCollect(adjNode, adjLists, visited, sortedByFinishTime);
    }
  });

  sortedByFinishTime.push(node);
};




/* Test */
const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c']
];

console.log(buildOrder(projects, dependencies));
