const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const Canvas = require("inferno-canvas-component-2");
// import "normalize.css";
const s = require('./style');

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
      h("div", {style: {"display": "flex", "flex-flow": "row nowrap", "background-color": s.primaryColor, "color": s.secondaryColor}}, [
        // h("div", {style: {"position": "absolute", "width": "56px", "height": "56px", "font-size": "48px", "display": "flex", "justify-content": "flex-end", "align-items": "center"}}, ["ƛ"]),
        h("img", {src: logo, alt: "logo", style: s.logo}),
        h("div", {style: {"width": "100%", "height": "30px", "margin-top": "10px", "display": "flex", "justify-content": "flex-end", "align-items": "center", "margin-right": "70px"}}, [
          h("div", {style: {"height": "30px", "margin": "0px 20px", "border-bottom": "1px solid #ffffff", "display": "flex", "align-items": "center", "font-size": "15px"}}, "Specification"),
          h("div", {style: {"height": "30px", "margin": "0px 20px", "border-bottom": "1px solid #ffffff", "display": "flex", "align-items": "center", "font-size": "15px"}}, "Try it!"),
        ]),
      ]),

      // Top area
      h("div", {style: {"width": "100%", "height": "400px", "color": s.primaryColor}}, [
        h("div", {style: {"width": "100%", "height": "200px", "display": "flex", "justify-content": "center", "align-items": "flex-end", "font-size": "90px"}}, "FORMALITY"),
        h("div", {style: {"width": "100%", "height": "100px", "display": "flex", "justify-content": "center", "align-items": "flex-start", "font-size": "30px"}}, [
          h("span", {}, "An efficient\u00A0"),
          h("span", {style: {"font-weight": "bold"}}, "proof"),
          h("span", {}, "gramming language."),
        ]),
        h("div", {style: {"width": "100%", "height": "100px", "display": "flex", "justify-content": "center", "align-items": "flex-start", "font-size": "32px"}}, [
          "[install]"
        ])
      ]),

      // Canvas test
      // h(Canvas, {draw: drawCanvas, width: 200, height: 200, realtime: true})

      // Hover test
      h(Hover, {normalComponent: h("p", {}, "first component"), onFocusComponent: h("p", {}, "second component")}),
      
        // Grid test
      h(FeatureGrid, {})
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
// class ButtonGetStarted extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {linkTo: props.linkTo, style: props.style}
//   }

//   render() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('Button was clicked.');
//     }
//     return h("a", 
//     {style: this.setState(this.state.style),
//       onMouseEnter: () => {
//         this.setState(this.state.style = buttonGetStartedOnFocus)
//       },
//       onMouseLeave: () => {
//         this.setState(this.state.style = buttonGetStartedNormal)
//       },
//       onClick={handleClick}
//     });
//   }
// }

class Hover extends Component {
  constructor(props) {
    super(props)
    this.state = {isOnFocus: false, normalComponent: props.normalComponent, onFocusComponent: props.onFocusComponent};
  }

  render() {
    const component = this.state.isOnFocus ? this.state.normalComponent : this.state.onFocusComponent;

    return h("div", 
      {onMouseEnter: () => this.setState(this.state.isOnFocus = true), 
      onMouseLeave: () => this.setState(this.state.isOnFocus = false)}, 
      component);
  }
}

class FeatureGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  // NAO PODE usar CSS, pra isso, terei que criar uma variável pra cada estilo e aí as propriedade ficam sendo propriedade do objeto. 
  // chama {style: nome_da_variável} e aí o estilo é aplicado do mesmo jeito
  render() {
    return h("div", {style: s.gridContainer}, [
      // First element
      h("div", {style: s.gridItem}, [
        h("div", {style: s.featureTxt}, "text of first element on grid"),
        h("img", {src: featureImage1, alt: "image1", style: s.featureImg})
      ]),
      // Second element
      h("div", {style: s.gridItem}, [
        h("div", {style: s.featureTxt}, "text of the second element on grid"),
        h("img", {src: featureImage2, alt: "image2", style: s.featureImg})
      ]),
      // Third element
      h("div", {style: s.gridItem}, [
        h("div", {style: s.featureTxt}, "text of the third element on grid"),
        h("img", {src: featureImage3, alt: "image3", style: s.featureImg})
      ])
    ]);
  }

}


window.onload = () => {
  render(h("div", {}, [h(Site)]), document.getElementById("main"));
  console.log("ok");
};
