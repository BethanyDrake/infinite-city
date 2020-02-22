const http = require('http');
const Main = require('./Main.js');

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
    Main.deleteEveryone();

    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method === 'POST') {
    switch(req.url) {
      case '/people':
        Main.addPeople();
        res.statusCode = 201;
        res.end();
        return;
      case '/interact':
        res.statusCode = 200;
        Main.interactABunch(1);
        res.end();
        return
      default:
        res.statusCode = 404;
        res.end('did you REALLT mean to post that?');
        return
      }
  }

  switch(req.url) {
    case '/people':
      res.statusCode = 200;
      res.end(Main.getPeopleAsJson());
      return
    case '/relationships':
      res.statusCode = 200;
      res.end(Main.getRelationshipsAsJson());
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
