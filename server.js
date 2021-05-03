const express = require('express')
const cors = require('cors'); // to access withou problms
const data = require('./client/src/data.json');
const app = express()
 app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello Worldddddd')
});
// app.get('/about', function (req, res) {
//     res.send('Hello World from about me')
//   });
app.listen(3001)