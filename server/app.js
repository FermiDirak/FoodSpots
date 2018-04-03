const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

const routes = require('./routes');

const app = express();

app.use('/api/v1', routes);

module.exports = app;