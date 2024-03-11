function moveZeros(arr) {
    //loop thru the array
    //if item is 0, remove it and 
    //and push a 0 to zerosArray
    // join two arrays
    const zerosArray=[];
    for (let i =0 ; i< arr.length; i++){
      if(arr[i] === 0){
        arr.splice(i,1);
        zerosArray.push(0);
        i =-1
      }
    } 
    const result = [...arr, ...zerosArray]
    return result
  }

  //such a complicated solution to such an easy problem. Use filter :/