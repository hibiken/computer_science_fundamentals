// FIXME: Not working

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  insert(num) {
    if (num < this.key) {
      if (this.left !== null) {
        this.left.insert(num);
      } else {
        this.left = new Node(num);
      }
    } else {
      if (this.right !== null) {
        this.right.insert(num);
      } else {
        this.right = new Node(num);
      }
    }
  }
};

/**
 * @param {Array} nums -- sorted, unique elements
 */
const buildMinimalTree = (nums) => {
  if (nums.length === 0) return null;

  const midIndex = Math.floor(nums.length / 2);
  const root = new Node(nums[midIndex]);
  insertMedian(root, nums, 0, midIndex - 1);
  insertMedian(root, nums, midIndex + 1, nums.length - 1);
  return root;
};

const insertMedian = (root, nums, startIndex, endIndex) => {
  if (startIndex >= endIndex) {
    console.log("HIIIIIIIIIII")
    return; // Base case
  }

  const midIndex = Math.floor((startIndex + endIndex) / 2);
  root.insert(nums[midIndex]);
  insertMedian(root, nums, 0, midIndex - 1);
  insertMedian(root, nums, midIndex + 1, nums.length - 1);
  return root
};


/** Test **/
const small = [1, 2, 3];
const normal = [ 1, 3, 5, 6, 7, 11, 14, 20];

const bst = buildMinimalTree(normal);
console.log('test', bst);


