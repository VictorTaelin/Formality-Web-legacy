var parser = require('markdown-parse'); // Reads a markdown file
var fs = require('fs'); // Work with files
let {htmlToHs} = require("html-to-hyperscript"); // Transforms HTML into Hyperscript

// --- Auxiliars ---
var convert;
var content;
var htmlText = "";
var hsText = "";

// TODO: receive optional like tabSize and syntax
function convert(filePath) {
    // Receive properties
    convert = htmlToHs({tabSize: 2, syntax: "h"});
    content = fs.readFileSync(filePath, 'utf8')

    // TODO: deal with error
    parser(content, function(err, result){
        htmlText = result.html;
    })

    hsText = convert(htmlText.toString());

    return hsText
}

console.log(convert('./formality.md'));

  /**
   * TODO e obs:
   * - fazer o webpack funcionar
   * - o hyperscript pra link não funciona porque ele vem como:
   * h("a", {
          "attributes": {
            "href": "javascript/formality.js"
          }
        }, `<1k LOC`),

    e tem que ser: 
    h("a", {
        "href": "javascript/formality.js"
    }, `<1k LOC`),

   */