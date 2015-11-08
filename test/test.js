var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

require(__dirname + '/../server');

describe('http server', function() {
  it('should respond to a GET request to /greet', function(done) {
    chai.request('localhost:3000')
    .get('/')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('test');
      done();
    });
  });
});
