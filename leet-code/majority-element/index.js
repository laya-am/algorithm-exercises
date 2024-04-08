// solution 1: time complexity: O(n)

var majorityElement = function (nums) {
  const map1 = new Map();
  for (let num of nums) {
    if (map1.has(num)) {
      map1.set(num, map1.get(num) + 1);
    } else {
      map1.set(num, 1);
    }
    if (map1.get(num) > nums.length / 2) {
      return num;
    }
  }
  console.log(map1);
};

// solution 2: time complexity: O(1)
