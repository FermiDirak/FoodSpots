const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

const app = express();

/* ------------------------- Setting up MiddleWare -------------------------- */

app.get('/hi', (req, res) => {
  res.send('hi');
});

/* ----------------------- Setting up React Front End ----------------------- */

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

/* ----------------------------- Exporting App ------------------------------ */

module.exports = app;