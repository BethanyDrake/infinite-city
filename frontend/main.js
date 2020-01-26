console.log("begin main.js");

var xmlHttp = new XMLHttpRequest();


const hostname = '127.0.0.1';
const port = 3001;
const url = `http://${hostname}:${port}/`



xmlHttp.open( "GET", url, true ); // false for synchronous request
xmlHttp.onload =  () => {
  document.getElementById("serverOutput").innerHTML = xmlHttp.responseText;
};
xmlHttp.send();
