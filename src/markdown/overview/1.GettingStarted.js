const h = require('inferno-hyperscript').h;
module.exports = [
[
  h('h1', {style: {'margin-top': '20px'}}, 
    [
      "Get started"
    ]
  ),
  h('p', 
    [
      "To install Formality",
      ", you must have npm",
      ". Once you do",
      ", just type",
      ":"
    ]
  ),
  h('pre', {style: {'margin-top': '20px', 'margin-bottom': '20px', 'background-color': '#F6F8FA', 'padding': '15px'}}, [
    h('code.bash', {style: {'font-size': '15px'}},
      "npm i -g formality-lang"
    )
  ]),
  h('p', 
    [
      "Now you can create a file with the extension ",
      h('code', {style: {'font-size': '15px'}},'.fm'),
      " and execute it using"
    ]
  ),
  h('pre', {style: {'margin-top': '20px', 'margin-bottom': '20px', 'background-color': '#F6F8FA', 'padding': '15px'}}, [
    h('code.bash', {style: {'font-size': '15px'}},
      "formality -n (file_name)"
    )
  ]),
  h('p', 
    [
      "Then you’re good to go",
      ". Optionally",
      ", you can also use it as a JS library or",
      ", if you don’t want to download anything",
      ", you can try our online editor ",
      h('a', {href: '/tryIt', style: {'color': '#0769D7', 'text-decoration': 'none'}},  
        [
          "here"
        ]
      ),
      "."
    ]
  )
]
]