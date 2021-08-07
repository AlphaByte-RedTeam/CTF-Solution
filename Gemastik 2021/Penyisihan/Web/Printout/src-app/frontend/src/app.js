const bodyParser = require('body-parser');
const express = require('express');
const index = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', index)
app.listen(3000);

console.log('Listening on Port 3000')