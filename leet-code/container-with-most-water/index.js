var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxAreaValue = 0;
  while (left < right) {
    let w = right - left;
    let h = Math.min(height[left], height[right]);
    let area = w * h;
    maxAreaValue = Math.max(area, maxAreaValue);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxAreaValue;
};
