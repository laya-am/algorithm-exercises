function pigIt(str){
  //split words
  //access first letter, remove it from beginning and push it to end
  // push ay
  //join words
  const wordByWordArray = str.split(" ");
  const resultArray = wordByWordArray.map(word => {
    if (word.match(/[.,:!?]/)){ return word};
    const firstLetter= word[0];
    return word.substr(1) + (firstLetter) + ("ay")
  })
  const result = resultArray.join(" ")
  return result;
}