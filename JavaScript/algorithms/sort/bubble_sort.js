const bubbleSort = (nums) => {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i+1]) {
        swap(nums, i, i+1);
        isSorted = false;
      }
    }
  }
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

/* Test */
const numbers = [9, 3, 5, 2, 6, 24, 52, 90, 43, 5];
bubbleSort(numbers);
console.log(numbers);
