const Main = require('./Main.js')

console.log("main test");
const people = Main.generatePeople(3);
Main.setPeople(people);
console.log({peopleAsJson: Main.getPeopleAsJson()});
