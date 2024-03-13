var isAnagram = function (s, t) {
  //iterate over string1 and add chars and their num of occurance to a hashmap
  //iterate over string2 and check each char with the hashmap
  // if it doesn't exist, return false
  // if it does, decrement the num of occurance by one
  // when done, if any num of occurance in map is !== 0, return false
  // otherwise return true
  const map1 = new Map();
  for (let char of s) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }
  for (char of t) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) - 1);
    } else {
      return false;
    }
  }
  for (value of map1.values()) {
    if (value !== 0) return false;
  }
  return true;
};
