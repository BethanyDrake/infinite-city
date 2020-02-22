const Randomer = require('./Randomer.js');

const startConsonants = ['d', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'b', 'r', 's', 't', 'v', 'w', 'y', 'z', 'c',];
const vowels = ['a', 'e', 'i', 'o', 'ei', 'ai', 'u', 'au', 'ee', 'ae', 'oo', 'ou', 'ia'];
const endConsonants = ['d', 'ck', 'm', 'ff', 'w', 'll', 'p', 'g', 'n', 'p', 'b', 'r', 'ss', 't', 'w', 'x', 'z'];


const randomLetter = (letterList) => {
  return letterList[Math.floor(Math.random() * Math.floor(letterList.length))];
}
const startingSyllable = () => {
  return randomLetter(startConsonants) + randomLetter(vowels) + randomLetter(endConsonants);
}

const randomWord = (length) => {
  let word = '';
  for (let i=0; i< length; i++) {
    word += startingSyllable();
  }
  return word;
}


const randomLengthWord = () => {
  const length = Math.ceil(Math.random() * Math.floor(3));
  return randomWord(length);
}


const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const generatePersonName = () => {
  const firstName = randomLengthWord();
  const lastName = randomLengthWord();

  return capitalise(firstName)+ ' ' + capitalise(lastName);
}

const suburbSuffixes = ['bury', 'borough', 'by', 'cester', 'ford', 'ham', 'mouth', 'stead', 'ton', 'worth', '']
const generateSuburbName = () => {

  const length = Math.random() < 0.7 ? 1 : 2;
  const suffix = Randomer.randomElement(suburbSuffixes);
  return capitalise(randomWord(length) + suffix)

}


exports.generatePersonName = generatePersonName;
exports.generateSuburbName = generateSuburbName;
