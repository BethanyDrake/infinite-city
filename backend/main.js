const Person = require('./Person.js');
const Interaction = require('./Interaction.js');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



const population = 2;
const people = [];

const relationships = [];
for (let i=0; i< population; i++) {
  people.push(Person.createPerson());
}
console.log("total population count: " + people.length);

for (let j=0; j< population-1; j++) {
  for (let k=j+1; k<population; k++) {
    relationships.push(Interaction.createRelationship(people[j], people[k]));
    console.log(j, k);
  }
}

console.log("total relationship count: " + relationships.length);

const numberOfInteractions = 10;

for (let i=0; i< numberOfInteractions; i++) {
  console.log('******')
  relationships.forEach(relationship => {
    Interaction.interact(relationship);
    console.log(relationship.people[0].traits.name, relationship.people[1].traits.name, relationship.status.friendship);
  })

  console.log('******')
}
