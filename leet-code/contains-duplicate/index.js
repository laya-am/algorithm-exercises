var containsDuplicate = function (nums) {
  const map1 = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map1.has(nums[i])) {
      map1.set(nums[i], 1);
    } else {
      return true;
    }
  }
  return false;
};
