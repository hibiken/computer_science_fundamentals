// O(logN) running time

const binarySearch = (arr, target) => {
  if (arr.length === 0) {
    return false;
  }

  const midIndex = Math.floor(arr.length / 2);

  if (arr[midIndex] === target) {
    return midIndex; // Woohoo! Found it!!
  }

  if (target < arr[midIndex]) {
    return binarySearch(arr.slice(0, midIndex), target);
  } else {
    return binarySearch(arr.slice(midIndex + 1), target);
  }
};

console.log('Result', binarySearch([1, 3, 4, 5, 6, 7, 8, 10, 11], 3));
console.log('Result', binarySearch([1, 2, 3], 5));
console.log('Result', binarySearch([], 3));
