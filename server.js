const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const db = require('./config/connection');

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
    });
});