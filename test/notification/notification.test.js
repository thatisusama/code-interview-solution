const chai = require('chai');
chai.use(require('chai-http'));
const expect = require('chai').expect;
let should = chai.should();
const app = require('../../app');

const Notification = require('../../models/notification/Notification');

describe('POST /notifications', () => {

    beforeEach(async() => {
        await Notification.deleteMany();
    });

    it('should add notifications to database', (done) => {

        const data = {
            accountId: '5c6cf46ffd0851422c7a09bd',
            name: 'Testo',
            color: 'yellow'
        };
        chai.request(app)
            .post('/notifications')
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it('should return notifications for the user', (done) => {
        chai.request(app)
            .get('/notifications/5c6cf46ffd0851422c7a09bd')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

});