var canJump = function (nums) {
  if (nums.length === 1) return true;
  const lastElIndex = nums.length - 1;
  let maxReachableIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxReachableIndex = Math.max(maxReachableIndex, i + nums[i]);
    if (maxReachableIndex >= lastElIndex) return true;
    if (i >= maxReachableIndex) break;
  }
  return false;
};
