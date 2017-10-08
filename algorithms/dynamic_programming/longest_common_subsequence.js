const LCS = (str1, str2) => {
  const dp = createDPTable(str1.length + 1, str2.length + 1);
  getMaxLength(str1, str2, dp);
  return getLCS(str1, str2, dp, str1.length, str2.length);
};

/* O(nm) time */
const getMaxLength = (str1, str2, dp) => {
  let maxLength = 0;
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
        continue;
      }

      if (str1[i-1] === str2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
      maxLength = Math.max(dp[i][j], maxLength);
    }
  }
  return maxLength;
};

const createDPTable = (n, m) => {
  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m);
  }
  return dp;
};

/* O(m + n) time */
const getLCS = (str1, str2, dp, i, j) => {
  if (dp[i][j] === 0) return '';

  if (str1[i-1] === str2[j-1]) {
    return getLCS(str1, str2, dp, i-1, j-1) + str1[i-1];
  } else {
    if (dp[i][j-1] > dp[i-1][j]) {
      return getLCS(str1, str2, dp, i, j-1);
    } else {
      return getLCS(str1, str2, dp, i-1, j);
    }
  }
};

/* Test */
const X = 'CATCGA';
const Y = 'GTACCGTCA';
/* LCS of X and Y is 'CCGA' */
console.log(LCS(X, Y));
