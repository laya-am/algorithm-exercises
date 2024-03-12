var singleNumber = function (nums) {
  // create a map
  // loop thru the arr.
  //if el isn't in the map, add it with val of 0
  //if it is, increment val to 1.
  //when done, the el in map with val 0 is the answer
  const map1 = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map1.has(nums[i])) {
      map1.set(nums[i], map1.get(nums[i]) + 1);
    } else {
      map1.set(nums[i], 0);
    }
  }
  for (entry of map1.entries()) {
    if (entry[1] === 0) {
      return entry[0];
    }
  }
};
