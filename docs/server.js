const express = require('express');
const app = express();
const port = 3004;
var path = require('path');

var router = express.Router();

app.get('/oi', (req, res) => res.send('Hello World!'));

app.get('/specification', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});

app.get('/home', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});

app.get('/tryIt', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});

app.get('/math-proof', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});

app.get('/massive-paralelism', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});

app.use(express.static(path.join(__dirname, "..", "docs"))); //Serves resources from public folder

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
