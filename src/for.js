f = require("formality-lang");

// retorna um objeto do tipo {nome: termo, ...}
var defs = f.parse(`

  .ID
  : {x : Type} Type
  = [x] x

  . main 
    (ID Type)

`); 

var main_norm = f.norm(f.Ref("main"), defs); // retorna um termo (normal, ou seja, o run)
var main_type = f.infer(f.Ref("main"), defs); // retorna um termo (tipo, ou seja, o check)

console.log(JSON.stringify(defs, null, 2))
console.log(f.show(defs.main))
console.log(f.show(main_norm))
console.log(f.show(main_type))