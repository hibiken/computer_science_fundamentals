const palindromePermutation = (str) => {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      const value = map.get(str[i]) === 0 ? 1 : 0;
      map.set(str[i], value);
    } else {
      map.set(str[i], 1);
    }
  }

  return Array.from(map.values()).filter(v => v === 1).length <= 1;
};

console.log('Result', palindromePermutation("ababc"));
