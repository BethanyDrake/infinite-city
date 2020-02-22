const randomNumber = (max) => {
    return Math.ceil(Math.random() * Math.floor(max));
}

const randomElement = (array) => {

  const i = Math.floor(Math.random() * array.length);
  return array[i];
}

exports.randomElement = randomElement;
