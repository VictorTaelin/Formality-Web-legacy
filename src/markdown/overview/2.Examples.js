const h = require('inferno-hyperscript').h;
module.exports = 
[
  h('h1', {style: {'margin-top': '25px'}}, 
    [
      "Examples"
    ]
  ),
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "1",
      ". Hello World"
    ]
  ),
  h('h2', {style: {'margin-top': '20px'}}, 
    [
      "2",
      ". Identity"
    ]
  )
]