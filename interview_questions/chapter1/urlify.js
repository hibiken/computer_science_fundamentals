const urlify = (str) => {
  const SPACE = /\s/g;

  return str.replace(SPACE, "%20");
};

console.log('Result', urlify("Hello Ken. How are you?"));
