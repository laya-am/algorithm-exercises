// solution 1: time complexity: O(n), extra memory of O(n)

// var majorityElement = function (nums) {
//   const map1 = new Map();
//   for (let num of nums) {
//     if (map1.has(num)) {
//       map1.set(num, map1.get(num) + 1);
//     } else {
//       map1.set(num, 1);
//     }
//     if (map1.get(num) > nums.length / 2) {
//       return num;
//     }
//   }
//   console.log(map1);
// };

// solution 2: time complexity: O(1)

var majorityElement = function (nums) {
  let majEl;
  let count;
  for (let num of nums) {
    if (num === majEl) {
      count++;
    } else {
      if (count > 0) {
        count--;
      } else {
        majEl = num;
        count = 1;
      }
    }
  }
  return majEl;
};

// same solution different syntax

// var majorityElement = function(nums) {
//     let majEl;
//     let count = 0;
//     for(let num of nums){
//         if(count === 0){
//             majEl = num
//             count = 1
//         }
//         else{
//             num === majEl ? count++ : count--
//         }
//     }
//     return majEl
// };
