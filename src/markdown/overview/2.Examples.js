const h = require('inferno-hyperscript').h;
module.exports = 
[
  h('h1', {style: {'margin-top': '25px'}}, 
    [
      "Examples"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Assure you have Formality and npm installed on your computer or use our ",
      h('a', {href: '', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "online editor"
        ]
      ),
      "."
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "For all the examples",
      ", use ",
      ".fm file",
      ". You can run them on the same directory that is your file using",
      ":\n",
      "- ",
      h('code', {style: {'font-size': '15px'}},`formality -n main`),
      ": computes the normal form\n",
      "- ",
      h('code', {style: {'font-size': '15px'}},`formality -inN main`),
      ": ",
      "-N ",
      "(uppercase",
      ") flag tells it to show the normal of the type",
      ", and the ",
      "-i flag tells it to show the titles",
      "."
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      h('b', 
        [
          "Important"
        ]
      ),
      ": \n",
      "- ",
      h('code', {style: {'font-size': '15px'}},`formality -n main`),
      " reads all ",
      ".fm files on the current directory and loads the definitions inside them",
      ". The ",
      h('code', {style: {'font-size': '15px'}},`-n main`),
      " bit means it must eval the main definition and output the result"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "#",
      "# 1",
      ". Hello World\n",
      h('code', {style: {'font-size': '15px'}},`.main (hello world)`)
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Output",
      ":\n",
      h('code', {style: {'font-size': '15px'}},`(hello world)`)
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "#",
      "# 2",
      ". Identity\n",
      h('code', {style: {'font-size': '15px'}},`.id [x] x
.main 
  (id 42)`)
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Output",
      ":\n",
      h('code', {style: {'font-size': '15px'}},`(id 42)`),
      "\nNote that",
      ", here",
      ", 42 is not an actual number",
      ", but an undefined reference",
      ". We’ll give meaning to it later",
      "."
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "#",
      "# 3",
      ". Copy\n",
      h('code', {style: {'font-size': '15px'}},`.id [x] x
.main [val = id] (val val)`),
      "\nThis program makes a copy of ",
      h('code', {style: {'font-size': '15px'}},`id`),
      " and applies it to itself",
      ". The result should be just ",
      h('code', {style: {'font-size': '15px'}},`id`),
      ", i",
      ".e",
      ".",
      ", ",
      h('code', {style: {'font-size': '15px'}},`[x] x`),
      ", but",
      ", if we run it with ",
      h('code', {style: {'font-size': '15px'}},`formality -n main`),
      ", it outputs",
      ":\n",
      h('code', {style: {'font-size': '15px'}},`[val = [x] x] (val val)`),
      "\nAs you can see",
      ", the copy doesn’t happen ",
      "(obs",
      ": how can I see the reason why it doesn",
      "'t happen",
      "?",
      "?",
      ")",
      ". That’s because id wasn’t ",
      h('a', {href: '', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "boxed"
        ]
      ),
      ". We can fix it by putting it in a box with a pipe ",
      "(",
      "|",
      ")",
      ":\n",
      h('code', {style: {'font-size': '15px'}},`.main [val = | id] (val val)`),
      "\nAnd now this works as expected",
      "! But this is still not legal",
      ", though",
      ", because there isn’t exactly 1 box between where val is bound and where it is used",
      ". This can be easily fixed",
      ":\n",
      h('code', {style: {'font-size': '15px'}},`.id [x] x
.main [val = id] | (val val)
// Outputs
// [val = [x] x] |(val val)`)
    ]
  ),
  h('blockquote', {style: {'margin-top': '10px', 'margin-bottom': '10px'}}, 
    [
      h('p', {style: {'margin-top': '5px'}}, 
        [
          "A very insightful exercise must be to follow a standard lambda calculus tutorial",
          ", except using that language instead",
          "."
        ]
      )
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      " ",
      "#",
      "# 4",
      ". Simple data types\n Let",
      "'s take for example this data types on Agda",
      ":\n",
      "`",
      "`",
      "`\n",
      "-",
      "- A new datatype\ndata Bool ",
      ": Set where\n  true  ",
      ": Bool\n  false ",
      ": Bool"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "-",
      "- Its elimination principle\nif ",
      ": ",
      "(b ",
      ": Bool",
      ") ",
      "(P ",
      ": Bool ",
      "-",
      "> Set",
      ") ",
      "-",
      "> P true ",
      "-",
      "> P false ",
      "-",
      "> P b\nif true  P t f ",
      "= t\nif false P t f ",
      "= f"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "-",
      "- Functions using it\nnot ",
      ": Bool ",
      "-",
      "> Bool\nnot a ",
      "= if a ",
      "(λ x → Bool",
      ") false true"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "and ",
      ": Bool ",
      "-",
      "> Bool ",
      "-",
      "> Bool\nand a b ",
      "= if a ",
      "(λ a → Bool",
      ") b false"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "or ",
      ": Bool ",
      "-",
      "> Bool ",
      "-",
      "> Bool\nor a b ",
      "= if a ",
      "(λ a → Bool",
      ") true b\n",
      h('code', {style: {'font-size': '15px'}},`Here is how the same program is translated to Formality:`),
      "\n",
      ". Bool\n",
      ": Type\n",
      "= ",
      "$self\n  ",
      "{",
      "-P    ",
      ": ",
      "{",
      ":Bool",
      "} Type",
      "}\n  ",
      "{true  ",
      ": ",
      "(P true",
      ")",
      "}\n  ",
      "{false ",
      ": ",
      "(P false",
      ")",
      "}\n  ",
      "(P self",
      ")"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      ". true\n",
      ": Bool\n",
      "= ",
      "@Bool ",
      h('a', {href: 'undefined', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "-P"
        ]
      ),
      " ",
      "[f",
      "] t"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      ". false\n",
      ": Bool\n",
      "= ",
      "@Bool ",
      h('a', {href: 'undefined', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "-P"
        ]
      ),
      " ",
      "[f",
      "] f"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      ". if\n",
      ": ",
      "{a ",
      ": Bool",
      "} ",
      "{",
      "-P ",
      ": ",
      "{",
      ":Bool",
      "} Type",
      "} ",
      "{",
      ":",
      "(P true",
      ")",
      "} ",
      "{",
      ":",
      "(P false",
      ")",
      "} ",
      "(P a",
      ")\n",
      "= ",
      "[a",
      "] ",
      "~a"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      ". not\n",
      ": ",
      "{a ",
      ": Bool",
      "} Bool\n",
      "= ",
      "[a",
      "] ",
      "(if a ",
      "-",
      "[a",
      "]Bool false true",
      ")"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      ". or \n",
      ": ",
      "{a ",
      ": Bool",
      "} ",
      "{b ",
      ": Bool",
      "} Bool\n",
      "= ",
      h('a', {href: 'undefined', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "a"
        ]
      ),
      " ",
      "(if a ",
      "-",
      "[a",
      "]Bool true b",
      ")"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      ". and \n",
      ": ",
      "{a ",
      ": Bool",
      "} ",
      "{b ",
      ": Bool",
      "} Bool\n",
      "= ",
      h('a', {href: 'undefined', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "a"
        ]
      ),
      " ",
      "(if a ",
      "-",
      "[a",
      "]Bool b false",
      ")"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      ". main\n  ",
      "(not true",
      ")\n",
      "`",
      "`",
      "`\n",
      h('b', 
        [
          "Don",
          "'t panic",
          "!"
        ]
      ),
      " Studying this example is the best way to grasp it",
      ". Spend some time on it until this makes sense to you",
      "! ",
      ":D"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      h('b', 
        [
          "Things worth noting",
          ":"
        ]
      )
    ]
  ),
  h('ol', {style: {'margin-left': '23px'}}, [
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "Notice how similar it is to Agda’s ",
        h('code', {style: {'font-size': '15px'}},`if`),
        "? That’s because Formality datatypes are simply Agda’s elimination principles for that datatype",
        ", except with self used on the first and last lines",
        "!"
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "The lambda binding ",
        h('code', {style: {'font-size': '15px'}},`-P`),
        " is erased to avoid unnecessary runtime costs",
        "."
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "Both ",
        h('code', {style: {'font-size': '15px'}},`true`),
        " and ",
        h('code', {style: {'font-size': '15px'}},`false`),
        " must be declared explicitly because",
        ", unlike Agda’s native data syntax",
        ", our ",
        h('code', {style: {'font-size': '15px'}},`Bool`),
        " definition won’t automatically define them",
        "."
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('code', {style: {'font-size': '15px'}},`$self ...`),
        " is used to define an inductive datatype ",
        h('code', {style: {'font-size': '15px'}},`T`),
        ", and ",
        h('code', {style: {'font-size': '15px'}},`@T ...`),
        " is used to instantiate each of its constructors",
        "."
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "The type of ",
        h('code', {style: {'font-size': '15px'}},`Bool`),
        " refers to ",
        h('code', {style: {'font-size': '15px'}},`true`),
        ", which refers to ",
        h('code', {style: {'font-size': '15px'}},`Bool`),
        ", in a “mutually recursive” fashion",
        ". This is clearly necessary",
        ", because inductive datatypes are defined as their own elimination principles",
        ", which refer to their constructors",
        ", which are members of those types",
        ", and so on",
        "! Yet",
        ", this kind of type",
        "-level recursion isn’t capable of causing infinite loops because",
        ", remember",
        ", Formality’s termination proof doesn’t rely on types",
        "."
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        "We give an explicit annotation to all the terms because",
        ", due to the cyclic dependency above",
        ", Formality wouldn’t be able to infer their types",
        "."
      ]
    ),
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Once that makes sense to you",
      ", the rest is straightforward",
      ". Since datatypes are encoded as their elimination principles",
      ", in order to get them you must just eliminate their self types with a ",
      h('code', {style: {'font-size': '15px'}},`~`),
      ", which can be seen on the body of ",
      h('code', {style: {'font-size': '15px'}},`if`),
      ". After the bureaucracy of defining a new datatype is complete",
      ", functions that operate on them are basically direct",
      ", syntactical translation of their Agda counterparts",
      "!"
    ]
  )
]