var http = require('http');
var fs = require('fs');

var Router = require(__dirname + '/lib/router');
var myRouter = new Router();

myRouter.get('/', function(req, res) {
  myRouter.writeHeadHTML(res);
  res.write(fs.readFileSync(__dirname + '/public/index.html'));
  return res.end();
});

myRouter.get('/base.css', function(req, res) {
  myRouter.writeHeadCSS(res);
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
