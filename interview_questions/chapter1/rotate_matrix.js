const rotateMatrix = (matrix) => {
  const output = [];
  const reversed = matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    output.push(collect(i, reversed));
  }
  return output;
};

const collect = (i, matrix) => {
  return matrix.map(row => row[i]);
};

const threeByThree = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const fourByFour = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.log(rotateMatrix(threeByThree));
