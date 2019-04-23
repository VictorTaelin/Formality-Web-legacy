const express = require('express');
const app = express();
const port = 3004;
var path = require('path');

var router = express.Router();

app.get('/oi', (req, res) => res.send('Hello World!'));

// app.get('**', (req, res) => {
//   console.log(">>> I'm **! And the path is: ", path.join(__dirname));
//   // res.sendFile(path.join(__dirname,'index.html'));
//   app.use(express.static((__dirname)))
// });

// app.use(express.static(path.join(__dirname, "..", "docs"))); //Serves resources from public folder

app.get('/specification', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
  console.log("/specification case");
});

app.get('/home', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
  console.log("/home case");
});

app.get('/tryIt', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
  console.log("/tryIt case");
});


app.use(express.static(path.join(__dirname, "..", "docs"))); //Serves resources from public folder

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
