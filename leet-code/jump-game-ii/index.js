var jump = function (nums) {
  const lastElIndex = nums.length - 1;
  let numOfMove = 0;
  let max = 0;
  let min = 0;
  while (max < lastElIndex) {
    numOfMove++;
    let tempMax = 0;
    for (let i = min; i <= max; i++) {
      tempMax = Math.max(tempMax, i + nums[i]);
    }
    min = max + 1;
    max = tempMax;
  }
  return numOfMove;
};
