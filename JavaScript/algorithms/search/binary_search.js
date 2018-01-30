// O(logN) running time

// This implementation is not efficient in terms of Space complexity.
// (It creates a new copy of subarray for every recursive call)
// O(NlogN) space complexity
// (n + n/2 + n/4 + ... + 1)
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

// This one has better space complexity
// since it does not create a copy of subarry.
// O(1) space complexity
const binarySearchWithTwoPointers = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((endIndex + startIndex) / 2);

    if (arr[midIndex] === target) {
      return midIndex;
    }

    if (target < arr[midIndex]) {
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
  }

  return false;
};

console.log('2 pointers result', binarySearchWithTwoPointers([1, 3, 4, 5, 6, 7, 8, 10, 11], 3));
console.log('2 pointers result', binarySearchWithTwoPointers([], 3));

const recursiveBinarySearchWithTwoPointers = (arr, startIndex, endIndex, target) => {
  if (startIndex > endIndex) {
    return false;
  }

  const midIndex = Math.floor((endIndex + startIndex) / 2);

  if (arr[midIndex] === target) {
    return midIndex;
  }

  if (target < arr[midIndex]) {
    return recursiveBinarySearchWithTwoPointers(arr, startIndex, midIndex - 1, target);
  } else {
    return recursiveBinarySearchWithTwoPointers(arr, midIndex + 1, endIndex, target);
  }
}

const nums = [1, 3, 4, 5, 6, 7, 8, 10, 11];
console.log('Recursive', recursiveBinarySearchWithTwoPointers(nums, 0, nums.length - 1,  3))
console.log('Recursive', recursiveBinarySearchWithTwoPointers([], 0, 0, 2));
console.log('Recursive', recursiveBinarySearchWithTwoPointers([0, 1, 2], 0, 2, 2));
