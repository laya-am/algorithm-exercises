var mergeAlternately = function (word1, word2) {
  const minLen = Math.min(word1.length, word2.length);
  let result = "";
  let char1;
  let char2;
  for (let i = 0; i < minLen; i++) {
    char1 = word1[i];
    char2 = word2[i];
    result = result + char1 + char2;
  }

  if (word1.length > word2.length) {
    result = result + word1.slice(minLen);
  } else {
    result = result + word2.slice(minLen);
  }
  return result;
};
