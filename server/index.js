const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;

/* ---------------------- Setting up React Front End ----------------------- */

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

/* -------------------------- Initializing Server -------------------------- */

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});