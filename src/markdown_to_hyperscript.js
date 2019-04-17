// var markdown = `
// ## titulo

// conteudo

// \`\`\`javascript
// function(x){return x}
// \`\`\`

// - teste

// - de

// - lista
// `;

var fs = require("fs");
var md2json = require("simple-markdown").defaultBlockParse;

var mdFile = fs.readFileSync('./markdown/test-template.md', 'utf8');
// var mdFile = `
// **bold text**

// *italicized text*

// > blockquote

// 1. First item
// 2. Second item
// 3. Third item

// - First item
// - Second item
// - Third item

// ---
// `

const json2h = (node) => {
  var str = "";
  const make = (lv, node) => {

    const text = (txt) => {
      str += txt;
    };

    const line = (lv, s) => {
      str += "\n";
      for (var i = 0; i < lv; ++i) {
        str += "  ";
      }
      str += s;
    };

    if (node instanceof Array) {
      // console.log(">> Node");
      // console.log(JSON.stringify(node, null, 2));
      line(lv, "[");
      for (var i = 0; i < node.length; ++i) {
        make(lv + 1, node[i]);
        text(i < node.length - 1 ? "," : "");
      };
      line(lv, "]");
    } else {
      switch (node.type) {

        case "newline":
          line(lv, "h('br')");
          break;

        case "paragraph":
          line(lv, "h('p',");
          
          // var auxTitle = 1;
          // var content = "";
          // for (var i = 0; i < node.content.length; ++i) {
          //   if (node.content[i].content.includes("#")) {
          //     var content = node.content[i].content.split("#");
          //     if (content[1] !== '') { // last use of #, has the content of the title
          //       console.log(">>> content[1] !== vazio "+i);
          //       console.log(content);
          //       console.log(content[1]);
          //       console.log(content[1].split("\n"));
          //       var hs = "h('h"+auxTitle+"', '"+content[1].split("\n")[0]+"'),";
          //       line(lv, hs);
          //       auxTitle = 1;
          //       make(lv+1, "");
          //     } else {
          //       auxTitle ++;
          //     }
          //   } else {
          //     make(lv+1, node.content);
          //   }  
          // }

          make(lv+1, node.content);
          line(lv, ")");
          break;

        case "text":
          line(lv, JSON.stringify(node.content));
          break;

        case "heading":
          line(lv, "h('h" + node.level + "',");
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        case "list":
          line(lv, "h(" + (node.ordered ? "'ol'" : "'ul'") + ", [");
          for (var i = 0; i < node.items.length; ++i) {
            line(lv+1, "h('li',");
            make(lv+2, node.items[i]);
            line(lv+1, ")");
            text(",");
          }
          line(lv, "])");
          break;

        case "codeBlock":
          line(lv, "h('pre', [");
          line(lv+1, "h('code.bash', ");
          line(lv+2, JSON.stringify(node.content));
          line(lv+1, ")");
          line(lv, "])");
          break;

        case "strong":
          line(lv, "h('b', ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        case "em": 
          line(lv, "h('i', ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        case "blockQuote":
          line(lv, "h('blockquote', ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        case "inlineCode":
          line(lv, "h('code', "+node.content+")");
          break;

        case "hr":
          line(lv, "h('hr')");
          break;

        case "link":
          line(lv, "h('a', {href: '"+node.target+"'}, ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        

        default:
          line(lv, "h('div', 'UNKNOWN_TYPE: " + node.type + "')");
          break;
      }
    }
  };
  make(0, node);
  return str;
};

// console.log(":: MARKDOWN\n");
// console.log(markdown);
// console.log("");

// console.log(":: JSON\n");
// console.log(JSON.stringify(md2json(mdFile), null, 2));
// console.log("");

console.log("---------------------- OUTPUT");
console.log(json2h(md2json(mdFile), null, 2));

// console.log(":: HYPERSCRIPT\n");
// console.log(json2h(md2json(mdFile), null, 2));
// console.log("");
