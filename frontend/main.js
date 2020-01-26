console.log("begin main.js");


const getPeople = () => {

  const xmlHttp = new XMLHttpRequest();


  const hostname = '127.0.0.1';
  const port = 3001;
  const url = `http://${hostname}:${port}/people`



  xmlHttp.open( "GET", url, true ); // false for synchronous request
  xmlHttp.onload =  () => {

    const people = JSON.parse(xmlHttp.responseText);
    displayPeople(people);

  };
  xmlHttp.send();
}


const addPeople = () => {
  const xmlHttp = new XMLHttpRequest();


  const hostname = '127.0.0.1';
  const port = 3001;
  const url = `http://${hostname}:${port}/people`



  xmlHttp.open( "POST", url, true ); // false for synchronous request
  xmlHttp.onload =  () => {
    const people = JSON.parse(xmlHttp.responseText);
    displayPeople(people);
  };
  xmlHttp.send();

}


const deletePeople = () => {
  const xmlHttp = new XMLHttpRequest();


  const hostname = '127.0.0.1';
  const port = 3001;
  const url = `http://${hostname}:${port}/people`

  xmlHttp.open( "DELETE", url, true ); // false for synchronous request
  xmlHttp.onload =  () => {
    const people = JSON.parse(xmlHttp.responseText);
    displayPeople(people);
  };
  xmlHttp.send();

}

getPeople();
