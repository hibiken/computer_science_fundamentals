// https://leetcode.com/problems/powx-n/

const cache = new Map();

const myPow = (x, n) => {
    if (n === 0) return 1;
    if (n === 1) return x;
    
    if (cache.has(`${x}, ${n}`)) return cache.get(`${x}, ${n}`);
    const absExp = Math.abs(n);
    const base2Exp = Math.floor(Math.log2(absExp));
    const biggerExp = 2 * base2Exp;
    const smallerExp = absExp - biggerExp;
    
    let result;
    if (smallerExp === 0) {
        result = myPow(x, biggerExp / 2) * myPow(x, biggerExp / 2);
    } else {
       result = myPow(x, biggerExp) * myPow(x, smallerExp); 
    }
    
    if (n < 0) {
        result = 1 / result;
    }
    
    cache.set(`${x}, ${n}`, result);
    return result;  
};
