class TrieNode {
  constructor() {
    this.children = new Map();
    this.isCompleteWord = false;
  }
};

/**
 * @param {Array(String)} words - array of words
 * @return {TrieNode} root - root of the trie
 */

const buildTrie = (words) => {
  const root = new TrieNode();

  words.forEach((word) => {
    insertWord(root, word);
  });

  return root;
};

/**
 * @param {TrieNode} root
 * @param {String} word
 * @return {TrieNode} root
 */
const insertWord = (root, word) => {
  let currentNode = root;

  for (let i = 0; i < word.length; i++) {
    const character = word[i];
    if (currentNode.children.has(character)) {
      currentNode = currentNode.children.get(character);
    } else {
      const newNode = new TrieNode();
      currentNode.children.set(character, newNode);
      currentNode = newNode;
    }

    if (i === word.length - 1) {
      currentNode.isCompleteWord = true;
    }
  }
};

/**
 * @param {TrieNode} root
 * @param {String} word
 * @return {Boolean} found
 */
const searchWord = (root, word) => {
  let currentNode = root;

  for (let i = 0; i < word.length; i++) {
    const character = word[i];
    if (currentNode.children.has(character)) {
      currentNode = currentNode.children.get(character);
    } else {
      return false;
    }
  }

  return currentNode.isCompleteWord;
};


/* Test */
const words = ['there', 'their', 'answer', 'any', 'bye'];

const prefixTree = buildTrie(words);

console.log('Search for "there"', searchWord(prefixTree, 'there'));
console.log('Search for "bye"', searchWord(prefixTree, 'bye'));
console.log('Search for "ken"', searchWord(prefixTree, 'ken'));

