const app = require('./app');
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
});