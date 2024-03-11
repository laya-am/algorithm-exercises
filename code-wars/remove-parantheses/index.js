function removeParentheses(s){
    let count = 0;
    let result = "";
    for(i = 0 ; i < s.length ; i++){
      if (s[i] === "("){
        count ++
      }else if (s[i] === ")"){
        count --
      }
      else if(count === 0){
        result += s[i]
      }
    }
    return result
  }