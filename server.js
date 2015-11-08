var http = require('http');
var fs = require('fs');
var Router = require(__dirname + '/lib/router');
var fourOhFour = require(__dirname + "/lib/fourOhFour");

var myRouter = new Router();
myRouter.get('/awesome', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('wow, so awesome, such router');
  res.end();
});

myRouter.get('/', function(req, res) {
  res.writeHead(200, {
      'Content-Type': 'text/html'
  });
  res.write(fs.readFileSync(__dirname + '/lib/index.html'));
  return res.end();
});


http.createServer(function(req, res) {
    myRouter.route(req, res);
  }).listen(8000, function() {
    console.log('server with router');
});

var server = http.createServer(function(req, res) {

  //style.css
  if (req.url === '/style.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
    res.write(fs.readFileSync(__dirname + '/lib/style.css'));
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
    fourOhFour.fourOhFour(res);
  }
});

server.listen('3000', function() {
  console.log('Server is up.');
});
