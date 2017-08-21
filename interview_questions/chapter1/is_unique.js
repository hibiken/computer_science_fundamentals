const isUnique = (str) => {
  const hashTable = new Map();

  for (let i = 0; i < str.length; i++) {
    if (hashTable.has(str[i])) {
      return false;
    }
    hashTable.set(str[i], true);
  }

  return true;
};

console.log('Test', isUnique('abcdefga'));
