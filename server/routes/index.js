const router = require('express').Router();
const mapsRoute = require('./mapsRoute');

router.get('/', (req, res) => {
  res.send('api online');
});

router.use('/maps', mapsRoute);

module.exports = router;