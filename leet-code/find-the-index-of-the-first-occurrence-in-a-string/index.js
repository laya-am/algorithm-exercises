var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      let isNeedleFound = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          isNeedleFound = false;
          break;
        }
      }
      if (isNeedleFound) return i;
    }
  }
  return -1;
};
