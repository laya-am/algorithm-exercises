//  solution 1: recursion with O(2^n) time complexity

var climbStairs = function (numOfStairs) {
  if (numOfStairs === 0) return 1;
  if (numOfStairs === 1) return 1;
  return climbStairs(numOfStairs - 1) + climbStairs(numOfStairs - 2);
};

// solution 2: recursion with memoization, time complexity O(n)

const map = new Map();
var climbStairs = function (numOfStairs) {
  if (numOfStairs === 0) map.set(0, 1);
  if (numOfStairs === 1) map.set(1, 1);
  if (!map.has(numOfStairs)) {
    map.set(
      numOfStairs,
      climbStairs(numOfStairs - 1) + climbStairs(numOfStairs - 2)
    );
  }
  return map.get(numOfStairs);
};
