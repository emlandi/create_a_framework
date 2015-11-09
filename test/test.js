var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

require(__dirname + '/../server');
var fourOhFour = require(__dirname + "/../lib/fourOhFour");

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

});
