const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/talkToMe', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;