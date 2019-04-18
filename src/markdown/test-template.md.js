const h = require('inferno-hyperscript').h;
module.exports = [
  h('h1', {style: {'margin-top': '20px'}}, 
    [
      "Formality"
    ]
  ),
  h('p', 
    [
      "TESTS"
    ]
  ),
  h('p', 
    [
      "A general",
      "-purpose proof",
      "-gramming language for front",
      "-end apps",
      ", back",
      "-end services and smart",
      "-contracts",
      ". It is",
      ":"
    ]
  ),
  h('ul', {style: {'margin-left': '23px'}}, [
    h('li', 
      [
        h('p', 
          [
            h('b', 
              [
                "Fast",
                ":"
              ]
            ),
            " no garbage",
            "-collection",
            ", ",
            h('a', {href: 'https://medium.com/@maiavictor/solving-the-mystery-behind-abstract-algorithms-magical-optimizations-144225164b07', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
              [
                "optimal beta",
                "-reduction"
              ]
            ),
            " and a massively parallel GPU compiler make it ",
            h('i', 
              [
                "insanely fast"
              ]
            ),
            "."
          ]
        )
      ]
    ),
    h('li', 
      [
        h('p', 
          [
            h('b', 
              [
                "Safe",
                ":"
              ]
            ),
            " a type system capable of proving mathematical theorems about its own programs make it ",
            h('i', 
              [
                "really secure"
              ]
            ),
            "."
          ]
        )
      ]
    ),
    h('li', 
      [
        h('p', 
          [
            h('b', 
              [
                "Simple",
                ":"
              ]
            ),
            " its entire implementation takes ",
            h('a', {href: 'javascript/formality.js', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
              [
                "<1k LOC"
              ]
            ),
            ", making it a simple standard ",
            h('i', 
              [
                "you could implement yourself"
              ]
            ),
            "."
          ]
        )
      ]
    ),
  ]),
  h('p', 
    [
      h('a', {href: 'spec.md', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "Specification"
        ]
      ),
      " ",
      "~ ",
      h('a', {href: 'stdlib.fm', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "Examples"
        ]
      )
    ]
  ),
  h('h2', {style: {'margin-top': '15px'}}, 
    [
      "Usage"
    ]
  ),
  h('p', 
    [
      "Formality is currently implemented as a small",
      ", dependency",
      "-free JavaScript library",
      ". It will futurely be implemented in other languages",
      ", and formalized in Agda",
      "/Coq",
      ". To use the current implementation",
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '20px', 'margin-bottom': '20px', 'background-color': '#F6F8FA', 'padding': '15px'}}, [
    h('code.bash', {style: {'font-size': '15px'}},
      "# Installs formality\nnpm i -g formality\n\n# Enters the repository\ngit clone https://github.com/maiavictor/formality\ncd formality\n\n# Checks and evaluates main\nformality main"
    )
  ]),
  h('p', 
    [
      "You can also use it as a library from your own JS code",
      "."
    ]
  )
]