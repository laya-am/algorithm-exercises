var numIdenticalPairs = function(nums) {
    // pour the values in a hash map with the num of occurancies of each value
    // loop through the map and incremend the count based on the occurances
    const hash = new Map();
    let count = 0;
    for(key of nums){
     hash.set(key, (hash.get(key) ?? 0) +1)
    }
  for (entry of hash.entries()){
    console.log(entry)
    count += entry[1] * (entry[1]-1)/2
  }
  return count
};