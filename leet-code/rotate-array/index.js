// solution 1: using extra memory

var rotate = function (nums, k) {
  const rotated = [];
  for (let i = 0; i < nums.length; i++) {
    if (i + k < nums.length) {
      rotated[i + k] = nums[i];
    } else {
      rotated[i + k - nums.length] = nums[i];
    }
  }
  return rotated;
};

// solution 2: in-place but with high runtime

var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let lastEl = nums[nums.length - 1];
    nums.pop();
    nums.unshift(lastEl);
  }
};
