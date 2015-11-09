var http = require('http');
var fs = require('fs');

var Router = require(__dirname + '/lib/router');
var myRouter = new Router();

myRouter.get('/', function(req, res) {
  myRouter.writeHeadHTML(res);
  myRouter.writeSync(res,'/public/index.html');
  return res.end();
});

myRouter.get('/base.css', function(req, res) {
  myRouter.writeHeadCSS(res);
  myRouter.writeSync(res, '/public/base.css');
  return res.end();
});
myRouter.get('/fonts.css', function(req, res) {
  myRouter.writeHeadCSS(res);
  myRouter.writeSync(res, '/public/fonts.css');
  return res.end();
});

myRouter.get('/secret', function(req, res) {
  myRouter.writeHeadPlain(res);
  res.write('You found a secret page. Wahahahaha.');
  res.end();
});

http.createServer(function(req, res) {
    myRouter.route(req, res);
  }).listen(3000, function() {
    console.log('Server up.');
});
