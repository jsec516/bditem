var request = require('supertest');

describe('LoginController', function () {
  describe('#new()', function () {
    it('should redirect to /myaccount', function (done) {
      request(sails.hooks.http.app)
        .post('/signin')
        .send({email: 'jsec516@gmail.com', password: 'test1235'})
        .expect(302)
        .expect('location','/myaccount', done);
    });
  });
});
