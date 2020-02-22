const Person = require('./Person.js');
const Interaction = require('./Interaction.js');
const Location = require('./Location.js')
const Randomer = require('./Randomer.js')

const population = 10;


const city = Location.createCity(4);
console.log({city})

const generatePeople = (populationSize) => {
  const people = [];
  for (let i=0; i< population; i++) {
    people.push(Person.createPerson());
  }
  console.log("total population count: " + people.length);

  people.forEach(person => {
    console.log({Suburbs: city.subLocations})
    const suburb = Randomer.randomElement(city.subLocations);
    console.log ("i live in:", suburb );
    person.traits.location = suburb;
  })
  return people;
}
let people = []; //= generatePeople(population);

const initialiseRelationships = (people, existingPeople = []) => {
  const relationships = [];
  const population = people.length;
  for (let j=0; j< population-1; j++) {
    for (let k=j+1; k<population; k++) {
      relationships.push(Interaction.createRelationship(people[j], people[k]));
    }
  }


  existingPeople.forEach(existingPerson => {
    people.forEach(newPerson => {
      relationships.push(Interaction.createRelationship(existingPerson, newPerson));

    })


  })

  console.log("total relationship count: " + relationships.length);

  return relationships;
}


let relationships = []; // = initialiseRelationships(people);



const numberOfInteractions = 10;

const interactABunch = (numberOfInteractions = 1) => {
  console.log("interacting!")
  console.log(relationships.length)
  for (let i=0; i< numberOfInteractions; i++) {
    relationships.forEach(relationship => {
      Interaction.interact(relationship);
    })
  }
}

//interactABunch(relationships, numberOfInteractions);



const getPeopleAsJson = () => {
  return JSON.stringify(people.map(person => {
    return {
      ...person,
      traits: {
        ...person.traits,
        location: person.traits.location ? person.traits.location.name : "no location!?",
      }

    }
  }));
}

const getRelationshipsAsJson = () => {

  return JSON.stringify(relationships.map(relationship => ({
    ...relationship,
    people: relationship.people.map(person => person.traits.name)
  })))
}

const setPeople = (p) => {
  people = p;
}


const addPeople = () => {
  const newPeople = generatePeople(10);
  const newRelationships = initialiseRelationships(newPeople, people);
  people = [...people, ...newPeople];
  relationships = [...relationships, ...newRelationships];
}

const deleteEveryone = () => {
  people = [];
  relationships = [];
}

exports.generatePeople = generatePeople;
exports.people = people;
exports.relationships = relationships;
exports.interactABunch = interactABunch;
exports.initialiseRelationships = initialiseRelationships;
exports.getPeopleAsJson = getPeopleAsJson;
exports.setPeople = setPeople;
exports.getRelationshipsAsJson = getRelationshipsAsJson;
exports.deleteEveryone = deleteEveryone;
exports.addPeople = addPeople;
