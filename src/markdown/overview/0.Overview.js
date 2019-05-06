const h = require('inferno-hyperscript').h;
module.exports = 
[
  h('h1', {style: {'margin-top': '25px'}}, 
    [
      "Overview"
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
        h('img', {src: 'https://petgusto.com/wp-content/uploads/2018/09/cachorros-pequenos-e-fofos-10-raças-que-voce-precisa-conhecer-6.jpg', style: {'max-width': '100%', 'height': 'auto' }} )
    ]
  ),
  h('p', {style: {'margin-top': '5px'}}, 
    [
      "Go to ",
      h('a', {href: '/tryIt', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "Try It"
        ]
      )
    ]
  ),
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "Why",
      "?"
    ]
  ),
  h('ul', {style: {'margin-left': '23px'}}, [
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "Formality has a type system capable of proving mathematical theorems about its own programs",
            ". It",
            "'s not only about preventing bugs or proving the theorem itself",
            ". We are talking about a whole new tool to work with",
            ", a language of specifications",
            ", one on which we can state precisely",
            ", in a way that a computer can understand",
            ", what an algorithm is supposed to do",
            "."
          ]
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "No garbage",
            "-collection",
            ", optimal beta",
            "-reduction and a massively parallel GPU compiler make it insanely fast",
            ".\nMassively parallel evaluation is possible due to Symmetric Interaction Calculus ",
            "(SIC",
            ")",
            ", a new model of computation that combines the best aspects of the Turing Machine and the λ",
            "-Calculus",
            "."
          ]
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "Its reference implementation",
            ", including parser",
            ", stringifier",
            ", evaluator and type checker has about 1",
            ",000 lines of code",
            ". This is important to",
            ":"
          ]
        ),
        h('ol', {style: {'margin-left': '23px'}}, [
          h('li', {style: {'margin-top': '7px'}}, 
            [
              h('p', {style: {'margin-top': '5px'}}, 
                [
                  "Portability",
                  ": we want Formality to be a library in many languages",
                  ", just like JSON"
                ]
              )
            ]
          ),
          h('li', {style: {'margin-top': '7px'}}, 
            [
              h('p', {style: {'margin-top': '5px'}}, 
                [
                  "Trust",
                  ": we don",
                  "'t want people to trust on a single",
                  ", monolithic",
                  ", bug",
                  "-prone implementation"
                ]
              )
            ]
          ),
        ])
      ]
    ),
  ]),
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "Context about the other languages"
    ]
  ),
  h('ul', {style: {'margin-left': '23px'}}, [
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "Agda ",
            ".",
            ".",
            ".",
            "."
          ]
        )
      ]
    ),
    h('li', {style: {'margin-top': '7px'}}, 
      [
        h('p', {style: {'margin-top': '5px'}}, 
          [
            "Haskel ",
            ".",
            ".",
            "."
          ]
        )
      ]
    ),
  ]),
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "About the project"
    ]
  )
]