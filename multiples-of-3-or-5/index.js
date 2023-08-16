function solution(number){
    // iterate from 0 to number and if divisable by 5 OR 3, add to allDividants array
    // reduce to have the sum
    if(number<= 0){
      return 0
    }
    const allDividants = [];
    for (let i = 1; i < number; i++){
      if (i % 3 === 0){
        allDividants.push(i)
      }else if(i % 5 === 0){
        allDividants.push(i)
    }
  }
    const sum= allDividants.reduce((a,b) => a+b, 0)
    return sum
    }