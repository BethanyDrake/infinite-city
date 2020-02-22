console.log("begin main.js");
const getPeople = () => {
  let resolve;
  const promise = new Promise((res, rej) => {resolve = res});
  const xmlHttp = new XMLHttpRequest();


  const hostname = '127.0.0.1';
  const port = 3001;
  const url = `http://${hostname}:${port}/people`



  xmlHttp.open( "GET", url, true ); // false for synchronous request
  xmlHttp.onload =  () => {
    const people = JSON.parse(xmlHttp.responseText);
    resolve(people);
  };
  xmlHttp.send();
  return promise;
}

const getRelationships = () => {
  let resolve;
  const promise = new Promise((res, rej) => {resolve = res});
  const xmlHttp = new XMLHttpRequest();


  const hostname = '127.0.0.1';
  const port = 3001;
  const url = `http://${hostname}:${port}/relationships`



  xmlHttp.open( "GET", url, true ); // false for synchronous request
  xmlHttp.onload =  () => {

    resolve(JSON.parse(xmlHttp.responseText));

  };

  xmlHttp.send();

  return promise;
}


const refresh = () => {
  console.log('getting people and relationships');
  getPeople().then((people) => {
    getRelationships().then(relationships => {

        console.log('got people and relationships');
        console.log({people, relationships});
        displayPeople(people, relationships);
    })
  })
}


const addPeople = () => {
  let resolve;
  const promise = new Promise((res, rej) => {resolve = res});
  const xmlHttp = new XMLHttpRequest();


  const hostname = '127.0.0.1';
  const port = 3001;
  const url = `http://${hostname}:${port}/people`



  xmlHttp.open( "POST", url, true ); // false for synchronous request
  xmlHttp.onload =  () => {
    resolve();
  };
  xmlHttp.send();

}

const interact = () => {
  let resolve;
  const promise = new Promise((res, rej) => {resolve = res});
  const xmlHttp = new XMLHttpRequest();


  const hostname = '127.0.0.1';
  const port = 3001;
  const url = `http://${hostname}:${port}/interact`



  xmlHttp.open( "POST", url, true ); // false for synchronous request
  xmlHttp.onload =  () => {
    resolve();
  };
  xmlHttp.send();

}
const deletePeople = () => {
  let resolve;
  const promise = new Promise((res, rej) => {resolve = res});
  const xmlHttp = new XMLHttpRequest();


  const hostname = '127.0.0.1';
  const port = 3001;
  const url = `http://${hostname}:${port}/people`

  xmlHttp.open( "DELETE", url, true ); // false for synchronous request
  xmlHttp.onload =  () => {
    resolve();
  };
  xmlHttp.send();
}

refresh();
