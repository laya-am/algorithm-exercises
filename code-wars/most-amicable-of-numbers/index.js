function amicableNumbers(num1, num2) {
  // find proper divisors of each num
  function findSum(givenNum){
  properDivisors=[];
  for (i=1; i<givenNum; i++){
    if(givenNum % i === 0){
      properDivisors.push(i)
    }
  }
  // find the sum
    const sum= properDivisors.reduce((sum, currentValue)=> sum+currentValue, 0)
    return sum
    }
  const num1sum= findSum(num1)
  const num2sum= findSum(num2)
  // check if it equals the other num
  if(num1sum ===num2 && num2sum ===num1){
    return true
  }  return false
}