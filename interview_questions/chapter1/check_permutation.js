const sort = (str) => {
  return str.split('').sort().join('');
};

const checkPermutation = (str1, str2) => {
  return sort(str1) === sort(str2);
};


