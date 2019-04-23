const express = require('express');
const app = express();
const port = 3004;
var path = require('path');

var router = express.Router();

app.get('/oi', (req, res) => res.send('Hello World!'));

// app.get('**', (req, res) => {
//   console.log(">>> I'm **!");
//   express.static(path.join(__dirname, "..", "docs"));
// });

// app.use(express.static(path.join(__dirname, "..", "docs"))); //Serves resources from public folder

app.get('/specification', function (req, res, next) {
  // express.static(path.join(__dirname, "..", "docs"));

  console.log("/specification case");
});

app.use(express.static(path.join(__dirname, "..", "docs"))); //Serves resources from public folder

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
