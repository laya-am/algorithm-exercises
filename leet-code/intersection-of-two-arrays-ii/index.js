var intersect = function (nums1, nums2) {
  // loop thru nums1 and create a hashmap with number of occurances of each el
  //loop thru nums2
  //for each el, if it exists in the map, add the el to result and also decrement the occurance in            map
  //return result
  let result = [];
  const map1 = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (map1.has(nums1[i])) {
      map1.set(nums1[i], map1.get(nums1[i]) + 1);
    } else {
      map1.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map1.get(nums2[i]) > 0) {
      result.push(nums2[i]);
      map1.set(nums2[i], map1.get(nums2[i]) - 1);
    }
  }
  return result;
};
