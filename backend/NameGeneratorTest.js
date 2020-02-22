const NameGenerator = require('./NameGenerator.js');


console.log("5 people names: ");
for (i = 0; i< 5; i++) {
  console.log(NameGenerator.generatePersonName());
}

console.log("5 suburb names: ");
for (i = 0; i< 5; i++) {
  console.log(NameGenerator.generateSuburbName());
}
