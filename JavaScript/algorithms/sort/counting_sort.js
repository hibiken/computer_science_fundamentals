// TODO: Do a careful analysis of Time/Space complexity.

// N: nums.length
const countingSort = (nums) => {
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
  less[0] = 0;

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
    result[index] = num;
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


const simple = [4, 2, 2, 1, 5, 0, 6, 3, 9];
const numbers = [61, 74, 51, 59];
const smallSample = [1, -4, 2, 3, 5, -2];
console.log(countingSort(smallSample));

