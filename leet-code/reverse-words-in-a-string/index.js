// solution 1: converting it to an array

var reverseWords = function (s) {
  const wordsArr = s.split(" ");
  const noSpaceArr = wordsArr.filter((word) => word !== "");
  const reversedArr = noSpaceArr.reverse();
  return reversedArr.join(" ");
};

// solution 2: in-place
//this one doesn't pass all the tests. needs some teaks for edge cases

var reverseWords = function (s) {
  let result = "";
  let pointer = s.length;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " || i === 0) {
      const word = s.slice(i + 1, pointer);
      console.log({ word });
      result = result + " " + word;
      console.log({ result });

      while (s[i] === " ") {
        i--;
      }
      pointer = i + 1;
    }
  }
};
