// GENERATED FILE, DO NOT MODIFY IT
const h = require('inferno-hyperscript').h;
module.exports = [
  h("h1#formality", `Formality`),
  h("p", `TESTS`),
  h("p", `A general-purpose proof-gramming language for front-end apps, back-end services and smart-contracts. It is:`),
  h("ul", [
    h("li", [
      h("p", [
        h("strong", `Fast:`),
        ` no garbage-collection, `,
        h("a", {
          "attributes": {
            "href": "https://medium.com/@maiavictor/solving-the-mystery-behind-abstract-algorithms-magical-optimizations-144225164b07"
          }
        }, `optimal beta-reduction`),
        ` and a massively parallel GPU compiler make it `,
        h("em", `insanely fast`),
        `.`
      ])
    ]),
    h("li", [
      h("p", [
        h("strong", `Safe:`),
        ` a type system capable of proving mathematical theorems about its own programs make it `,
        h("em", `really secure`),
        `.`
      ])
    ]),
    h("li", [
      h("p", [
        h("strong", `Simple:`),
        ` its entire implementation takes `,
        h("a", {
          "attributes": {
            "href": "javascript/formality.js"
          }
        }, `<1k LOC`),
        `, making it a simple standard `,
        h("em", `you could implement yourself`),
        `.`
      ])
    ])
  ]),
  h("p", [
    h("a", {
      "attributes": {
        "href": "spec.md"
      }
    }, `Specification`),
    ` ~ `,
    h("a", {
      "attributes": {
        "href": "stdlib.fm"
      }
    }, `Examples`)
  ]),
  h("h2#usage", `Usage`),
  h("p", `Formality is currently implemented as a small, dependency-free JavaScript library. It will futurely be implemented in other languages, and formalized in Agda/Coq. To use the current implementation:`),
  h("pre", [
    h("code.bash", `# Installs formality
npm i -g formality

# Enters the repository
git clone https://github.com/maiavictor/formality
cd formality

# Checks and evaluates main
formality main`)
  ]),
  h("p", `You can also use it as a library from your own JS code.`)
]