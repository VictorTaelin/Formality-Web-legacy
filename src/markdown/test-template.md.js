const h = require('inferno-hyperscript').h;
module.exports = [
  h('h1',
    [
      "H1"
    ]
  ),
  h('h2',
    [
      "H2"
    ]
  ),
  h('h3',
    [
      "H3"
    ]
  ),
  h('p', 
    [
      h('b', 
        [
          "bold text"
        ]
      )
    ]
  ),
  h('p', 
    [
      h('i', 
        [
          "italicized text"
        ]
      )
    ]
  ),
  h('blockquote', 
    [
      h('p', 
        [
          "blockquote"
        ]
      )
    ]
  ),
  h('ol', {style: {'margin-left': '23px'}}, [
    h('li', 
      [
        "First item"
      ]
    ),
    h('li', 
      [
        "Second item"
      ]
    ),
    h('li', 
      [
        h('p', 
          [
            "Third item"
          ]
        )
      ]
    ),
    h('li', 
      [
        "First item"
      ]
    ),
    h('li', 
      [
        "Second item"
      ]
    ),
    h('li', 
      [
        "Third item"
      ]
    ),
  ]),
  h('p', 
    [
      h('code', {style: {'font-size': '15px' }},'code')
    ]
  ),
  h('hr'),
  h('p', 
    [
      h('a', {href: 'https://www.example.com'}, 
        [
          "title"
        ]
      )
    ]
  ),
  h('table', {style: {'border-collapse': 'collapse'}}, [
    h('tr', {style: {'border': '1px solid #dddddd', 'justify-content': 'flex-start'}}, [
      h('th', {style: {'border': '1px solid #dddddd', 'padding': '8px', 'text-align': 'left', 'font-weight': 'bold', 'font-size': '15px'}}, 
        [
          "Syntax"
        ]
      ),
      h('th', {style: {'border': '1px solid #dddddd', 'padding': '8px', 'text-align': 'left', 'font-weight': 'bold', 'font-size': '15px'}}, 
        [
          "Description"
        ]
      ),
  ]), 
  h('tr', {style: {'border': '1px solid #dddddd', 'justify-content': 'flex-start'}}, [
      h('td', {style: {'border': '1px solid #dddddd', 'padding': '8px', 'font-size': '15px'}},
        [
          "Header"
        ]
      ), 
      h('td', {style: {'border': '1px solid #dddddd', 'padding': '8px', 'font-size': '15px'}},
        [
          "Title"
        ]
      ), 
  ]), 
  h('tr', {style: {'border': '1px solid #dddddd', 'justify-content': 'flex-start'}}, [
      h('td', {style: {'border': '1px solid #dddddd', 'padding': '8px', 'font-size': '15px'}},
        [
          "Paragraph"
        ]
      ), 
      h('td', {style: {'border': '1px solid #dddddd', 'padding': '8px', 'font-size': '15px'}},
        [
          "Text"
        ]
      ), 
  ]), 
  ]),
  h('pre', [
    h('code.bash', {style: {'font-size': '15px' }},
      "{\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"age\": 25\n}"
    )
  ]),
  h('p', 
    [
      "Here",
      "'s a sentence with a footnote",
      ". ",
      "[",
      "^1",
      "]"
    ]
  ),
  h('p', 
    [
      "[",
      "^1",
      "]",
      ": This is the footnote",
      "."
    ]
  ),
  h('h3',
    [
      "My Great Heading ",
      "{",
      "#custom",
      "-id",
      "}"
    ]
  ),
  h('p', 
    [
      "term\n",
      ": definition"
    ]
  ),
  h('p', 
    [
      h('del', 
        [
          "The world is flat",
          "."
        ]
      )
    ]
  ),
  h('ul', {style: {'margin-left': '23px'}}, [
    h('li', 
      [
        "[x",
        "] Write the press release"
      ]
    ),
    h('li', 
      [
        "[ ",
        "] Update the website"
      ]
    ),
    h('li', 
      [
        "[ ",
        "] Contact the media"
      ]
    ),
  ])
]