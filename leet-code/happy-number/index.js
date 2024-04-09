var isHappy = function (n) {
  const set1 = new Set();
  while (n !== 1) {
    const digitsArr = n.toString().split("");
    const squaredDigitsArr = digitsArr.map((digit) => Math.pow(+digit, 2));
    const sum = squaredDigitsArr.reduce((a, b) => a + b);
    if (set1.has(sum)) {
      return false;
    }
    set1.add(sum);
    n = sum;
  }
  return true;
};
