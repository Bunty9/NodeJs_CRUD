// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007

// Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
// Everyone is permitted to copy and distribute verbatim copies
// of this license document, but changing it is not allowed.

//      Preamble

// The GNU General Public License is a free, copyleft license for
// software and other kinds of works.



const express = require('express')
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoConnect = require('./databaseAuth/mongoConnect');

// Create the express app
const app = express()
const port = process.env.PORT || 5000
mongoConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Routes and middleware
app.use('/api',routes);


// Error handlers
app.use(function fourOhFourHandler (req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send()
})

// Start server
app.listen(port, function (err) {
  if (err) {
    return console.error(err)
  }
  console.log(`Server Started at :${port}`)
})
