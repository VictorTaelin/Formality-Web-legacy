const {Component, render, linkEvent} = require("inferno");
const {BrowserRouter, Route, Link} = require("inferno-router");
// const {MarkdownBlock} = require ("CompLibrary.MarkdownBlock"); // Used to read markdown. It's used in the Inferno website

const h = require("inferno-hyperscript").h;
const Canvas = require("inferno-canvas-component-2");

const s = require('./style');
const fs = require("./font-style");

// Feature images
import featureImage1 from './images/feature1.png';
import featureImage2 from './images/feature2.png';
import featureImage3 from './images/feature3.png';
import logo from './images/logo-formality.png';

// Colors
const primaryColor = "#444053";
const secondaryColor = "#ffffff";

class Site extends Component {
  constructor(props) {
    super(props)
    this.state = {page: "main"};
  }
  componentDidMount() {
    //this.setState({page: [10, 20, 30]});
  }
  render() {
    // function drawCanvas({ctx, time}) {
    //     const {width, height} = ctx.canvas;
    //     ctx.save();
    //     ctx.clearRect(0, 0, width, height);
    //     ctx.fillStyle = 'black';
    //     ctx.translate(width / 2, height / 2);
    //     ctx.rotate(((time / 10) % 360) * Math.PI / 180);
    //     ctx.fillRect(-1 * width / 4, -1 * height / 4, width / 2, height / 2);
    //     ctx.restore();
    // }
    const tryItButton = {
      "width": "100px", 
      "height": "50px", 
      "display": "flex", 
      "justify-content": "center", 
      "font-size": "20px",
      "margin-top": "60px",
      "color": primaryColor,
      "border": "2px solid #444053",
      "border-radius": "25px",
      "background-color": secondaryColor,
    }

    function tryItClick(event) {
      console.log('Clicked !', event)
    }

    // Se uma tab é clicada, as outras voltam ao estato normal
    function manageTabs(event) {
      console.log('Clicked !', event)
    }

    return h("div", {}, [
      // Top menu
      h("div", {style: {"width": "100%", "display": "flex", "flex-flow": "row nowrap", "background-color": s.primaryColor, "color": s.secondaryColor}}, [
        h("img", {src: logo, alt: "logo", style: s.logo}),
        h("div", {style: {"width": "100%", "height": "30px", "margin-top": "10px", "display": "flex", "justify-content": "flex-end", "align-items": "center", "margin-right": "90px"}}, [
          h(Tab, {title: "Home"}),
          h(Tab, {title: "Specification"}),
          h(Tab, {title: "Try it!"})
        ]),
      ]),

      // Top area
      h("div", {style: s.topContainer}, [
        h("div", {style: fs.formalityName}, "FORMALITY"),
        h("div", {style: fs.formalitySubtitle}, [
          h("span", {style: {"font-family": 'Open Sans' }}, "An efficient\u00A0"),
          h("span", {style: {"font-family": 'Open Sans', "font-weight": "bold"}}, "proof"),
          h("span", {style: {"font-family": 'Open Sans' }}, "gramming language."),
        ]),
        h("button", {style: tryItButton, onClick: { tryItClick }}, "Try it"),
      ]),

      // Canvas test
      // h(Canvas, {draw: drawCanvas, width: 200, height: 200, realtime: true})

      // Hover test
      // h(Hover, {normalComponent: h("p", {}, "first component"), onFocusComponent: h("p", {}, "second component")}),
      
        // Grid test
      h(WhyGrid, {}),
      h(Usage,{}),
      h(Footer, {})
    ]);
  }
}

// --- Components --- 

// ---- Not working --- 
class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {linkTo: props.linkTo, component: props.component}
  }

  render() {
    function handleClick(e) {
      e.preventDefault();
      console.log('Button was clicked.');
    }
    return this.state.component;
  }
}



class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {title: props.title, isCurrentPage: false};
  }
  
  render() {
    const hover = h(Hover, {normalComponent: h("div", {style: s.tabs},  this.state.title), 
                            onFocusComponent: h("div", {style: s.tabsOnFocus}, this.state.title)})
    return hover;                        
  }
}

class Hover extends Component {
  constructor(props) {
    super(props)
    this.state = {isOnFocus: false, normalComponent: props.normalComponent, onFocusComponent: props.onFocusComponent};
  }

  render() {
    const component = this.state.isOnFocus ? this.state.onFocusComponent : this.state.normalComponent ;

    return h("div", 
      {onMouseEnter: () => this.setState(this.state.isOnFocus = true), 
      onMouseLeave: () => this.setState(this.state.isOnFocus = false)}, 
      component);
  }
}

class WhyGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const gridContainer = {
      "display": "flex",
      // "grid-row-gap": "30px",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center",
    }

    const gridItem = {
      "display": "flex",
      "height": "350px",
      "width": "800px",
      "align-items": "center", 
      "font-size": "22px"
    }

    return h("div", {style: gridContainer}, [
      h("div", {style: fs.title}, "Why use Formality?"),
      // First element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"}, [
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Mathematical proof"),
          h("p", {}, "One major difference between Inferno and React is that Inferno does not rename events or change how they work by default. Inferno only specifies that events should be camel cased, rather than lower case."),
          h("p", {style: {"cursor": "pointer", "margin-top": "15px"}}, "Read more..."),
        ]),
        h("img", {src: featureImage1, alt: "image1", style: s.featureImg})
      ]),
      // Second element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"},[
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Massive paralelism"),
          h("p", {}, "linkEvent() is a helper function that allows attachment of props/state/context or other data to events without needing to bind() them or use arrow functions/closures. This is extremely useful when dealing with events in functional components. Below is an example:"),
          h("p", {style: {"cursor": "pointer", "margin-top": "15px"}}, "Read more..."),
        ]),
        h("img", {src: featureImage2, alt: "image2", style: s.featureImg})
      ]),
      // Third element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"}, [
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Simple standart"),
          h("p", {}, "It's entire implementation takes 500 LOC, making it a simple standard you could implement yourself.")
        ]),
        h("img", {src: featureImage3, alt: "image3", style: s.featureImg})
      ])
    ]);
  }

}

class Usage extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {

    return h("div", {style: s.usageContainer}, [
      h("div", {style: fs.title}, "Usage"),
      h("div", {style: fs.subtitle }, "Formality is currently implemented as a small, dependency-free JavaScript library. It will futurely be implemented in other languages, and formalized in Agda/Coq. To use the current implementation:"), 
      h("div", {style: s.usageCodeContainer, "margin-top": "50px"}, [
        h("p", {style: {"color": '#6B747F' }}, "# Installs Formality"),
        h("p", {style: {"color": '#373D41' }}, "npm i -g formality "),
        h("br", {}, "     "),
        h("p", {style: {"color": '#6B747F' }}, "# Enters the repository"),
        h("p", {style: {"color": '#373D41' }}, "git clone https://github.com/maiavictor/formality"),
        h("p", {style: {"color": '#373D41' }}, "cd formality"),
        h("br", {}, "     "),
        h("p", {style: {"color": '#6B747F' }}, "# Checks and evaluates main"),
        h("p", {style: {"color": '#373D41' }}, "formality main"),
      ]),
    ]); 
  }
}

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return h("div", {style: s.footerContainer}, [
      h("div", {}, [
        h("p", {}, "Talk to us"),
        h("p", {}, "irc... "),
      ]),
      h("div", {}, [
        h("p", {}, "Social"),
        h("p", {}, "github image and link to page "),
      ]),
    ]); 
  }
}

// Other Pages

const Specification = () => (
  h("div", {}, "Specification")
);


window.onload = () => {
  render(h("div", {}, [h(Site)]), document.getElementById("main"));
  console.log("ok");
};
