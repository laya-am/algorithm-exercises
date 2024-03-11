var isPalindrome = function (s) {
  const lowerCase = s.toLowerCase();
  let left = 0;
  let right = lowerCase.length - 1;
  while (left < right) {
    while (!alphanumericChecker(lowerCase[left]) && left < right) {
      left++;
    }
    while (!alphanumericChecker(lowerCase[right]) && left < right) {
      right--;
    }
    if (lowerCase[left] !== lowerCase[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

function alphanumericChecker(char) {
  const asciiCode = char.charCodeAt(0);
  if (
    (asciiCode > 96 && asciiCode < 123) ||
    (asciiCode > 47 && asciiCode < 58)
  ) {
    return true;
  }
  return false;
}
