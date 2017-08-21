// TODO: This is not optimal in terms of space. See solution

const _ = require('lodash');

const rotateMatrix = (matrix) => {
  for (let l = 0; l <= Math.floor(matrix.length / 2); l++) {
    rotate(matrix, l);
  }
  return matrix;
};

// l is layer count from outside, 0, 1, 2, ...
// l = 0, 1, 2 
const rotate = (matrix, l) => {
  const top = matrix[0+l].slice(0+l, -1-l);

  const right = matrix.filter((_, idx) => {
    return idx >= (0+l) && idx <= matrix.length -1 + (-1-l);
  }).map(row => _.nth(row, -1-l));

  const bottom = _.nth(matrix, -1-l).slice(1+l);

  const left = matrix.filter((_, idx) => {
    return idx >= 1+l && idx <= matrix.length - 1 -l;
  }).map(row => row[l]);

  // Replace right with top
  let i = 0;
  for (let rowIdx = 0+l; rowIdx <= matrix.length - 1 + (-1-l); rowIdx++) {
    matrix[rowIdx][matrix.length -1 + (-l)] = top[i];
    i++;
  }

  // Replace bottom with right
  i = right.length - 1;
  for (let colIdx = 1+l; colIdx <= matrix.length - 1 - l; colIdx++) {
    matrix[matrix.length - 1 -l][colIdx] = right[i];
    i--;
  }

  // Replace left with bottom
  i = 0;
  for (let rowIdx = 1+l; rowIdx <= matrix.length - 1 - l; rowIdx++) {
    matrix[rowIdx][l] = bottom[i];
    i++;
  }

  // Replace top with left
  i = left.length - 1;
  for (let colIdx = l; colIdx <= matrix.length - 1 + (-1-l); colIdx++) {
    matrix[l][colIdx] = left[i];
    i--;
  }
};

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

const small = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];


console.log('matrix', rotateMatrix(small));
