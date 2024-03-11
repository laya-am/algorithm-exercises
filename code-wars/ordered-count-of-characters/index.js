
//solution 1
const orderedCount = function (text) {
    const charsMap = new Map();
    for(let i = 0 ; i < text.length ; i++){
        // if the key doesn't exist in map, add it with value 1
        // if it exists, increment by 1
      charsMap.set(text[i], (charsMap.get(text[i]) ?? 0) + 1)
    }
    
    let result= []
    for(entry of charsMap.entries()){
      result.push(entry)
    }
    return result
  }

//solution 2
// const orderedCount = function (text) {
//     return [...new Set(text)].map(val => [val, text.split(val).length -1 ])
// }