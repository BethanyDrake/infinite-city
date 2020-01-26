const createPerson = () => {
  return {
    traits: {
      name: getRandomName(),
      socialness: randomNumber(10),
      intelligence: randomNumber(10),
      sportiness: randomNumber(10),
      romanticness: randomNumber(10),
      gender: getGender(),
      sexuality: getSexuality(),
    },
    status: {
      health: 2,
      happiness: 7,
    }
  }
}

const getSexuality = () => {
  const gayness = Math.random();

  if (gayness < 0.75) return 'super straight';
  if (gayness < 0.8) return 'mostly straight';
  if (gayness < 0.85) return 'bisexual';
  if (gayness < 0.90) return 'mostly gay';
  return 'super gay';
}

const getGender = () => {
  if (Math.random() < 0.5) {
    return 'F';
  }
  return 'M';
}

const randomNumber = (max) => {
    return Math.ceil(Math.random() * Math.floor(max));
}

const startConsonants = ['d', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'b', 'r', 's', 't', 'v', 'w', 'y', 'z', 'c',];
const vowels = ['a', 'e', 'i', 'o', 'ei', 'ai', 'u', 'au', 'ee', 'ae', 'oo', 'ou', 'ia'];
const endConsonants = ['d', 'ck', 'm', 'ff', 'w', 'll', 'p', 'g', 'n', 'p', 'b', 'r', 'ss', 't', 'w', 'x', 'z'];

const randomLetter = (letterList) => {
  return letterList[Math.floor(Math.random() * Math.floor(letterList.length))];
}

const startingSyllable = () => {
  return randomLetter(startConsonants) + randomLetter(vowels) + randomLetter(endConsonants);
}
const capitalise = (string) =>
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getLength = () => {
  return Math.ceil(Math.random() * Math.floor(3));
}
const randomLengthWord = () => {

  let word = '';
  const length = getLength();
  for (let i=0; i< length; i++) {
    word += startingSyllable();
  }
  return word;

}
const getRandomName = () => {
  const firstName = randomLengthWord();
  const lastName = randomLengthWord();

  return capitalise(firstName)+ ' ' + capitalise(lastName);
}

exports.createPerson = createPerson;
