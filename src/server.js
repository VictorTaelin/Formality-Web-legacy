const express = require('express');
const app = express();
const port = 3004;
var path = require('path');

var router = express.Router();

app.get('/oi', (req, res) => res.send('Hello World!'));

// Temporary used to deal with url like overview/FAQ, overview/examples
app.get('/*index.js', function (req, res, next) {
    res.sendFile(path.join(__dirname, "..", "docs", "index.js"));
});

app.get('/*', function (req, res, next) {
  var image = req.path.split("/");

  if (image.includes("images")) {
    var imagePath = path.join(__dirname, "..",  "docs", "src", "images", image[image.length - 1]);
    res.sendFile(imagePath); 
  } else {
    res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));