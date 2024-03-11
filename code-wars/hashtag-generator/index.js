function generateHashtag (str) {
    if(str.length ===0 || !str.replace(/\s/g, '').length) return false;
   
    const wordsArray= str.split(" ");
    console.log("wordsArray", wordsArray)
    
    const capitalisedArray= wordsArray.map(word =>
    {if (word.length !== 0) {
         return word.substr(0, 1).toUpperCase() + word.substr(1, word.length-1)
    }
    })
    
    console.log(capitalisedArray)
    
    const result= "#" + capitalisedArray.join("");
    console.log(result)
    
    return result
  }