
const getRelationshipsForPerson = (person, allRelationships) => {

  console.log({person, allRelationships});
  return allRelationships.filter(relationship => {
    console.log("aaaaa",{relationship});

    return relationship.people[0] === person.traits.name ||
    relationship.people[1] === person.traits.name
  })
}

getNamesOfFriends = (person, relationships) => {
  return getRelationshipsForPerson(person, relationships).filter(relationship => {

    return relationship.status.friendship > 3
  }).map(relationship => {
    return relationship.people[0] === person.traits.name ? relationship.people[1]
      :relationship.people[0]
  })
}

const displayPeople = (people, relationships) => {

console.log("displaying people");

  let tableHtml = '<table>';
  const colHeaders = ['name', 'gender', 'location', 'happiness', 'friends'];

  let headerRow = '<thead>';
  colHeaders.forEach(header => {
    headerRow += '<th>' + header + '</th>'
  })
  headerRow += '</thead>'
  tableHtml += headerRow;


  people.forEach(person => {

    let personRow = '<tr>';
    personRow += '<td>' + person.traits.name + '</td>'
    personRow += '<td>' + person.traits.gender + '</td>'
    personRow += '<td>' + person.traits.location + '</td>'
    personRow += '<td>' + person.status.happiness + '</td>'
    personRow += '<td>' + JSON.stringify(getNamesOfFriends(person, relationships))+ '</td>'
    personRow += '</tr>';

    tableHtml+= personRow;
  })

  tableHtml += '</table>'


  document.getElementById("serverOutput").innerHTML = tableHtml;
}
