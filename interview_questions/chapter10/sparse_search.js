const sparseSearch = (target, words, startIndex, endIndex) => {
  if (startIndex > endIndex) {
    return -1;
  }

  let midIndex = Math.floor((startIndex + endIndex) / 2);

  // find word closest to midIndex
  for (let i = 0; i <= Math.floor(words.length / 2); i++) {
    if (words[midIndex + i] !== "") {
      midIndex = midIndex + i;
      break;
    }
    if (words[midIndex - i] !== "") {
      midIndex = midIndex - 1;
      break;
    }
  }

  // normal binary search
  if (words[midIndex] === target) {
    return midIndex;
  }

  if (target < words[midIndex]) {
    return sparseSearch(target, words, startIndex, midIndex - 1);
  } else {
    return sparseSearch(target, words, midIndex + 1, endIndex);
  }
};

const search = (target, sparseWords) => {
  return sparseSearch(target, sparseWords, 0, sparseWords.length - 1);
};

const words = ["at", "", "", "", "ball", "", "", "", "cat", "", "", "dad"];
console.log("Test", search("dad", words));
