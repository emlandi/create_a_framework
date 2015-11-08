var http = require('http');
var fs = require('fs');
var fourOhFour = require(__dirname + "/lib/fourOhFour");

var Router = require(__dirname + '/lib/router');
var myRouter = new Router();

myRouter.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(fs.readFileSync(__dirname + '/public/index.html'));
  return res.end();
});

myRouter.get('/base.css', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/css'});
  res.write(fs.readFileSync(__dirname + '/public/base.css'));
  return res.end();
});

// myRouter.get('/secret', function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('You found a secret page. Wahahahaha.');
//   res.end();
// });

http.createServer(function(req, res) {
    myRouter.route(req, res);
  }).listen(3000, function() {
    console.log('Server up.');
});
