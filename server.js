var http = require('http');
var fs = require('fs');

var Router = require(__dirname + '/lib/router');
var myRouter = new Router();

//these next 4 blocks pull in HTML & CSS Reset, Fonts & Base
myRouter.get('/', function(req, res) {
  myRouter.writeHeadHTML(res);
  myRouter.writeSync(res,'/public/index.html');
  return res.end();
});

myRouter.get('/reset.css', function(req, res) {
  myRouter.writeHeadCSS(res);
  myRouter.writeSync(res,'/public/reset.css');
  return res.end();
});

myRouter.get('/fonts.css', function(req, res) {
  myRouter.writeHeadCSS(res);
  myRouter.writeSync(res,'/public/fonts.css');
  return res.end();
});

myRouter.get('/base.css', function(req, res) {
  myRouter.writeHeadCSS(res);
  myRouter.writeSync(res,'/public/base.css');
  return res.end();
});

//this uses writeHeadPlain on /secret to display a message
myRouter.get('/secret', function(req, res) {
  myRouter.writeHeadPlain(res);
  res.write('You found a secret page. Wahahahaha.');
  res.end();
});

//this creates the router and has it listen on port 3000. it pulls in one of the methods (get, post, put, patch or delete) or the 404.
http.createServer(function(req, res) {
    myRouter.route(req, res);
  }).listen(3000, function() {
    console.log('Server up.');
});
