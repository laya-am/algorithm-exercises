function disemvowel(str) {
  const vowels= ["a", "e", "i", "o", "u"]
  const arrayWithoutVowels= [...str].filter(letter => !vowels.includes(letter.toLowerCase()));
  const result= arrayWithoutVowels.join("");
  return result;
}