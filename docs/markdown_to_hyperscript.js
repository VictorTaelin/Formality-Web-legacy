var markdown = `
## titulo

conteudo

\`\`\`javascript
function(x){return x}
\`\`\`

- teste

- de

- lista
`;

var fs = require("fs");
var md2json = require("simple-markdown").defaultBlockParse;

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

        default:
          line(lv, "h('div', 'UNKNOWN_TYPE: " + node.type + "')");
          break;
      }
    }
  };
  make(0, node);
  return str;
};

console.log(":: MARKDOWN\n");
console.log(markdown);
console.log("");

console.log(":: JSON\n");
console.log(JSON.stringify(md2json(markdown), null, 2));
console.log("");

console.log(":: HYPERSCRIPT\n");
console.log(json2h(md2json(markdown), null, 2));
console.log("");
