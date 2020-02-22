const NameGenerator = require('./NameGenerator.js');

const createPerson = () => {
  return {
    traits: {
      name: NameGenerator.generatePersonName(),
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

const randomNumber = (max) => {
    return Math.ceil(Math.random() * Math.floor(max));
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

exports.createPerson = createPerson;
