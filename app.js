const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('My first Node.js backend is working!!!!');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});


const add = require('./math')

const result = add(10, 20);

console.log(result);
