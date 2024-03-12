var moveZeroes = function (nums) {
  //  p
  // [0,1,0,3,12]
  //  i
  if (nums.length < 2) return nums;
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //swap the value of pointer and i
      const temp = nums[pointer];
      nums[pointer] = nums[i];
      nums[i] = temp;
      pointer++;
    }
  }
};
