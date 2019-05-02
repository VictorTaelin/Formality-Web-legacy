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
      ":"
    ]
  ),
  h('ul', {style: {'margin-left': '23px'}}, [
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `formality -n main`),
            ": computes the normal form"
          ]
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `formality -inN main`),
            ": ",
            "-N ",
            "(uppercase",
            ") flag tells it to show the normal of the type",
            ", and the ",
            "-i flag tells it to show the titles",
            "."
          ]
        )
      ]
    ),
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      h('b', 
        [
          "Important"
        ]
      ),
      ": "
    ]
  ),
  h('ul', {style: {'margin-left': '23px'}}, [
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `formality -n main`),
        " reads all ",
        ".fm files on the current directory and loads the definitions inside them",
        ". The ",
        h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `-n main`),
        " bit means it must eval the main definition and output the result"
      ]
    ),
  ]),
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "1",
      ". Hello World"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      ".main (hello world)"
    )
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Output",
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      "(hello world)"
    )
  ]),
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "2",
      ". Identity"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      ".id [x] x\n.main \n  (id 42)"
    )
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Output",
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      "(id 42)"
    )
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Note that",
      ", here",
      ", 42 is not an actual number",
      ", but an undefined reference",
      ". We’ll give meaning to it later",
      "."
    ]
  ),
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "3",
      ". Copy"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      ".id [x] x\n.main [val = id] (val val)"
    )
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "This program makes a copy of ",
      h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `id`),
      " and applies it to itself",
      ". The result should be just ",
      h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `id`),
      ", i",
      ".e",
      ".",
      ", ",
      h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `[x] x`),
      ", but",
      ", if we run it with ",
      h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `formality -n main`),
      ", it outputs",
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      "[val = [x] x] (val val)"
    )
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "As you can see",
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
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      ".main [val = | id] (val val)"
    )
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "And now this works as expected",
      "! But this is still not legal",
      ", though",
      ", because there isn’t exactly 1 box between where val is bound and where it is used",
      ". This can be easily fixed",
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      ".id [x] x\n.main [val = id] | (val val)\n// Outputs\n// [val = [x] x] |(val val)"
    )
  ]),
  h('div', {style: {'margin-top': '25px', 'margin-bottom': '25px', 'margin-left': '20px', 'margin-right': '20px', 'color': '#6B737F', 'font-style': 'italic' }}, 
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
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "4",
      ". Simple data types"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      " Let",
      "'s take for example this data types on Agda",
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      "-- A new datatype\ndata Bool : Set where\n  true  : Bool\n  false : Bool\n\n-- Its elimination principle\nif : (b : Bool) (P : Bool -> Set) -> P true -> P false -> P b\nif true  P t f = t\nif false P t f = f\n\n-- Functions using it\nnot : Bool -> Bool\nnot a = if a (λ x → Bool) false true\n\nand : Bool -> Bool -> Bool\nand a b = if a (λ a → Bool) b false\n\nor : Bool -> Bool -> Bool\nor a b = if a (λ a → Bool) true b"
    )
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Here is how the same program is translated to Formality",
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '#F6F8FA'}}, [
    h('code.bash', {style: {'font-size': '15px'}}, 
      ". Bool\n: Type\n= $self\n  {-P    : {:Bool} Type}\n  {true  : (P true)}\n  {false : (P false)}\n  (P self)\n\n. true\n: Bool\n= @Bool [-P] [t] [f] t\n\n. false\n: Bool\n= @Bool [-P] [t] [f] f\n\n. if\n: {a : Bool} {-P : {:Bool} Type} {:(P true)} {:(P false)} (P a)\n= [a] ~a\n\n. not\n: {a : Bool} Bool\n= [a] (if a -[a]Bool false true)\n\n. or \n: {a : Bool} {b : Bool} Bool\n= [a] [b] (if a -[a]Bool true b)\n\n. and \n: {a : Bool} {b : Bool} Bool\n= [a] [b] (if a -[a]Bool b false)\n\n. main\n  (not true)"
    )
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
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
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "Notice how similar it is to Agda’s ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `if`),
            "? That’s because Formality datatypes are simply Agda’s elimination principles for that datatype",
            ", except with self used on the first and last lines",
            "!"
          ]
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "The lambda binding ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `-P`),
            " is erased to avoid unnecessary runtime costs",
            "."
          ]
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "Both ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `true`),
            " and ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `false`),
            " must be declared explicitly because",
            ", unlike Agda’s native data syntax",
            ", our ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `Bool`),
            " definition won’t automatically define them",
            "."
          ]
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `$self ...`),
            " is used to define an inductive datatype ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `T`),
            ", and ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `@T ...`),
            " is used to instantiate each of its constructors",
            "."
          ]
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "The type of ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `Bool`),
            " refers to ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `true`),
            ", which refers to ",
            h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `Bool`),
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
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "We give an explicit annotation to all the terms because",
            ", due to the cyclic dependency above",
            ", Formality wouldn’t be able to infer their types",
            "."
          ]
        )
      ]
    ),
  ]),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Once that makes sense to you",
      ", the rest is straightforward",
      ". Since datatypes are encoded as their elimination principles",
      ", in order to get them you must just eliminate their self types with a ",
      h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `~`),
      ", which can be seen on the body of ",
      h('code', {style: {'font-size': '15px', 'background-color': '#F6F8FA'}}, `if`),
      ". After the bureaucracy of defining a new datatype is complete",
      ", functions that operate on them are basically direct",
      ", syntactical translation of their Agda counterparts",
      "!"
    ]
  )
]