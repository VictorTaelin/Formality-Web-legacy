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
  console.log("/*...")
  console.log("Req path: "+req.path);
  var image = req.path.split("/");

  if (image.includes("images")) {
    console.log("Req path: "+req.path)
    console.log("\nInclude image: "+image);
    var imagePath = path.join(__dirname, "..",  "docs", "src", "images", image[image.length - 1]);

    console.log("1.Requesting image in: "+imagePath);
    res.sendFile(imagePath); 

  } else {
    res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
  }

})

app.get('/images/*', function (req, res, next) {
  console.log("!!!!! 2.Requesting image in: "+path.join(__dirname, "..", "docs", req.url));
  console.log("Dirname is: "+__dirname)
  console.log("Image url: "+req.url)
  res.sendFile(path.join(__dirname, "..", "docs", req.url)); 
});

app.get('/src/images/*', function (req, res, next) {
  console.log("! 3.Requesting image in: "+path.join(__dirname, "..", "docs", req.url));
  console.log("Dirname is: "+__dirname)
  console.log("Image url: "+req.url)
  res.sendFile(path.join(__dirname, "..", "docs", req.url)); 
});

// TODO:
// - fazer todas as rotas cairem num (/*) e aí dentro dele tratar o que foi chamado 

//app.use(express.static(path.join(__dirname, "..", "docs"))); //Serves resources from public folder

app.listen(port, () => console.log(`Example app listening on port ${port}!`));