var canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Map();
  for (char of magazine) {
    if (magazineMap.has(char)) {
      magazineMap.set(char, magazineMap.get(char) + 1);
    } else {
      magazineMap.set(char, 1);
    }
  }
  for (char of ransomNote) {
    if (magazineMap.has(char) && magazineMap.get(char) > 0) {
      magazineMap.set(char, magazineMap.get(char) - 1);
    } else {
      return false;
    }
  }
  return true;
};
