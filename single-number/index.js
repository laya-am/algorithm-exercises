var singleNumber = function(nums) {
    // define result obj as empty
    // iterate on the arr, for each item, store it with the value of
    // 0 if it doesn't already exist
    // 1 if it does already exist
    // when done, see which key has the value of 0
    const binaryObj = {};
    let result= null;
    nums.forEach(num => {
        binaryObj[num] = !!binaryObj[num] ? "1" : "0"   
    })
    for (entry of Object.entries(binaryObj)){
      entry[1] == 0 ? result = +entry[0] : null
    }
    return result
};