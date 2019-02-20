const Notification = require('../../models/notification/Notification');

module.exports.createNotification = async (data, cb) => {
    const { accountId, name, color } = data;
    const notification = new Notification({ accountId, name, color });
    await notification.save((err, success) => {
        cb(null, success);
    })
};

module.exports.getNotificationsByAccount = async (id, cb) => {
    await Notification.find({ accountId: id })
    .populate({ path: 'accountId' })
    .exec((err, success) => {
        cb(null, success);
    })
}