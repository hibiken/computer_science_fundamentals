function traverse(matrix) {
  const M = matrix.length;
  const N = matrix[0].length;
  const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const visited = new Set();

  function withinBound(i, j) {
    return 0 <= i && i < M && 0 <= j && j < N;
  }

  function dfs(i, j) {
    if (visited.has([i, j].toString())) {
      return;
    }
    visited.add([i, j].toString());
    DIRECTIONS.forEach(direction => {
      const nextRow = i + direction[0];
      const nextCol = j + direction[1];
      if (withinBound(nextRow, nextCol)) {
        dfs(nextRow, nextCol);
      }
    });
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      dfs(i, j);
    }
  }
}
