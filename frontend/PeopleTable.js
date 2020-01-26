const displayPeople = (people) => {

console.log("displaying people");

  let tableHtml = '<table>';
  const colHeaders = ['name', 'gender', 'happiness'];

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
    personRow += '<td>' + person.status.happiness + '</td>'
    personRow += '</tr>';

    tableHtml+= personRow;
  })

  tableHtml += '</table>'


  document.getElementById("serverOutput").innerHTML = tableHtml;



}
