const {Component, render, linkEvent} = require("inferno");

const h = require("inferno-hyperscript").h;
const Canvas = require("inferno-canvas-component-2");

const s = require('./style');
const fs = require("./font-style");

const markdown = require("./markdown/test-template.md.js");

// Pages
const pageHome = "home";
const pageWhyContent1 = "math-proof";
const pageWhyContent2 = "massive-paralelism";
const pageSpecification = "specification";
const pageTryIt = "tryIt";


// Feature images
import formalityTitle from './images/formality-title.png';
import featureImage1 from './images/math.png';
import featureImage2 from './images/fast.png';
import featureImage3 from './images/code.png';
import logo from './images/logo-formality.png';
import githubLogo from './images/github.png';
import developmentPageImage from './images/development-page.png';

class Site extends Component {
  constructor(props) {
    super(props)
    this.state = {page: "home"};
  }

  componentDidMount(){
    if (window.location.pathname === "/"+pageHome) {
      this.setState({page: pageHome});
    } else if (window.location.pathname === "/"+pageSpecification) {
      this.setState({page: pageSpecification});
    } else if (window.location.pathname === "/"+pageTryIt) {
      this.setState({page: pageTryIt});
    } else if (window.location.pathname === "/"+pageWhyContent1) {
      this.setState({page: pageWhyContent1});
    } else if (window.location.pathname === "/"+pageWhyContent2) {
      this.setState({page: pageWhyContent2});
    }

    window.onpopstate = (event) => {
      if (event.state !== null) {
        var prevPage = event.state.page;
        if (this.state.page !== prevPage) {
          this.setState({page: prevPage});
        }
      } else { // go Home
        this.setState({page: "home"});
      }
    }
  }

  onChangeInternalLink(nextPage){
    history.pushState({page: nextPage}, nextPage, nextPage);
    this.setState({page: nextPage});
    window.scrollTo(0, 0);
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

    const formalityTitleContainer = {
      "width": "650px",
      "height": "85px",
      "object-fit": "cover",
      "background-repeat": "no-repeat, repeat",
      "background-size": "cover",
      "display": "flex",
      "flex-flow": "column nowrap",
      "justify-content": "flex-start",
      "align-items": "center",
      "background-image": "url(src/images/formality-title.png)",
      "margin-top": "200px",
      "margin-bottom": "30px"
    }

      // Top menu
    var topMenu = h("div", {style: {"width": "100%", "display": "flex", "flex-flow": "row nowrap", "background-color": s.primaryColor, "color": s.secondaryColor}}, [
      h(Logo),
      h("div", {style: {"width": "100%", "height": "30px", "margin-top": "10px", "display": "flex", "justify-content": "flex-end", "align-items": "center", "margin-right": "90px"}}, [
        h(Tab, {title: "Home", isCurrentPage: this.state.page === pageHome,
                onClick: () => {
                  if (this.state.page !== pageHome) {
                    this.setState({page: pageHome});
                    history.pushState({page: pageHome}, pageHome, pageHome);
                  }
                }
              }),
        h(Tab, {title: "Specification", isCurrentPage: this.state.page === pageSpecification,
                onClick: () => {
                  if (this.state.page !== pageSpecification) {
                    this.setState({page: pageSpecification});
                    history.pushState({page: pageSpecification}, pageSpecification, pageSpecification);
                  }
                }
              }),
        h(Tab, {title: "Try it!", isCurrentPage: this.state.page === pageTryIt,
                onClick: () => {
                    if (this.state.page !== pageTryIt) {
                      this.setState({page: pageTryIt});
                      history.pushState({page: pageTryIt}, pageTryIt, pageTryIt);
                    }
                }
              })
      ]),
    ])

    // ============= Home =============
    if (this.state.page === pageHome || this.state.page === null ) {
      return h("div", [
        topMenu,
        // Top area: Formality title and subtitle
        h("div", {style: s.topContainer}, [
          h("div", {style: formalityTitleContainer}),
          h("div", {style: fs.formalitySubtitle}, [
            h("span", {style: {"font-family": 'Open Sans' }}, "An efficient\u00A0"),
            h("span", {style: {"font-family": 'Open Sans', "font-weight": "bold"}}, "proof"),
            h("span", {style: {"font-family": 'Open Sans' }}, "gramming language"),
          ]),
          h(Button, {title: "Try it", onClick: () => { this.setState({page: pageTryIt}); window.scrollTo(0, 0); }}),
        ]),

        // Canvas test
        // h(Canvas, {draw: drawCanvas, width: 200, height: 200, realtime: true})
        h(Introduction),
        h(WhyGrid, {changePage: this.onChangeInternalLink.bind(this)}),
        h(Usage,{}),
        h(Footer, {})
      ]);

    // ============= Specification Page =============
    } else if (this.state.page === pageSpecification) {
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        topMenu,
        h("div", {style: {"height": "1000px", "flex-direction": "column", "justify-content": "center", "align-items": "center",}}, [
          h("div ", {style: s.pageContentMD}, [
            markdown
          ]),
        ]),
         h(FooterContainer),
      ]);


    // ============= Try it Page =============
    } else if (this.state.page === pageTryIt) {
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        topMenu,
        h("div", {style: {"height": "1000px", "flex-direction": "column", "justify-content": "center", "align-items": "center",}}, [
          h("div ", {style: s.pageContentMD}, [
            h(DevelopmentPage)
          ]),
        ]),
        h(FooterContainer),
      ]);
    } else if (this.state.page === pageWhyContent1) {
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        topMenu,
        h("div", {style: {"height": "1000px", "flex-direction": "column", "justify-content": "center", "align-items": "center",}}, [
          h("div ", {style: s.pageContentMD}, [
            h(DevelopmentPage)
          ]),
        ]),
        h(FooterContainer),
      ]);
    } else if (this.state.page === pageWhyContent2) {
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        topMenu,
        h("div", {style: {"height": "1000px", "flex-direction": "column", "justify-content": "center", "align-items": "center",}}, [
          h("div ", {style: s.pageContentMD}, [
            h(DevelopmentPage)
          ]),
        ]),
        h(FooterContainer),
      ]);
    }
  }
}

class Logo extends Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick;
    this.state = {};
  }
  render() {
    return h("img", {src: logo, alt: "logo", style: s.logo, onClick: this.onClick});
  }
}

// ------ Auxiliars ----
class Tab extends Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick;
    this.isCurrentPage = props.isCurrentPage;
    this.title = props.title;
    this.state = {};
  }

  render() {
    var element;
    if (this.props.isCurrentPage) {
      element = h("div", {style: s.tabsOnFocus, onClick: this.onClick}, this.props.title)
    } else {
      element = h(Hover, {normalComponent: h("div", {style: s.tabs, isCurrentPage: this.isCurrentPage },  this.props.title),
                          onFocusComponent: h("div", {style: s.tabsOnFocus, onClick: this.onClick}, this.props.title)})
    }
    return element;
  }
}

class Button extends Component {
  constructor(props) {
    super(props)
    this.title = props.title;
    this.onClick = props.onClick;
    this.state = {};
  }
  render() {
    const tryItButton = {
      "width": "100px",
      "height": "50px",
      "display": "flex",
      "justify-content": "center",
      "font-size": "20px",
      "margin-top": "60px",
      "color": s.primaryColor,
      "border": "2px solid #444053",
      "border-radius": "25px",
      "background-color": s.secondaryColor,
    }

    const tryItButtonOnFocus = {
      ...tryItButton,
      "color": s.secondaryColor,
      "background-color": s.primaryColor,
      "cursor": "pointer",
    }

    return h(Hover, {normalComponent: h("button", {style: tryItButton, onClick: this.onClick}, this.props.title),
                    onFocusComponent: h("button", {style: tryItButtonOnFocus, onClick: this.onClick}, this.props.title)});
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

class DevelopmentPage extends Component {
  render() {
    const container = {
      "height": "500px",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center",
      "font-family": "Open Sans",
      "color": s.primaryColor,
      "font-size": "20px",
    }
    const image = {
      "width" : "400px",
      "height" : "300px",
    }
    return h("div", {style: container}, [
      h("p", {style: {"margin-bottom": "10px"}}, "We are still working on this page :)"),
      h("img", {src: developmentPageImage, alt: "development", style: image})
    ]);
  }
}
// -------------------

class Introduction extends Component {
  constructor(props){
    super(props)
    state: {}
  }

  render() {
    const container = {
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center",
      "height": "300px",
    }

    const subtitle = {
      ...fs.subtitle,
      "line-height": "1.8",
    }

    return h("div", {style: container }, [
        h("p", {style: subtitle}, `Formality is a new, massively parallel, minimal “proof”gramming language being developed at the Ethereum Foundation.
        It has an ambitious goal of redefining how programs, smart-contracts and even scientific papers are written, by combining several academic breakthroughs in a single tool that “just works”.`),
    ]);
  }
}

// Content about why use Formality
class WhyGrid extends Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick;
    this.state = {};
  }

  onChangeLink(nextPage) {
    this.props.changePage(nextPage);
  }

  render() {
    const gridContainer = {
      "display": "flex",
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

    const featureImg =  {
      "border-radius": "8px",
      "width": "300px"
    }

    return h("div", {style: gridContainer}, [
      h("div", {style: fs.title}, "Why use Formality?"),
      // First element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"}, [
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Secure"),
          h("p", {}, `Formality has a type system capable of proving mathematical theorems about its own programs.
          It's not only about preventing bugs or proving the theorem itself. We are talking about a whole new tool to work with,
          a language of specifications, one on which we can state precisely, in a way that a computer can understand, what an algorithm is supposed to do.  `),
          h("p", {style: {"margin-top": "5px"}}, "This opens doors for use-cases that are only limited by your imagination!"),
          h(InternalLink, {title: "Read more...", onClick: this.onChangeLink.bind(this, pageWhyContent1) }),
        ]),
        h("img", {src: featureImage1, alt: "image1", style: featureImg})
      ]),
      // Second element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"},[
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Fast"),
          h("p", {}, "No garbage-collection, optimal beta-reduction and a massively parallel GPU compiler make it insanely fast."),
          h("p", {}, "Massively parallel evaluation is possible due to Symmetric Interaction Calculus (SIC), a new model of computation that combines the best aspects of the Turing Machine and the λ-Calculus."),
          h(InternalLink, {title: "Read more...", onClick: this.onChangeLink.bind(this, pageWhyContent2) }),
        ]),
        h("img", {src: featureImage2, alt: "image2", style: featureImg})
      ]),
      // Third element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"}, [
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Simple standart"),
          h("p", {}, "Its reference implementation, including parser, stringifier, evaluator and type checker has about 1,000 lines of code. This is important to: "),
          h("p", {style: {"margin-top": "5px"}}, "1. Portability: we want Formality to be a library in many languages, just like JSON"),
          h("p", {style: {"margin-top": "5px"}}, "2. Trust: we don't want people to trust on a single, monolithic, bug-prone implementation"),
        ]),
        h("img", {src: featureImage3, alt: "image3", style: featureImg})
      ])
    ]);
  }

}

// Links to pages inside the App
class InternalLink extends Component {
  constructor(props){
    super(props)
    this.onClick = props.onClick;
    this.title = props.title;
    this.state = {};
  }
  render(){
    return h("p", {style: {"cursor": "pointer", "margin-top": "15px"}, onClick: this.onClick}, this.title);
  }
}

// Content about how to use Formality
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
        h("p", {style: {"color": '#373D41' }}, "npm i -g formality-lang"),
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

// Footer with a purple line on top of it. Used for pages that is not Home
class FooterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return h("div", {style: {'flex-direction': 'row'}}, [
             h("div", {style: {"background-color": s.primaryColor, "height": "1px"}}),
             h(Footer, {}),
           ])
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
        h("p", {}, "Talk to us "),
        h("p", {}, "(soon...) "),
      ]),
      h("div", {}, [
        h("p", {}, "Community"),
        h('span', {}, [
          h('a', {'href': 'https://github.com/moonad/Formality', 'text-decoration': 'none',}, h("img", {src: githubLogo, alt: "logo", style: s.githubIcon}),),
        ])
      ]),
      h('div', {style: {'flex-direction': 'column'}}, [
        h('p', {}, [
          h('span', {}, "Landing images by "),
          h('span', {}, [
            h('a', {'href': 'https://undraw.co', style: {'color': '#68c3d4', 'text-decoration': 'none'}}, "unDraw"),
          ])
        ]),
        h('p', {style: {'margin-top': '5px'}}, [
          h('span', {}, "Background photo by Paul Earle on "),
          h('span', {}, [
            h('a', {'href': 'https://unsplash.com/photos/wVjd0eWNqI8', style: {'color': '#68c3d4', 'text-decoration': 'none'} }, "Unsplash"),
          ])
        ])
      ]),
    ],
    );
  }
}


window.onload = () => {
  render(h("div", {}, [h(Site)]), document.getElementById("main"));
};
