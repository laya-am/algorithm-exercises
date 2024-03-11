function squareDigits(num){

    const squaredArray = String(num).split("").map(digit => Math.pow(digit,2));
    const squaredConcat = squaredArray.join("")

  // use unary operator (+) to convert a string to a number
    return +squaredConcat;
  }