// URL: https://leetcode.com/problems/longest-palindromic-substring/description/

/*/ Q: Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
//
// My solution
//
// // O(n^3)
// var longestPalindrome = function(s) {
//     let lastFoundAtIndex = -1;
//     let longestPalindrome = '';
//     const palindromes = new Map();
    
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             if (i > lastFoundAtIndex) {
//                 const substring = s.slice(i, j+1);
//                 if (isPalindrome(substring, palindromes) && substring.length > longestPalindrome.length) {
//                     longestPalindrome = substring;
//                 }
//             }
//         }
//     }
    
//     return longestPalindrome;
// };

// // O(n) running time
// const isPalindrome = (str, cache) => {
//   if (cache.has(str)) return true;
//   const isEvenLength = str.length % 2 === 0;
//   let leftIndex; 
//   let rightIndex;
    
//   if (isEvenLength) {
//       leftIndex = str.length / 2 - 1;
//       rightIndex = str.length / 2;
//   } else {
//       leftIndex = Math.floor(str.length / 2);
//       rightIndex = Math.floor(str.length / 2);
//   }
    
//   for (let i = leftIndex; i >= 0; i--) {
//       if (str[leftIndex] !== str[rightIndex]) {
//           return false;
//       }
//       leftIndex -= 1;
//       rightIndex += 1;
//   }
  
//   cache.set(str, true);
//   return true;
// };

*/
const isPalindrome = (leftIndex, rightIndex, str, cache) => {
    if (cache.has(`${leftIndex}, ${rightIndex}`)) {
        cache.get(`${leftIndex}, ${rightIndex}`);
    }
    if (leftIndex === rightIndex) {
        cache.set(`${leftIndex}, ${rightIndex}`, true);
        return true;
    } 
    if (leftIndex + 1 === rightIndex) {
        if (str[leftIndex] === str[rightIndex]) {
            cache.set(`${leftIndex}, ${rightIndex}`, true);
            return true; 
        } else {
            cache.set(`${leftIndex}, ${rightIndex}`, false);
            return false;
        }
    }
    const result = (isPalindrome(leftIndex + 1, rightIndex - 1, str, cache)) && (str[leftIndex] === str[rightIndex]); 
    cache.set(`${leftIndex}, ${rightIndex}`, result);
    return result;
}

const longestPalindrome = (s) => {
    let longest = '';
    const cache = new Map();
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.slice(i, j+1);
            if (isPalindrome(i, j, s, cache) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    
    return longest;
}

console.log('TEST', longestPalindrome("aabcbadeedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbabcbadeedabcsjdflk;asjflafsjldasjfladsjflasdjbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbafjdkflafdfdfklk;adfdfdfdeluirereererererejld;ajflajflsajlajflajsdfjasdksjflkadsjflajslfajdsljalfjdalsjflasjflkajlkadjsflkasjdflkadsjdlfjaslaabcbadeedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbabcbadeedabcsjdflk;asjflafsjldasjfladsjflasdjbaedabcbadabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbaedabcbafjdkflafdfdfklk;adfdfdfdeluirereererererejld;ajflajflsajlajflajsdfjasdksjflkadsjflajslfajdsljalfjdalsjflasjflkajlkajsflkasjdflkadsjdlfjasl"));
