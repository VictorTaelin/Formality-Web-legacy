const Var = (index)                  => ["Var", {index},                  ];
const Typ = ()                       => ["Typ", {},                       ];
const All = (name, bind, body, eras) => ["All", {name, bind, body, eras}, ];
const Lam = (name, bind, body, eras) => ["Lam", {name, bind, body, eras}, ];
const App = (func, argm, eras)       => ["App", {func, argm, eras},       ];
const Ref = (name, eras)             => ["Ref", {name, eras},             ];
const Box = (expr)                   => ["Box", {expr},                   ];
const Put = (expr)                   => ["Put", {expr},                   ];
const Dup = (name, expr, body)       => ["Dup", {name, expr, body},       ];
const Slf = (name, type)             => ["Slf", {name, type},             ];
const New = (type, expr)             => ["New", {type, expr},             ];
const Use = (expr)                   => ["Use", {expr},                   ];
const Ann = (type, expr, done)       => ["Ann", {type, expr, done},       ];

const Ctx = () => null;


const extend = (ctx, bind) => {
  return {head: bind, tail: ctx};
}

const index_of = (ctx, name, skip, i = 0) => {
  if (!ctx) {
    return null;
  } else if (ctx.head[0] === name && skip > 0) {
    return index_of(ctx.tail, name, skip - 1, i + 1);
  } else if (ctx.head[0] !== name) {
    return index_of(ctx.tail, name, skip, i + 1);
  } else {
    return i;
  }
}

const get_bind = (ctx, i, j = 0) => {
  if (!ctx) {
    return null;
  } else if (j < i) {
    return get_bind(ctx.tail, i, j + 1);
  } else {
    return [ctx.head[0], ctx.head[1] ? shift(ctx.head[1], i, 0) : null];
  }
}

// Shifts a term
const shift = ([ctor, term], inc, depth) => {
  switch (ctor) {
    case "Var":
      return Var(term.index < depth ? term.index : term.index + inc);
    case "Typ":
      return Typ();
    case "All":
      var eras = term.eras;
      var name = term.name;
      var bind = shift(term.bind, inc, depth);
      var body = shift(term.body, inc, depth + 1);
      return All(name, bind, body, eras);
    case "Lam":
      var eras = term.eras;
      var name = term.name;
      var bind = term.bind && shift(term.bind, inc, depth);
      var body = shift(term.body, inc, depth + 1);
      return Lam(name, bind, body, eras);
    case "App":
      var eras = term.eras;
      var func = shift(term.func, inc, depth);
      var argm = shift(term.argm, inc, depth);
      return App(func, argm, eras);
    case "Box":
      var expr = shift(term.expr, inc, depth);
      return Box(expr);
    case "Put":
      var expr = shift(term.expr, inc, depth);
      return Put(expr);
    case "Dup":
      var name = term.name;
      var expr = shift(term.expr, inc, depth);
      var body = shift(term.body, inc, depth + 1);
      return Dup(name, expr, body);
    case "Slf":
      var name = term.name;
      var type = shift(term.type, inc, depth + 1);
      return Slf(name, type);
    case "New":
      var type = shift(term.type, inc, depth);
      var expr = shift(term.expr, inc, depth);
      return New(type, expr);
    case "Use":
      var expr = shift(term.expr, inc, depth);
      return Use(expr);
    case "Ann":
      var type = shift(term.type, inc, depth);
      var expr = shift(term.expr, inc, depth);
      var done = term.done;
      return Ann(type, expr, done);
    case "Ref":
      return Ref(term.name, term.eras);
  }
}

const get_name = (ctx, i) => {
  const count = (ctx, name, i) => {
    return i === 0 ? 0 : (ctx.head[0] === name ? 1 : 0) + count(ctx.tail, name, i - 1);
  }
  const repeat = (str, i) => {
    return i === 0 ? "" : str + repeat(str, i - 1);
  }
  var bind = get_bind(ctx, i);
  if (bind) {
    return (bind[0] || "x") + repeat("'", count(ctx, bind[0], i));
  } else {
    return "#" + i;
  }
}


// Converts a string to a term
const parse = (code) => {

  function is_space(char) {
    return char === " " || char === "\t" || char === "\n";
  }

  function is_name_char(char) {
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.~".indexOf(char) !== -1;
  }

  function skip_spaces() {
    while (index < code.length && is_space(code[index])) {
      if (code[index] === "\n") {
        // console.log(">>> Line break");
      }
      index += 1;
    }
    return index;
  }

  function match(string) {
    skip_spaces();
    var sliced = code.slice(index, index + string.length);
    if (sliced === string) {
      index += string.length;
      return true;
    }
    return false;
  }

  function error(text) {
    text += "This is the relevant code:\n\n<<<";
    text += code.slice(index - 64, index) + "<<<HERE>>>";
    text += code.slice(index, index + 64) + ">>>";
    throw text;
  }

  function parse_exact(string) {
    if (!match(string)) {
      error("Parse error, expected '" + string + "'.\n");
    }
  }

  function parse_name() {
    skip_spaces();
    var name = "";
    while (index < code.length && is_name_char(code[index])) {
      name = name + code[index];
      index += 1;
    }
    return name;
  }

  function parse_term(ctx) {
    // Comment
    if (match("//")) {
      while (index < code.length && code[index] !== "\n") {
        index += 1;
      }
      return parse_term(ctx);
    }

    // Application
    else if (match("(")) {
      var func = parse_term(ctx);
      while (index < code.length && !match(")")) {
        var eras = match("-");
        var argm = parse_term(ctx);
        // var func = App(func, argm, eras);
        var func = " (" +  App(func, argm, eras) 
        skip_spaces();
      }
      return func + ") ";
      // return " (" + argm + func +")";
    }

    // Type
    else if (match("Type")) {
      // return Typ();
      return "Type ";
    }

    // Forall
    else if (match("{")) {
      var eras = match("-");
      var name = parse_name();
      var skip = parse_exact(":");
      var bind = parse_term(ctx);
      var skip = parse_exact("}");
      var body = parse_term(extend(ctx, [name, Var(0)]));
      // return All(name, bind, body, eras);
      return "{"+ name + " : "+ bind + "} " + body;
    }

    // Lambda
    else if (match("[")) {
      var eras = match("-");
      var name = parse_name();
      var bind = match(":") ? parse_term(ctx) : null;
      var expr = match("=") ? parse_term(ctx) : null;
      var skip = parse_exact("]");
      var body = parse_term(extend(ctx, [name, Var(0)]));
      // return expr ? Dup(name, expr, body) : Lam(name, bind, body, eras);
      return expr ? "[" + name + " = " + expr + "] " + body : 
             bind ? "[" + name + " : " + bind + "] " + body : "["+ name + "] " + body;
   }

    // Box
    else if (match("!")) {
      var expr = parse_term(ctx);
      // return Box(expr);
      return " ! " + expr;
    }

    // Put
    else if (match("|")) {
      var expr = parse_term(ctx);
      // return Put(expr);
      return " | " + expr;
    }

    // Let
    else if (match("let")) {
      var name = parse_name();
      var copy = parse_term(ctx);
      var body = parse_term(extend(ctx, [name, Var(0)]));
      console.log(">> let");
      console.log(ctx);
      return subst(body, copy, 0);
    }

    // Slf
    else if (match("$")) {
      var name = parse_name();
      var type = parse_term(extend(ctx, [name, Var(0)]));
      // return Slf(name, type);
      return "$" + name + " " + type;
    }

    // New
    else if (match("@")) {
      var type = parse_term(ctx);
      var expr = parse_term(ctx);
      // return New(type, expr);
      return "@" + type + " " + expr;
    }

    // Use
    else if (match("~")) {
      var expr = parse_term(ctx);
      // return Use(expr);
      return "~" + expr; 
    }

    // Ann
    else if (match(":")) {
      var type = parse_term(ctx);
      var skip = parse_exact("=");
      var expr = parse_term(ctx);
      // return Ann(type, expr, false);
      return ": "+ type + " = "+ expr;
    }

    // Variable / Reference
    else {
      var name = parse_name();
      var skip = 0;
      while (match("'")) {
        skip += 1;
      }
      var var_index = index_of(ctx, name, skip);
      if (var_index === null) {
        // return Ref(name, false);
        return name;
      } else {
        console.log("[Variable] return get bind, ctx: "+ctx)
        return get_bind(ctx, var_index)[1];
      }
    }
  }

  var index = 0;
  var defs = {};
  while (index < code.length) {
    skip_spaces();
    if (match("//")) {
      while (index < code.length && code[index] !== "\n") {
        index += 1;
      }
    } else {
      var skip = parse_exact(".");
      var name = parse_name();
      var term = parse_term(Ctx());
      defs[name] = term;
    }
    skip_spaces();
  }

  return defs;
}

// ====================================================

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

const parsedCode = parse(code);
console.log("\n");
console.log(parsedCode);












// ======== Using show =========
// const showCode = (node) => {
//   var str = "";
//   for (var key in node) {
//     str += ". " + key+ " ";
//     try { 
//       str += show(parsedCode[key]); 
//     } catch (e){
//       console.log(" >>>>>> logging error");
//       console.log(e);
//     }    
//     str += "\n";
//   }
//   return str;
// }

// console.log(showCode(parsedCode));