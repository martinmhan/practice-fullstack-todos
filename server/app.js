const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes.js');
const app = express();

app.use(morgan('dev')); //logging middleware
app.use(parser.json()); //parsing middleware
app.use(parser.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, '../client'))); // serve client files
app.use(router); // use imported router

module.exports = app;