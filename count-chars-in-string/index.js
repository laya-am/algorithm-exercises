function count(string) {
    //empty result object
    // iterate
    //for each char, does it exist in result?
    // if no, add it with value 1
    // if yes, don't add . only increment.
    let result= {};
    for (char of string){
      result[char] ?
        result[char]++
      : result[char] = 1
    }
    return  result;
  }