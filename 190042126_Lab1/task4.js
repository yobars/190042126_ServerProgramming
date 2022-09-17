const http = require('http');
const url = require('url');

var server = http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('query parameters');
  });

  server.listen(8080);