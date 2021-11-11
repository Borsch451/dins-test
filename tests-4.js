var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


/* 
testing https://jsonplaceholder.typicode.com
JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.
You can refer to the website for the API documentation and examples.
*/

// test example for GET	/posts
testCase('/GET posts with an empty userId and filled title', function(){
      it('it should GET an empty array', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=&title=qui est esse')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.have.length(0);
                done();
            });
      });
  });