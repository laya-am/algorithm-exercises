var firstUniqChar = function (s) {
  // loop thru the string and create a map
  // if char already exists in map, increment the value
  // if not, add it to the map with value of one
  // when done, loop thru the string once more and check their value in the map
  // if its value is one, return its index
  const map1 = new Map();
  for (char of s) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map1.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
