var fourOhFour = require(__dirname + "/fourOhFour");
var fs = require('fs');

var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};

Router.prototype.get = function(route, cb) {
  this.routes['GET'][route] = cb;
};

Router.prototype.post = function(route, cb) {
  this.routes['POST'][route] = cb;
};

Router.prototype.put = function(route, cb) {
  this.routes['PUT'][route] = cb;
};

Router.prototype.patch = function(route, cb) {
  this.routes['PATCH'][route] = cb;
};

Router.prototype.delete = function(route, cb) {
  this.routes['DELETE'][route] = cb;
};

Router.prototype.fourOhFour = function(req, res) {
  fourOhFour.fourOhFour(res);
};

Router.prototype.route = function(req, res) {
  (this.routes[req.method][req.url] || this.fourOhFour)(req, res)
};

Router.prototype.writeHeadHTML = function(res) {
  res.writeHead(202, {
    "Content-Type": "text/html"
  });
}

Router.prototype.writeHeadCSS = function(res) {
  res.writeHead(202, {
    "Content-Type": "text/css"
  });
}

Router.prototype.writeHeadPlain = function(res) {
  res.writeHead(202, {
    "Content-Type": "text/plain"
  });
}

Router.prototype.writeHeadJSON = function(res) {
  res.writeHead(202, {
    "Content-Type": "application/JSON"
  });
}

Router.prototype.writeSync = function(res, string) {
  res.write(fs.readFileSync(__dirname + '/../' + string));
}

Router.prototype.getBaseCss = function(req, res) {
  this.get('/base.css', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/css"});
    res.write(fs.readFileSync( __dirname + '/../public/base.css'));
  return res.end();
  });
}

Router.prototype.getFontsCss = function(req, res) {
  this.get('/fonts.css', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/css"});
    res.write(fs.readFileSync( __dirname + '/../public/fonts.css'));
  return res.end();
  });
}
