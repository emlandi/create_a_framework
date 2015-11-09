var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

require(__dirname + '/../server');
var router = require(__dirname + '/../lib/router');

describe('http server', function() {
  it('should respond to a GET request at route', function(done) {
    chai.request('localhost:3000')
    .get('/')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(202);
      done();
    });
  });
  it('should respond test the 404 file and recieve the error response', function(done) {
    chai.request('localhost:3000')
    .get('/fesfe')
    .end(function(err, res) {
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('Error 404: Page not found! Go try another page!');
      done();
    });
  });
  it('should see if the base.css is included', function(done) {
    chai.request('localhost:3000')
    .get('/base.css')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    });
  });
  it('should see if the fonts.css is included', function(done) {
    chai.request('localhost:3000')
    .get('/fonts.css')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    });
  });
});
