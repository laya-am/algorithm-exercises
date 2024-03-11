function getCount(str) {
    const vowels= ["a","e","i","o","u"];
    const filteredArray= [...str].filter(letter => vowels.includes(letter));
    const count = filteredArray.length
    return count;
  }