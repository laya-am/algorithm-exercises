function toCamelCase(str){
    let result="";
    for (var i = 0; i < str.length; i++) {
      if(str.charAt(i) === "-"  || str.charAt(i) === "_" ){
          result += str.charAt(i+1).toUpperCase();
          i++;
      }
    else{
      result += str.charAt(i)
      }
    }
    return result;
  }