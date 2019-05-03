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

app.get('/*', function (req, res) {
  console.log(req.path);
})

// ----- Main pages -----
app.get('/documentation', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});
app.get('/home', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});
app.get('/tryIt', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});
app.get('/overview', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});

// ----- Home / Why Content -----
app.get('/math-proof', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});
app.get('/massive-paralelism', function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
});

// ----- Overview ----- NOT WORKING
app.get('/overview/*', function (req, res, next){
  var param = req.param[0];
  // console.log(req)
  // console.log("Access on overview! With param:"+param);
  // if(!param.includes("src/images")) {
    // console.log("param does not ask for images")
    res.sendFile(path.join(__dirname, "..", "docs", "index.html"));
  // }
});

// app.get('/overview/getting-started', function (req, res, next){
//   res.sendFile(path.join(__dirname, "..", "docs", "index.html"));
// });

// app.get('/overview/FAQ', function (req, res, next) {
//   res.sendFile(path.join(__dirname, "..", "docs", "index.html")); 
// });

app.get('/images/*', function (req, res, next) {
  console.log("Requesting image in: "+path.join(__dirname, "..", "docs", "src", req.url));
  console.log("Dirname is: "+__dirname)
  res.sendFile(path.join(__dirname, "..", "docs", "src", req.url)); 
});

// TODO:
// - fazer todas as rotas cairem num (/*) e aí dentro dele tratar o que foi chamado 

//app.use(express.static(path.join(__dirname, "..", "docs"))); //Serves resources from public folder

app.listen(port, () => console.log(`Example app listening on port ${port}!`));