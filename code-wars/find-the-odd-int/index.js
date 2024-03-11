function findOdd(A) {
    A.sort((a,b)=> a-b);
    let numOfOccurance = 1;
   
    for (let i = 0; i< A.length ; i++){
      if(A[i] === A[i+1]){
        numOfOccurance++
      } else{
        if(numOfOccurance % 2 === 1){
          return A[i];
        }
        else{
          numOfOccurance = 1;
        }
      }
    }
  }