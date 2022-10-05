const express = require('express');



const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectionStringURI = `mongodb://127.0.0.1:27017/talkToMe`;

let db;

mongodb.connect(
    connectionStringURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        db = client.db();
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    });
