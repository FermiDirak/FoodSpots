const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

const app = express();

/* ------------------------- Setting up MiddleWare -------------------------- */

app.get('/hi', (req, res) => {
  res.send('hi');
});

/* ----------------------------- Exporting App ------------------------------ */

module.exports = app;