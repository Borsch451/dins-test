var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);
chai.use(require('chai-like'));
chai.use(require('chai-things'));


/* 
testing https://jsonplaceholder.typicode.com
JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.
You can refer to the website for the API documentation and examples.
*/

// test example for GET	/posts
testCase('/GET posts with userId and title', function(){
      it('it should GET all the posts with userId=1 and title=qui est esse', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=1&title=qui est esse')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array').that.contains.something.like({userId:1, title:'qui est esse'});
                done();
            });
      });
  });