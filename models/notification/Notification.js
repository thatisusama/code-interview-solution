const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
	accountId: {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
	name: {type: String},
	color: {type: String},

}, {timestamps: true});

module.exports = mongoose.model('Notification', Notification);
