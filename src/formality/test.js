const f = require ("./formality0");

const code = `. Nat
: Type
= $self
  {-P : {:Nat} Type}
  {s : ! {-n : Nat} {h : (P n)} (P (succ n))}
  ! {z : (P zero)}
    (P self)

. succ
: {n : Nat} Nat
= [n]
  @Nat [-P] [s] [s = s] [A = (~n -P |s)] | [z] (s -n (A z))

. zero
: Nat
= @Nat [-P] [s] [s = s] | [z] z `

const parsedCode = f.parse(code);

console.log(parsedCode);


// const defs = f.parse(code);

// function transform(code) {
//   const codeExample = `

// . zero
// : Nat
// = @Nat [-P] [s] [s = s] | [z] z
// `

//   const colorPallete = {
//     ["["]: "#",
//     ["]"]: "#",
//     [":"]: "#EE65B6",
//     ["."]: "#EE65B6",
//     ["="]: "#126DD7",
//   }

//   var str = "h('p', {}, [ '"; // TODO: aspas simples são temporárias

//   var index = 0;
//   while (index < codeExample.length) {
//     switch (codeExample[index]) {
//       case '=':
//         str += " ', h('spam', {style: {'color': '"+ colorPallete['='] +"'}}, '=' ), ' ";
//       break; 

//       default: 
//       str += codeExample[index];
//     }
//     index += 1;
//   }
//   str += " ' ])"; // TODO: aspas simples são temporárias
//   return str;
// }

// // console.log(transform(code));

// module.exports = { transform }



// console.log(f.parse(ann))



// const convert = (defs) => {
//   var str = "";

//   var natDefs = defs['Nat']
//   console.log(natDefs);
//   console.log("Ctor: "+natDefs[0]);
//   console.log(f.show(natDefs[0], natDefs[1]));

//   // para cada termo, chama o f.show()

// }

// convert(defs);




/*
// Converts a term to a string
switch (ctor) {
    case "Var":
      var name = get_name(ctx, args.index);
      return name !== null ? name : "#" + args.index;
    case "Typ":
      return "Type";
    case "All":
      var eras = args.eras ? "-" : "";
      var name = args.name || "x";
      var bind = show(args.bind, ctx);
      var body = show(args.body, extend(ctx, [args.name, null]));
      return "{" + eras + name + " : " + bind + "} " + body;
    case "Lam":
      var eras = args.eras ? "-" : "";
      var name = args.name || "x";
      var bind = args.bind && show(args.bind, ctx);
      var body = show(args.body, extend(ctx, [name, null]));
      return bind ? "[" + eras + name + " : " + bind + "] " + body : "[" + eras + name + "] " + body;
    case "App":
      var text = ")";
      var term = [ctor, args];
      while (term[0] === "App") {
        text = (term[1].eras ? " -" : " ") + show(term[1].argm, ctx) + text;
        term = term[1].func;
      }
      return "(" + show(term, ctx) + text;
    case "Box":
      var expr = show(args.expr, ctx);
      return "!" + expr;
    case "Put":
      var expr = show(args.expr, ctx);
      return "|" + expr;
    case "Dup":
      var name = args.name;
      var expr = show(args.expr, ctx);
      var body = show(args.body, extend(ctx, [args.name, null]));
      return "[" + name + " = " + expr + "] " + body;
    case "Slf":
      var name = args.name;
      var type = show(args.type, extend(ctx, [args.name, null]));
      return "$" + name + " " + type;
    case "New":
      var type = show(args.type, ctx);
      var expr = show(args.expr, ctx);
      return "@" + type + " " + expr;
    case "Use":
      var expr = show(args.expr, ctx);
      return "~" + expr; 
    case "Ann":
      // var type = show(args.type, ctx);
      // var expr = show(args.expr, ctx);
      // return ":" + type + " = " + expr;
      // var type = show(args.type, ctx);
      var expr = show(args.expr, ctx);
      return expr;
    case "Ref":
      return args.name;



*/