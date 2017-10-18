/* Given an array of numbers, find K-th smallest numbers */
const smallestKth = (nums, k) => {
  if (k < 1 || k > nums.length) {
    throw new Error("K is inalid");
  }
  return findSmallestKth(nums, k, 0, nums.length - 1);
};

const findSmallestKth = (nums, k, startIdx, endIdx) => {
  const pivotIdx = partition(nums, startIdx, endIdx);

  if  (pivotIdx === k - 1) {
    return nums[pivotIdx]
  }
  if (pivotIdx === k) {
    return Math.max(...nums.slice(startIdx, pivotIdx));
  }

  if (k < pivotIdx) {
    return findSmallestKth(nums, k, startIdx, pivotIdx - 1);
  } else {
    return findSmallestKth(nums, k, pivotIdx + 1, endIdx);
  }
};

const partition = (nums, startIdx, endIdx) => {
  if (startIdx >= endIdx) {
    return startIdx;
  }

  const pivot = nums[endIdx];
  let i = startIdx - 1;

  for (let j = startIdx; j < endIdx; j++) {
    if (nums[j] < pivot) {
      i += 1;
      swap(nums, i, j);
    }
  }
  swap(nums, i+1, endIdx);
  return i + 1;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/* Test */
const numbers = [1, 3, 4, 5, 8, 7, 10, 9, 11, 12, 14, 13, 15];
console.log(smallestKth(numbers, 7));
