/* Reference 
 * http://www.geeksforgeeks.org/dynamic-programming-set-18-word-wrap/
 */

const _ = require('lodash');

const getMinCost = (words, width) => {
  const memo = new Map();
  const nextLineIndex = new Map();
  const minCost = getMinCostHelper(words, width, 0, memo, nextLineIndex);  
  printLines(words, nextLineIndex, width);
  return minCost;
};

const getMinCostHelper = (words, width, i, memo, nextLineIndex) => {
  if (memo.has(i)) return memo.get(i);
  if (i === words.length) return 0;

  let minCost = Infinity;
  for (let j = i+1; j <= words.length; j++) {
    if (words.slice(i,j).join(" ").length > width) {
      break;
    }
    const extraSpaceCount = (width - words.slice(i, j).join(' ').length)
    const lineCost = Math.pow(extraSpaceCount, 3);
    const cost = getMinCostHelper(words, width, j, memo, nextLineIndex) + lineCost;
    if (cost < minCost) {
      minCost = cost;
      nextLineIndex.set(i, j);
    }
  }
  memo.set(i, minCost);
  return minCost;
};

const printLines = (words, nextLineIndex, width) => {
  let startIndex = 0;
  while (startIndex !== words.length) {
    const nextStartIndex = nextLineIndex.get(startIndex);
    const line = words.slice(startIndex, nextStartIndex).join(' ');
    console.log(_.padEnd(line, width));
    startIndex = nextStartIndex;
  }
};

/* Test */
const words = "Geeks for Geeks presents word wrap problem".split(" ");
const width = 15;
console.log(getMinCost(words, width));
