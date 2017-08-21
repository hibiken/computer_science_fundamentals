const zeroMatrix = (matrix) => {
  const zeroColIdx = new Set();
  const zeroRowIdx = new Set();

  matrix.forEach((row,rowIdx) => {
    row.forEach((element, colIdx) => {
      let zeroRow = false;
      if (element === 0) {
        zeroColIdx.add(colIdx);
        zeroRowIdx.add(rowIdx);
      }
    });
  });

  setZeroRows(matrix, zeroRowIdx);
  setZeroCols(matrix, zeroColIdx);

  return matrix;
};

const setZeroRows = (matrix, rowIdx) => {
  for (let i = 0; i < matrix.length; i++) {
    if (rowIdx.has(i)) {
      matrix[i] = zeroRow(matrix[i].length);
    }
  }
};

const setZeroCols = (matrix, colIdx) => {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (colIdx.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};

const zeroRow = (length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(0);
  }

  return result;
}

const matrix = [
  [1, 3, 5, 4],
  [2, 0, 1, 6],
  [8, 5, 0, 9]
];
console.log(zeroMatrix(matrix));
