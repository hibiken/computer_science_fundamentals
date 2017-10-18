const countingSort = (nums, k, getKey) => {
  const counterArray = new Array(k + 1);
  // O(k) time;
  for (let i = 0; i < counterArray.length; i++) {
    counterArray[i] = 0;
  }

  // O(N) time;
  for (let i = 0; i < nums.length; i++) {
    const key = getKey(nums[i]);
    counterArray[key] = counterArray[key] + 1;
  }

  // O(k) time;
  for (let i = 1; i < counterArray.length; i++) {
    counterArray[i] = counterArray[i] + counterArray[i-1];
  };

  const output = new Array(nums.length);

  // O(N) time;
  for (let j = nums.length - 1; j >= 0; j--) {
    const key = getKey(nums[j]);
    const index = counterArray[key] - 1;
    counterArray[key] = counterArray[key] - 1;
    output[index] = nums[j];
  }

  return output;
};

const radixSort = (nums, d) => {
  let sorted = nums;
  for (let i = 1; i <= d; i++) {
    const getKey = createDigitGetterFunc(i);
    sorted = countingSort(sorted, 9, getKey);
  }
  return sorted;
};

// Return a function to get i-th digit of the input integer
const createDigitGetterFunc = (i) => {
  return (integer) => {
    if (integer < Math.pow(10, i - 1)) return 0;
    const remainder = integer % (Math.pow(10, i));
    return Math.floor(remainder / (Math.pow(10, i - 1)));
  };
};


/* Test */
// const numbers = [821, 73453, 31345, 22, 10,  5000000, 1, 900, 8421, 290, 222828];
const numbers = [434, 209, 63, 32, 103, 834, 527];

console.log(radixSort(numbers, 3));

