const Person = require('./Person.js');
const Interaction = require('./Interaction.js');

const population = 10;




const generatePeople = (populationSize) => {
  const people = [];
  for (let i=0; i< population; i++) {
    people.push(Person.createPerson());
  }
  console.log("total population count: " + people.length);
  return people;
}
let people = generatePeople(population);

const initialiseRelationships = (people) => {
  const relationships = [];
  const population = people.length;
  for (let j=0; j< population-1; j++) {
    for (let k=j+1; k<population; k++) {
      relationships.push(Interaction.createRelationship(people[j], people[k]));
    }
  }
  console.log("total relationship count: " + relationships.length);
  return relationships;
}

let relationships = initialiseRelationships(people);




const numberOfInteractions = 10;

const interactABunch = (relationships, numberOfInteractions = 1) => {
  for (let i=0; i< numberOfInteractions; i++) {
    relationships.forEach(relationship => {
      Interaction.interact(relationship);
    })
  }
}

interactABunch(relationships, numberOfInteractions);






const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;



const server = http.createServer((req, res) => {
  console.log({
    url:
    req.url,
    method: req.method
  })
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  if (req.method === 'DELETE') {
    people = [];
    relationships = [];
    res.statusCode = 200;
    res.end(JSON.stringify(people));
    return;
  }

  if (req.method === 'POST') {
    people = generatePeople(10);
    relationships = initialiseRelationships(people);
    res.statusCode = 201;
    res.end(JSON.stringify(people));
    return;
  }

  switch(req.url) {
    case '/people':
      res.statusCode = 200;
      res.end(JSON.stringify(people));
      return
    case '/relationships':
      res.statusCode = 200;
      res.end(JSON.stringify(people));
      return

    case '/':
      res.statusCode = 200;
      res.end("Hi, I'm a server!");
      return

    default:
      res.statusCode = 404;
      res.end('you what?');
      return
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
