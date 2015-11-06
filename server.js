var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  //index.html
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(fs.readFileSync(__dirname + '/public/index.html'));
    return res.end();
  }
  //style.css
  else if (req.url === '/style.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
    res.write(fs.readFileSync(__dirname + '/public/style.css'));
    return res.end();
  }
  //greet - POST
  else if (req.url === '/greet' && req.method === 'POST') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    req.on('data', function(data) {
      var body = JSON.parse(data.toString());
      res.write(JSON.stringify(body));
      res.end();
    });
  }
  //greet/name - GET
  else if (req.url.split('/greet/')[1] && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.write(JSON.stringify({greeting:'hello ' + req.url.split('/greet/')[1]}));
    res.end();
  }
  //other - 404
  else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.write('404 - Page cannot be found!');
    res.end();
  }
});

server.listen('3000', function() {
  console.log('Server is up.');
});
