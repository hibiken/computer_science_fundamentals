const _  =  require('lodash');

const groupAnagrams = (words) => {
  return words.sort(compareStrings);
};


const compareStrings = (str1, str2) => {
  const sorted1 = sortString(str1);
  const sorted2 = sortString(str2);

  if (sorted1 === sorted2) return 0;
  if (sorted1 < sorted2) return -1;
  return 1;
}


//TODO: Optimize it!
const sortString = str => {
  return str.split('').sort().join('');
};

const words = ["eat", "hat", "ath", "ate", "tea", "toe", "tah"];
console.log('test', groupAnagrams(words));
