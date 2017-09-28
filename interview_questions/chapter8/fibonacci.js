const fib = (n) => {
  const memo = new Map();
  return fibonacci(n, memo);
};

const fibonacci = (n, memo) => {
  if (memo.has(n)) return memo.get(n);
  if (n === 0 || n === 1) return n;
  const result = fibonacci(n-1, memo) + fibonacci(n-2, memo);
  memo.set(n, result);
  return result;
};

const fibDP = (n) => {
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 2; i < n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return a + b;
};

console.log('fib 10', fibDP(10));
