function spinWords(string){
    const arrayOfWords = string.split(" ");
    const result = arrayOfWords.map(word => {
      return (word.length > 4) ? [...word].reverse().join("") : word 
    })
    return result.join(" ")
  }