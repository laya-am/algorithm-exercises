var twoSum = function (nums, target) {
  //create a map
  // loop thru the elements in array and check if the el is equal to any keys in the map
  // if yes, return the index of el and the value of the found key
  //if not, add the target - el to the map with the value of its index

  // [2,11,15, 7]
  // map: { 7:0 , -2:1 , -6:2 }
  const map1 = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map1.has(nums[i])) {
      return [i, map1.get(nums[i])];
    } else {
      map1.set(target - nums[i], i);
    }
  }
};
