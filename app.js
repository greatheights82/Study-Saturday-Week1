// Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Students = require('./route/student.js');

// Init App
const app = express();

// Basic Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/students', Students);

// Listen on server

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
