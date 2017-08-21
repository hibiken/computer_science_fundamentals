// O(n^2) running time

const insertionSort = (nums) => {
  for (let j = 1; j < nums.length; j++) {
    let key = nums[j];
    let i = j - 1; // nums[0..i] is sorted

    while (i >= 0 && nums[i] > key) {
      nums[i+1] = nums[i];
      i = i - 1
    }
    nums[i+1] = key;
  }

  return nums;
};

console.log('result', insertionSort([2, 5, 3, 1, 6, 4]));
