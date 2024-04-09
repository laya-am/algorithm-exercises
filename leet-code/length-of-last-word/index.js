var lengthOfLastWord = function (s) {
  const arr = s.trim().split(" ");
  const lastIndex = arr.length - 1;
  return arr[lastIndex].length;
};
