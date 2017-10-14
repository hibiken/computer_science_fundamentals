const bucketSort = (nums) => {
  const buckets = initBuckets(10);

  for (let i = 0; i < nums.length; i++) {
    const idx = getBucketIdx(nums[i]);
    buckets[idx].push(nums[i]);
  }

  let result = [];
  for (let j = 0; j < buckets.length; j++) {
    insertionSort(buckets[j]);
    result = result.concat(buckets[j]);
  }
  return result;
};

const initBuckets = (bucketCount) => {
  const buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  return buckets;
};

const getBucketIdx = (num) => {
  return Math.floor(num * 10);
};

const insertionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j+1] = nums[j];
      j -= 1;
    }
    nums[j+1] = key;
  }
  return nums;
};


/* Test */
const testCase = [0.12, 0.32, 0.24, 0.83, 0.04, 0.55, 0.22, 0.53, 0.89, 0.98, 0.75];

//console.log(insertionSort(testCase));
console.log(bucketSort(testCase));
