const mapsRoute = require('express').Router();
const googleMapsKey = require('./../keys').google_maps_api_key;

mapsRoute.get('/', (req, res) => {
  res.send('maps api online')
});

mapsRoute.get('/key', (req, res) => {
  res.send('heres the key ' + googleMapsKey);
});

module.exports = mapsRoute;