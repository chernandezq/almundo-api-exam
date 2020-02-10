let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('Get /Hotels: ', () => {
	it('Get all Hotels', done => {
		chai.request(url)
			.get('/api/hotels')
			.end(function(err, res) {
				console.log(res.body);
				expect(res).to.have.status(200);
				expect(res.body).to.be.an('array');
				done();
			});
	});
});
