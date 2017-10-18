const minWindow = (s, t) => {
  let start = 0;
  let end   = 0;
  let counter = t.length;
  let minStart = null;
  let minLength = Infinity;

  const tCounter = new Map();
  for (let i = 0; i < t.length; i++) {
    increment(tCounter, t[i], 1);
  }

  for (end = 0; end < s.length; end++) {
    const char = s[end];
    if (tCounter.has(char)) {
      if (tCounter.get(char) > 0) {
        counter -= 1;
      }
      increment(tCounter, char, -1);
    }
    while (counter === 0) {
      if (end - start + 1 < minLength) {
        minStart = start;
        minLength = end - start + 1;
      }
      if (tCounter.has(s[start])) {
        increment(tCounter, s[start], 1);
        if (tCounter.get(s[start]) > 0) {
          counter += 1;
        }
      }
      start += 1;
    }
  }

  if (minLength === Infinity) return '';
  return s.slice(minStart, minStart + minLength);
};

const increment = (map, key, delta) => {
  if (map.has(key)) {
    const newCount = map.get(key) + delta;
    map.set(key, newCount);
  } else {
    map.set(key, delta);
  }
};

/* Test */
const s = "ADOBECODEBANC";
const t = "ABC";

console.log(minWindow(s, t));
