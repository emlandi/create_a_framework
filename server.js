var http = require('http');
var fs = require('fs');

var Router = require(__dirname + '/lib/router');
var myRouter = new Router();

myRouter.get('/', function(req, res) {
  myRouter.writeHeadHTML(res);
  myRouter.writeSync(res,'/public/index.html');
  myRouter.getBaseCss(req, res);
  myRouter.getFontsCss(req, res);
  return res.end();
});

// myRouter.get('/fonts/icomoon.eot', function(req, res) {
//   res.writeHead(200, {"Content-Type": "embedded-opentype"});
//   myRouter.writeSync(res, '/fonts/icomoon.eot');
//   return res.end();
// });
// myRouter.get('/fonts/icomoon.svg', function(req, res) {
//   res.writeHead(200, {"Content-Type": "svg"});
//   myRouter.writeSync(res, '/fonts/icomoon.svg');
//   return res.end();
// });
// myRouter.get('/fonts/icomoon.ttf', function(req, res) {
//   res.writeHead(200, {"Content-Type": "truetype"});
//   myRouter.writeSync(res, '/fonts/icomoon.ttf');
//   return res.end();
// });
// myRouter.get('/fonts/icomoon.woff', function(req, res) {
//   res.writeHead(200, {"Content-Type": "woff"});
//   myRouter.writeSync(res, '/fonts/icomoon.woff');
//   return res.end();
// });

// myRouter.get('/secret', function(req, res) {
//   myRouter.writeHeadPlain(res);
//   res.write('You found a secret page. Wahahahaha.');
//   res.end();
// });

http.createServer(function(req, res) {
    myRouter.route(req, res);
  }).listen(3000, function() {
    console.log('Server up.');
});
