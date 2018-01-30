// Quicksort algorithm
//
//
const quickSort = (nums, startIndex, endIndex) => {
  if (startIndex >= endIndex) return;

  const pivotIndex = partition(nums, startIndex, endIndex);
  quickSort(nums, startIndex, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, endIndex);
};

const partition = (nums, startIndex, endIndex) => {
  let pivotIndex = endIndex;
  let right = 0;
  let left = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[pivotIndex]) {
      swap(numbers, i, right);
      right += 1;
      left += 1;
    }
  }

  swap(numbers, right, pivotIndex);
  pivotIndex = right;
  return pivotIndex;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

numbers = [2, 3, 1, 5, 9, -1, 22, 3, 10, 4, 6];
quickSort(numbers, 0, numbers.length -1);

console.log('Result', numbers);
