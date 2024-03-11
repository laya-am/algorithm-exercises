var removeDuplicates = function (nums) {
  // k is the pointer: the position to be filled only when we encounter a non-repeating element.
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
