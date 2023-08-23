function digitalRoot(n) {
  
    let stringArray = n.toString().split('');
    let digitsArray = stringArray.map(Number)
    let sum = 0;
      
      while(digitsArray.length >1){
        sum= digitsArray.reduce((a,b)=> a+b,0)
        stringArray = sum.toString().split('');
        digitsArray = stringArray.map(Number);
      }
      return sum;
    }