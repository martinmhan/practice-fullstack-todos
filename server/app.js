const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api', router);

module.exports = app;