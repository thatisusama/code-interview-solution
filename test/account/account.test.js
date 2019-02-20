const chai = require('chai');
chai.use(require('chai-http'));
const expect = require('chai').expect;
let should = chai.should();
const app = require('../../app');

const Account = require('../../models/account/Account');

describe('POST /account/create', () => {

    beforeEach(async() => {
        await Account.deleteMany();
    });

    it('should add account to database', (done) => {

        const data = {
            email: 'test1@gmail.com',
            name: 'Testo',
            age: 56
        };
        chai.request(app)
            .post('/account/create')
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

});