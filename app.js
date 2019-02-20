const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./api/account/account.routes')(app);
require('./api/notification/notification.routes')(app);

mongoose.connect('mongodb://localhost:27017/codeTest', {
    autoReconnect: true,
    reconnectTries: 60,
    reconnectInterval: 10000,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(
    () => { console.log("mongo connected"); },
    err => { console.log(err); }
);

app.listen(3000, () => console.log(`Listening on port 3000`));
module.exports = app;