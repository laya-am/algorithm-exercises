function alphabetPosition(text) {
    return text.toLowerCase()
    .split("")
    .map((char) => char.charCodeAt(0)-96)
    .filter(val => val >0 && val< 27)
    .join(" ")
     
    }