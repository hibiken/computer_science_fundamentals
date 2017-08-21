const stringCompression = (str) => {
  if (str.length === 0) return str;

  let output = '';
  let currentLetter = str[0];
  let counter = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentLetter) {
      counter += 1;
    } else {
      output += `${currentLetter}${counter}`;
      currentLetter = str[i];
      counter = 1;
    }
  }

  output += `${currentLetter}${counter}`;

  return output.length < str.length ? output : str;
};

console.log("Test", stringCompression("aabcccccaaa"));
console.log("Test", stringCompression("aaaa"));
console.log("Test", stringCompression("abcdefg"));
console.log("Test", stringCompression("a"));
