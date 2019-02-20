const Account = require('../../models/account/Account');

module.exports.createAccount =  async (data, cb) => {
	const {email, name, age} = data;
    await Account.findOne({email: email}, (err, found) => {
        if(found) return cb({err: "email already exists"});
        const account = new Account({email, name, age});
         account.save((err, success) => {
            if (err) return cb(err, null);
            return cb(null, success);
        });
    })
};