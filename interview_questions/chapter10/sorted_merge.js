const merge = (nums1, nums2) => {
  let i = 0;
  let j = 0;

  const totalCount = nums1.length + nums2.length;

  nums1.push(Infinity);
  nums2.push(Infinity);

  for (let k = 1; k <= totalCount; k++) {
    if (nums1[i] < nums2[j]) {
      i += 1;
    } else {
      nums1.splice(i, 0, nums2[j]);
      i += 1;
      j += 1;
    }
  }

  nums1.pop();
};

const nums1 = [2, 5, 9, 14];
const nums2 = [3, 4, 10, 11, 15];

merge(nums1, nums2);
console.log('test', nums1);
