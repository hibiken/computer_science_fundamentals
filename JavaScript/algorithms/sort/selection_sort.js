const selectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIdx = i;
    let currentMin = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < currentMin) {
        minIdx = j;
        currentMin = nums[j];
      }
    }
    swap(nums, i, minIdx);
  }
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/* Test */
const numbers = [9, 3, 5, 2, 6, 24, 52, 90, 43, 5];
selectionSort(numbers);
console.log(numbers);
