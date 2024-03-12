// [9,9,9] --> [1,0,0,0]
// solution 1: extra memory: extract the number from array, increment it, and put it back in an array
var plusOne = function (digits) {
  const incrementedNum = BigInt(digits.join("")) + 1n;
  const result = incrementedNum.toString().split("");
  return result;
};

// solution 2: in-place: increment inside the array
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    } else {
      digits[i]++;
      break;
    }
  }
  return digits;
};
