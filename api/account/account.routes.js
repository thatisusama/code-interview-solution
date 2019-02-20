const Account = require('./account.controller');

module.exports = (app) => {
    app.post('/account/create', (req, res) => {
        Account.createAccount(req.body, (err, success) => {
            if(err) return res.status(400).json(err);
            return res.json(success);
        })
    })
}