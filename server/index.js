const express = require('express');
const path = require('path');
const app = require('./app');
const port = process.env.port || 5000;

// app.use(express.static(path.resolve(__dirname, '../client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
});