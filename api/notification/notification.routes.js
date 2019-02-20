const Notification = require('./notification.controller');

module.exports = (app) => {
    app.post('/notifications', (req, res) => {
        Notification.createNotification(req.body, (err, success) => {
            if(err) return res.status(400).json(err);
            return res.json(success);
        })
    })

    app.get('/notifications/:accountId', (req, res) => {
        Notification.getNotificationsByAccount(req.params.accountId, (err, success) => {
            if(err) return res.status(400).json(err);
            return res.json(success);
        })
    })
}