const chai = require('chai');
const chaiHttp = require('chai-http');
const apiKey = '&apikey=f1887e96';
const { expect } = chai;

chai.use(chaiHttp);

describe('Showing', () => {
    describe('GET /showing', function() {
        it('should return an array of currently showing movies', (done) => {
            chai.request('http://www.omdbapi.com')
            .get('/?s=harry+potter' + apiKey)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res).to.be.an('object');
                done();
            })
        })
    });
});

