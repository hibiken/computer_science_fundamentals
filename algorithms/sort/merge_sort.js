const mergeSort = (nums) => {
  if (nums.length < 2) return nums;

  const midIndex = Math.floor(nums.length / 2);

  const left = nums.slice(0, midIndex);
  const right = nums.slice(midIndex);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

const merge = (nums1, nums2) => {
  const times = nums1.length + nums2.length;
  nums1.push(Infinity);
  nums2.push(Infinity);

  const sorted = [];
  let i = 0;
  let j = 0;

  for (let k = 0; k < times; k++) {
    if (nums1[i] <= nums2[j]) {
      sorted.push(nums1[i]);
      i += 1;
    } else {
      sorted.push(nums2[j]);
      j += 1;
    }
  }

  return sorted;
};

console.log('Result', mergeSort([2, 23, 3, 31, 4, 1, 5, 7]));
