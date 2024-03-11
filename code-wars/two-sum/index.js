//   solution 1: brute force, not efficient but easy to implement
function twoSum(numbers, target) {
      
      for (let i=0 ; i< numbers.length-1; i++){
        for (let j= i+1; j<numbers.length; j++){
          if(numbers[i] + numbers[j] === target){
            return [i, j]
          } 
        }
      }
    }

    // solution 2: 

function twoSum2(nums, target) {
  //if the complimentary num is not in the hash, add num with the index of the num
  //otherwise, return the index of num and the index of the complimentary num
  const hash = new Map();
  for (i = 0 ; i < nums.length ; i++) {
    const compliNum = target - nums[i];
    if(hash.get(compliNum) === undefined){ 
      hash.set(nums[i], i)
    }else{
      return [i , hash.get(compliNum)]
    }
  }
};