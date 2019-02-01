const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const controller = require('./controller');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => console.log(`app is running on port ${port}`));


massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => console.log(err));