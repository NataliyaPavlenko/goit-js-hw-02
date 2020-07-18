/*Напиши фукцнию findLongestWord(string),
которая принимает параметром произвольную строку
(в строке будут только слова и пробелы)
и возвращает самое длинное слово в этой строке.*/

const findLongestWord = function (string) {
  const wordsArray = string.split(" ");

  let wordLength = wordsArray[0];

  for (let i = 1; i < wordsArray.length; i += 1) {
    if (wordLength.length < wordsArray[i].length) {
      wordLength = wordsArray[i];
    }
  }
  return wordLength;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
