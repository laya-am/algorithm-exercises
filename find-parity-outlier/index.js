function findOutlier(integers){
    // define odds array and evens array
    // check each element and add them to the corresponding array
    //check the length of both arrays and return the element in the shorter one
    const odds=[];
    const evens=[];
    integers.forEach(integer => integer%2 ===0 ? evens.push(integer) : odds.push(integer));
    return odds.length < evens.length ? odds[0] : evens[0];
  }