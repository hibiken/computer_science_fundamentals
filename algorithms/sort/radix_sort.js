/* Time complexity: O(N)
 * where N is the length of nums
 */
const radixSort = (nums) => {
  const max = Math.max(...nums);

  const maxDigitCount = Math.floor(Math.log10(max)) + 1;

  for (let i = 1; i <= maxDigitCount; i++) {
    const sortBy = nums.map(num => getDigit(num, i));
    nums = countingSort(sortBy, nums);
  }

  return nums;
};

const getDigit = (num, place) => {
  return Math.floor(num % (Math.pow(10, place)) / Math.pow(10, place - 1));
}

const countingSort = (nums, numsToSort) => {
  const min = Math.min(...nums); // O(N) time
  const max = Math.max(...nums); // O(N) time
  const numCount = new Array(max - min + 1); // O(k) time & space: where k in range of input (max - min + 1)
  const indexFor = num => num - min;

  // initialize numCount elements to zeros
  // O(k) time
  for (let i = 0; i < numCount.length; i++) {
    numCount[i] = 0;
  }

  // O(N)
  for (let i = 0; i < nums.length; i++) {
    numCount[indexFor(nums[i])] += 1;
  }

  const less = new Array(numCount.length);
  less[0] = 0;;
  for (let j = 1; j < less.length; j++) {
    less[j] = less[j-1] + numCount[j-1];
  }
  // O(N) time & space
  const result = new Array(nums.length);

  // O(N)
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const index = less[indexFor(num)];
    less[indexFor(num)] += 1;
    result[index] = numsToSort[i];
  }

  return result;
};

/* Analysis 
 *
 * Time Complexity: O(N + k):
 * where N is the size of the input, k is range of
 * input 
 *
 * Auxilary Space: O(N + k)
 */


const numbers = [61, 74, 9, 513, 59, 2, 321, 433];
const smallSample = [1, -4, 2, 3, 5, -2];
// console.log(countingSort([1, 4, 1, 9, 2, 3], numbers));
console.log('Result', radixSort(numbers));

