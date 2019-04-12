const {Component, render} = require("inferno");
const {BrowserRouter, Route, Link} = require("inferno-router");
const h = require("inferno-hyperscript").h;
const Canvas = require("inferno-canvas-component-2");

const s = require('./style');
const fs = require("./font-style");

// Feature images
import featureImage1 from './images/feature1.png';
import featureImage2 from './images/feature2.png';
import featureImage3 from './images/feature3.png';
import logo from './images/logo-formality.png';

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

    return h("div", {}, [
      // Top menu
      h("div", {style: {"width": "100%", "display": "flex", "flex-flow": "row nowrap", "background-color": s.primaryColor, "color": s.secondaryColor}}, [
        h("img", {src: logo, alt: "logo", style: s.logo}),
        h("div", {style: {"width": "100%", "height": "30px", "margin-top": "10px", "display": "flex", "justify-content": "flex-end", "align-items": "center", "margin-right": "90px"}}, [
          h(Hover, {normalComponent: h("div", {style: s.tabs}, "Specification"), 
                    onFocusComponent: h("div", {style: s.tabsOnFocus}, "Specification")}),
          h(Hover, {normalComponent: h("div", {style: s.tabs}, "Try it!"), 
                    onFocusComponent: h("div", {style: s.tabsOnFocus}, "Try it!")})
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
        // h("div", {style: {"width": "100%", "height": "100px", "display": "flex", "justify-content": "center", "align-items": "flex-start", "font-size": "32px"}}, [
        //   "[install]"
        // ])
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


const buttonGetStartedNormal = {
  "font-weight": "normal"
}

const buttonGetStartedOnFocus= {
  "font-weight": "bold"
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
    // return h("a", 
    // {style: this.setState(this.state.style),
    //   onMouseEnter: () => {
    //     this.setState(this.state.style = buttonGetStartedOnFocus)
    //   },
    //   onMouseLeave: () => {
    //     this.setState(this.state.style = buttonGetStartedNormal)
    //   },
    //   onClick={handleClick}
    // });
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
  // NAO PODE usar CSS, pra isso, terei que criar uma variável pra cada estilo e aí as propriedade ficam sendo propriedade do objeto. 
  // chama {style: nome_da_variável} e aí o estilo é aplicado do mesmo jeito
  render() {
    return h("div", {style: s.gridContainer}, [
      h("div", {style: fs.title}, "Why use Formality?"),
      // First element
      h("div", {style: s.gridItem}, [
        h("div", {style: fs.text}, "text of first element on grid"),
        h("img", {src: featureImage1, alt: "image1", style: s.featureImg})
      ]),
      // Second element
      h("div", {style: s.gridItem}, [
        h("div", {style: fs.text}, "text of the second element on grid"),
        h("img", {src: featureImage2, alt: "image2", style: s.featureImg})
      ]),
      // Third element
      h("div", {style: s.gridItem}, [
        h("div", {style: fs.text}, "text of the third element on grid"),
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
      // h("img", {src: usageBg, alt: "usageBg", style: s.usageImage }),
      h("div", {style: fs.title}, "Usage"),
      h("div", {style: fs.subtitle }, "Formality is currently implemented as a small, dependency-free JavaScript library. It will futurely be implemented in other languages, and formalized in Agda/Coq. To use the current implementation:"), 
      h("div", {style: fs.usageCodeContainer}, [
        h("p", {style: {"color": '#6B747F', "font-family" : "Inconsolata"}}, "# Installs Formality"),
        h("p", {style: {"color": '#373D41', "font-family" : "Inconsolata"}}, "npm i -g formality "),
        h("p", {}, " "),
        h("p", {style: {"color": '#6B747F', "font-family" : "Inconsolata" }}, "# Enters the repository"),
        h("p", {style: {"color": '#373D41', "font-family" : "Inconsolata" }}, "git clone https://github.com/maiavictor/formality\u00A0cd formality"),
        h("p", {}, " "),
        h("p", {style: {"color": '#6B747F', "font-family" : "Inconsolata" }}, "# Checks and evaluates main"),
        h("p", {style: {"color": '#373D41', "font-family" : "Inconsolata" }}, "formality main"),
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
