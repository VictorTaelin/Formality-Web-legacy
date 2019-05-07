const {Component, render, linkEvent} = require("inferno");
const h = require("inferno-hyperscript").h;
const Canvas = require("inferno-canvas-component-2");

// Formality
const f = require("formality-lang");

// Style
const s = require('./style');
const fs = require("./font-style");

// MD Resources
const markdown = require("./markdown/test-template.md.js");
const ovMain = require("./markdown/overview/0.Overview.js");
const ovGettingStartedMD = require("./markdown/overview/1.GettingStarted.js");
const ovExamplesMD = require("./markdown/overview/2.Examples.js");
const ovFAQMD = require("./markdown/overview/3.FAQ.js");

// Pages
const pageHome = "home";
const pageDocumentation = "documentation";
const pageTryIt = "tryIt";
const pageDevelopment = "development";

const pageOverview = "overview";
const pageOVGettingStarted = "overview/getting-started";
const pageOVExamples = "overview/examples";
const pageOVFAQ = "overview/FAQ";
// TODO: add the other pages (Interaction Combinators, EAC, etc)


// Feature images
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
    switch (window.location.pathname) {   
      case "/"+pageHome: this.setState({page: pageHome}); break;
      case "/"+pageDocumentation: this.setState({page: pageDocumentation}); break;
      case "/"+pageTryIt: this.setState({page: pageTryIt}); break;

      case "/"+pageOverview: this.setState({page: pageOverview}); break;
      case "/"+pageOVGettingStarted: this.setState({page: pageOVGettingStarted}); break;
      
      // TODO: add the other pages (Interaction Combinators, EAC, etc)
      case "/"+pageDevelopment: this.setState({page: pageDevelopment}); break;
    }

    window.onpopstate = (event) => {
      if (event.state !== null) {
        var prevPage = event.state.page;
        if (this.state.page !== prevPage) {
          this.setState({page: prevPage});
        }
      } else { // go Home
        this.setState({page: pageHome});
      }
    }
  }

  onChangeInternalLink(nextPage) {
    if (this.state.page !== nextPage){
      history.pushState({page: nextPage}, "/"+nextPage, "/"+nextPage);
    }
    this.setState({page: nextPage});
    window.scrollTo(0, 0);
  }

  render() {
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

    const genericContentContainer = { "min-height": "1450px", "flex-direction": "column", "margin-bottom": "60px"}
    // Top menu
    var topMenu = h("div", {style: {"width": "100%", "display": "flex", "flex-flow": "row nowrap", "background-color": s.primaryColor, "color": s.secondaryColor}}, [
      h(Logo, {onClick: () => {
        if (this.state.page !== pageHome) {
          this.setState({page: pageHome});
          history.pushState({page: pageHome}, "/"+pageHome, "/"+pageHome);
        }
      }}),
      h("div", {style: {"width": "100%", "height": "30px", "margin-top": "10px", "display": "flex", "justify-content": "flex-end", "align-items": "center", "margin-right": "200px"}}, [
        h(Tab, {title: "Overview", isCurrentPage: this.state.page === pageOverview,
                onClick: () => {
                  this.setState({page: pageOverview});
                  if (this.state.page !== pageOverview) {        
                    history.pushState({page: pageOverview}, "/"+pageOverview, "/"+pageOverview);
                  }
                }
              }),
        h(Tab, {title: "Documentation", isCurrentPage: this.state.page === pageDocumentation,
                onClick: () => {
                  this.setState({page: pageDocumentation});
                  if (this.state.page !== pageDocumentation) {
                    history.pushState({page: pageDocumentation}, "/"+pageDocumentation, "/"+pageDocumentation);
                  }
                }
              }),
        h(Tab, {title: "Try it!", isCurrentPage: this.state.page === pageTryIt,
                onClick: () => {
                    this.setState({page: pageTryIt});
                    if (this.state.page !== pageTryIt) {                     
                      history.pushState({page: pageTryIt}, "/"+pageTryIt, "/"+pageTryIt);
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

        h(Introduction),
        h(WhyGrid, {changePage: this.onChangeInternalLink.bind(this)}),
        h(Usage),
        h(Footer)
      ]);

    // ============= Overview Pages =============
    } else if (this.state.page === pageOverview ||
      this.state.page === pageOVGettingStarted ||
      this.state.page === pageOVExamples ||
      this.state.page === pageOVFAQ) {
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        topMenu,
        h("div", {style: genericContentContainer}, [
         h(Overview, {page: this.state.page, changePage: this.onChangeInternalLink.bind(this)})
        ]),
         h(FooterContainer),
      ]);


    // ============= Documentation Pages =============
    } else if (this.state.page === pageDocumentation) {
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        topMenu,
        h("div", {style: genericContentContainer}, [
          h(Documentation, {page: pageDocumentation, changePage: this.onChangeInternalLink.bind(this)})
         ]),
         h(FooterContainer),
      ]);

    // ============= Try it Page =============
    } else if (this.state.page === pageTryIt) {
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        topMenu,
        h("div", {style: {"height": "1000px", "flex-direction": "column", "justify-content": "center", "align-items": "center",}}, [
          h(TryIt)
        ]),
        h(FooterContainer),
      ]);


     // ============= Development Page =============
    } else if (this.state.page === pageDevelopment) {
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        topMenu,
        h("div", {style: genericContentContainer}, [
          h(DevelopmentPage)
        ]),
        h(FooterContainer),
      ]);
    }
  }
}

class Documentation extends Component {
  constructor(props){
    super(props)
    this.state = {page: props.page};
  }
  isCurrentPage(id) {
    return this.state.page === id;
  }
  render(){
    const contentNavigator = 
      h(ContentNavigatorContainer, {items: [
        h(ContentNavigatorItem, {title: "LEARN THE LANGUAGE", isMainTopic: true}),
        h(ContentNavigatorItem, {title: "Syntax", onClick: () => {
          if (this.state.page !== "") {
            // this.setState({ page: pageOVGettingStarted });
            // history.pushState({ page: pageOVGettingStarted }, "/"+pageOVGettingStarted, "/"+pageOVGettingStarted);
          }
        }, isCurrentPage: this.isCurrentPage(pageOVGettingStarted)}),
        h(ContentNavigatorItem, {title: "Functions"}),
        h(ContentNavigatorItem, {title: "Erasure to EAC", onClick: () => {
          if (this.state.page !== "") {
            // this.setState({ page: pageOVFAQ });
            // history.pushState({ page: pageOVFAQ }, "/"+pageOVFAQ, "/"+pageOVFAQ);
          }
        }, isCurrentPage: this.isCurrentPage(pageOVFAQ)}),
        h(ContentNavigatorItem, {title: "Reduction Rules"}),
        h(ContentNavigatorItem, {title: "Typing rules"}),
      ]});

    const contentNavigatorStyle = {
      "margin-left": "200px", 
      "margin-right": "200px", 
      "margin-top": "60px",
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "flex-start",
    }
   
    // if (this.props.page === OV) {
    //   console.log("Rendering OV");
    //   return h("div", {style: contentNavigatorStyle}, [
    //           contentNavigator,
    //           h(DocsMarkdownContainer, {mdResource: ovExamplesMD}) 
    //         ]);
    // } else {
      return h("div", {style: contentNavigatorStyle}, [
        contentNavigator,
        h(DocsMarkdownContainer, {mdResource: markdown})   
      ])
    // }

  }
}


// ============= Auxiliars =============

class Logo extends Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick;
    this.state = {};
  }
  render() {
    const logoStyle = {
      "width" : "45px",
      "height" : "40px",
      "margin-left" : "200px",
      "margin-top" : "10px", 
      "margin-bottom" : "10px",
      "cursor": "pointer"
    }
    return h("img", {src: logo, alt: "logo", style: logoStyle, onClick: this.onClick});
  }
}

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

// Link to a page inside of the website
class InternalLink extends Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick;
    this.title = props.title;
    this.color = props.color;
  }

  render(){
    if (this.props.color) {
      return h("span", {style: {"cursor": "pointer", "color": this.props.color}, onClick: this.onClick}, this.title);
    } else {
      return h("span", {style: {"cursor": "pointer", "color": s.linkColor}, onClick: this.onClick}, this.title);
    }
    
  }
}

// ------------ Content -------------
// A container to hold all elements used for the content navigation
class ContentNavigatorContainer extends Component {
  constructor(props) {
    super(props)
    this.items = props.items;
  }
  render(){
    return h("div", {style: {"width": "150px", "margin-right": "40px", "margin-top": "50px"}}, this.props.items)
  }
}

// A navigation item has a Content Title and load the text correspondent to that subject
class ContentNavigatorItem extends Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick;
    this.childs = props.childs;
    this.title = props.title;
    this.isMainTopic = props.isMainTopic;
    this.state = {isExpanded: props.isExpanded, isCurrentPage: props.isCurrentPage = false}
  }
  render(){
    const normalComponentStyle = {
      "font-family": "Open Sans", 
      "font-size": "14px", 
      "color": s.shadowBlue,
      "margin-bottom": "10px",
    }
    const onFocusComponentStyle = { ...normalComponentStyle, "cursor": "pointer", "color": s.primaryColor}

    if (this.props.isMainTopic) {
      return h("p", {style: {...normalComponentStyle, "font-weight": "bold"}}, this.props.title);
    } else {
      if (this.props.isCurrentPage) {
        return h("p", {onClick: this.onClick, style: {...onFocusComponentStyle, "font-weight": "bold"}}, this.props.title);
      } else {
        return h(Hover, {normalComponent: h("p", {style: normalComponentStyle}, this.props.title), 
        onFocusComponent: h("p", {onClick: this.onClick, style: onFocusComponentStyle}, this.props.title)});
      }
    }
  }
}

// A markdown container to be used with the ContentNavigatorContainer structure
class DocsMarkdownContainer extends Component {
  constructor(props){
    super(props)
    this.mdResource = props.mdResource;
  }

  render() {
    return h("div", {style: {"flex-direction": "column", "justify-content": "center", "font-family": "Open Sans", "color": "#373530", "line-height": "1.6"}}, this.props.mdResource)
  }
}

// ============= Home Page =============

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
          h("p", {style: {"margin-top": "5px", "margin-bottom": "8px"}}, "This opens doors for use-cases that are only limited by your imagination!"),
          h(InternalLink, {title: "Read more...", onClick: this.onChangeLink.bind(this, pageDevelopment), color: s.primaryColor }),
        ]),
        h("img", {src: featureImage1, alt: "image1", style: featureImg})
      ]),
      // Second element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"},[
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Fast"),
          h("p", {}, "No garbage-collection, optimal beta-reduction and a massively parallel GPU compiler make it insanely fast."),
          h("p", {style: {"margin-bottom": "8px"}}, "Massively parallel evaluation is possible due to Symmetric Interaction Calculus (SIC), a new model of computation that combines the best aspects of the Turing Machine and the λ-Calculus."),
          h(InternalLink, {title: "Read more...", onClick: this.onChangeLink.bind(this, pageDevelopment), color: s.primaryColor }),
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

// Content about how to use Formality
class Usage extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const usageContainer = {
      ...s.bigContainer,
      "background-image": "url(src/images/usageBg2.png)",
      "align-items": "center",
      "justify-content": "center",
    }
    
    const usageCodeContainer = {
      "margin-top": "20px",
      "heigth": "250px",
      "width" : "600px",
      "background-color": s.secondaryColor,
      "flex-direction": "column",
      "font-family" : "Inconsolata", 
      "font-size" : "15px",
      "padding-top": "20px",
      "padding-right": "20px",
      "padding-bottom": "20px",
      "padding-left": "20px"
    }

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

// ============= Try it =============
class TryIt extends Component {
  constructor(props){
    super(props)
    this.state = {currentCode: props.currentCode, title: "First hi!!"};
  }

  onClickExample(code){
    this.setState({currentCode: code});
    this.setState({title: "title is know updated!!"});
  }

  render(){
    const container = {
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "flex-start",
      "align-items": "flex-start",
      "height": "700px",
      "margin-right": "200px",
      "margin-left": "200px",
      "font-family": "Open Sans",
      "color": "#373530"
    }

    const title = {
      ...fs.title,
      "justify-content": "flex-start",
    }

    const text = {
      ...fs.text,
      "padding": "0px",
      "margin-top": "20px",
    }

    return h("div", {style: container}, [
      h("p", {style: title}, "Online editor"),
      h("p", {style: text}, [
        h("span", {}, "You can read more about Formality type system "),
        h(InternalLink, {title: "here "}), // TODO: add link
        h("span", {}, "and its installation "),
        h(InternalLink, {title: "here "}), // TODO: add link
      ]),
      h(Terminal)
    ] );
  }
}

class Terminal extends Component {
  constructor(props){
    super(props)
    this.state = {currentCode: props.currentCode, codeExample: props.codeExample, log: props.log, outputType: props.outputType, title: props.title};
  }

  // Get a string and tranform it into a Formality code. 
  // Then, executes an action to compute the normal form or check the type of the code
  runCode(actionType) {
    const code = this.state.currentCode;
    if (code !== undefined) {
      if (!(code.includes(".main") || code.includes(". main"))) {
        this.setState({log: "The code must include a '.main' statement. You can check some examples to see how it works :D"})
      } else {
        const log = actionType === "run" ? "Normal form: " : "Check type: ";
        this.setState({outputType: log});
        try {
          const defs = f.parse(this.state.currentCode); // gets a String and transform it into Formality code
          const result = actionType === "run" ? f.norm(f.Ref("main"), defs) : f.infer(f.Ref("main"), defs);
          this.setState({log: f.show(result)});
        } catch (e) { // Compiler errors
          this.setState({log: e});
        }
      }
    } else {
      this.setState({log: "Type some code to run it or try some of our examples :D"})
    }
  }

  // Update the currentState with the user's input
  handleInput(event) {
    this.setState({currentCode: event.target.value});
  }

  // Must override the code type by the user
  onClickExample(code) {
    this.setState({currentCode: code});
  }

  render() {
    const container = {
      "margin-top": "30px",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "flex-start",
      "align-items": "flex-start",
      "height": "700px",
      "width": "100%",
    }
    const containerTerminal = {
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "flex-start",
      "align-items": "flex-start",
      "height": "500px",
      "width": "100%",
      "border-style": "solid",
      "border-color": "#979797",
      "border-width": "1px"
    }

    const topBar = {
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "flex-end",
      "height": "40px",
      "width": "100%",
      "border-color": "#979797",
      "border-width": "1px",
      "align-items": "center",
    }

    const codeArea = {
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "flex-start",
      "width": "100%",
      "border-style": "solid none none none",
      "border-color": "#979797",
      "border-width": "1px",
      "font-family": "Inconsolata",
      "font-size" : "15px",
    }
    const input = {
      ...codeArea,
      "height": "500px",
    }
    const output = {
      ...codeArea,
      "height": "100px"
    }
    const textArea = {
      "outline": "none", 
      "resize": "none", 
      "width": "100%",
      "height": "310px",
      "margin": "5px",
      "font-family": "Inconsolata",
      "font-size" : "15px",
      "border-width": "0px",
    }

    const subtitle = {
      "margin-top": "30px",
      "margin-bottom": "10px",
      "font-size": "23px",
      "font-family": "Open Sans",
      "color": s.primaryColor, 
    }
    const codeHelloWorld = ` .main (Hello World)`

    const codeIdentity = `
  .ID
  : {x : Type} Type
  = [x] x

  .main
    (ID Type) 
    `

    return h("div", {style: container}, [
    h("div", {style: containerTerminal}, [
      // Header with buttons
      h("div", {style: topBar}, [
        h(TerminalButton, {title: "Run", onClick: () => { this.runCode("run") }}),
        h(TerminalButton, {title: "Check", onClick: () => { this.runCode() }}),
      ]), 
      // Code input
      h("div", {style: input}, [
        h("textarea", { "outline": "none", "resize": "none", "placeholder": "Type your code or try some of our examples", 
        style: textArea, "value": this.state.currentCode,
        onchange: this.handleInput.bind(this)}, this.state.currentCode),
      ]),
      // Log output
      h("div", {style: output}, [
        h("p", {style: {"margin-left": "10px"}}, [
          h("p", {}, this.state.outputType),
          h("p", {}, this.state.log),
        ])
      ])
    ]),
    h("p", {style: subtitle}, "Check out some examples:"),
      h("div", {style: {"color": s.primaryColor}}, [ // TODO: add an expansible area to contain explanation about the examples      
        h("p", {style: {"cursor": "pointer"}, onClick: () => { this.onClickExample(codeHelloWorld) }}, "1. Hello World"),
        h("p", {style: {"cursor": "pointer"}, onClick: () => { this.onClickExample(codeIdentity) }}, "2. Identity"),
      ])
    ]);
  }
}

// Receive the Terminal.state.currentCode, execute it and updates Terminal.state.log 
class TerminalButton extends Component {
  constructor(props){
    super(props)
    this.onClick = props.onClick;
    this.title = props.title;
  }

  render(){
    const style = {
      "cursor": "pointer",
      "width": "40px",
      "margin-right": "20px",
    }
    const onFocusStyle = {
      ... style,
      "color": "#8091A5"
    }
    // TODO: create a tooltip to help people understands what each button means
    return h(Hover, {normalComponent: h("div", {style: style, onClick: this.onClick}, this.props.title),
                    onFocusComponent: h("div", {style: onFocusStyle, onClick: this.onClick}, this.props.title),});
  }
}

// ============= Overview =============
class Overview extends Component {
  constructor(props) {
    super(props)
    this.changePage = props.changePage;
    this.state = {page: props.page};
  }
  isCurrentPage(id) {
    return this.props.page === id;
  }
  // When a Content Navigator Item is clicked, it must update this componenet and his father's state
  onChangePage(nextPage) {
    this.setState({page: nextPage}) // update this componenet current state
    this.props.changePage(nextPage); // update the father's state
  }

  render(){
    const contentNavigator = 
      h(ContentNavigatorContainer, {items: [
        h(ContentNavigatorItem, {title: "LEARNING", isMainTopic: true}),
        h(ContentNavigatorItem, {title: "Getting started", onClick: this.onChangePage.bind(this, pageOVGettingStarted), isCurrentPage: this.isCurrentPage(pageOVGettingStarted)}),
        h(ContentNavigatorItem, {title: "Examples", onClick: this.onChangePage.bind(this, pageOVExamples), isCurrentPage: this.isCurrentPage(pageOVExamples)}),
        h(ContentNavigatorItem, {title: "FAQ", onClick: this.onChangePage.bind(this, pageOVFAQ), isCurrentPage: this.isCurrentPage(pageOVFAQ)}),
        h(ContentNavigatorItem, {title: "CONTEXT", isMainTopic: true}),
        h(ContentNavigatorItem, {title: "Interaction Combinators"}),
        h(ContentNavigatorItem, {title: "Elementary Affine Calculus"}),
        h(ContentNavigatorItem, {title: "ESCoC"}),
      ]});

    const contentNavigatorStyle = {
      "margin-left": "200px", 
      "margin-right": "200px", 
      "margin-top": "60px",
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "flex-start",
    }

    // Relates a page with a markdown file
    const pageContent = {
      [pageOverview]: ovMain,
      [pageOVGettingStarted]: ovGettingStartedMD,
      [pageOVExamples]: ovExamplesMD,
      [pageOVFAQ]: ovFAQMD
    }

    const pagesOrder = [pageOverview, pageOVGettingStarted, pageOVExamples, pageOVFAQ];
    const nextPage = pagesOrder[pagesOrder.indexOf(this.state.page) + 1];
    const previousPage = (pagesOrder.indexOf(this.state.page) > 0) ? // check if has a previous page
                          pagesOrder[pagesOrder.indexOf(this.state.page) - 1] : // previous page
                          pageOverview;

    // ------ Rendering the content for each element on Content Navigator ------
    return h("div", {style: contentNavigatorStyle}, [
      contentNavigator,
      h("div", {style: {"flex-direction": "column"}}, [
        h(DocsMarkdownContainer, {mdResource: h("div", {key: this.props.page}, pageContent[this.props.page])}),
        h("div", {key: this.props.page, style: {"display": "flex", "justify-content": "space-between", "margin-top": "50px", "font-family": "Open Sans"}}, [
          h(InternalLink, { title: "< Previous", color: s.primaryColor, onClick: this.onChangePage.bind(this, previousPage) }),
          h(InternalLink, { title: "Next >", color: s.primaryColor, onClick: this.onChangePage.bind(this, nextPage) }),
        ])
    ])
      
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
    const footerContainer = {
      "display": "flex",
      "margin-top": "20px",
      "margin-left": "200px",
      "font-size": "13px",
      "font-family": "Open Sans",
      "color": s.primaryColor,
      "flex-direction": "row",
      "justify-content": "space-between",
      "background-color": s.secondaryColor,
      "height": "100px",
      "width": "600px",
    }

    const githubIcon = {
      "width" : "20px",
      "height" : "20px",
      "margin-top" : "5px", 
      "cursor": "pointer"
    }

    return h("div", {style: footerContainer}, [
      h("div", {}, [
        h("p", {}, "Talk to us "),
        h("p", {}, "(soon...) "),
      ]),
      h("div", {}, [
        h("p", {}, "Community"),
        h('span', {}, [
          h('a', {'href': 'https://github.com/moonad/Formality', 'text-decoration': 'none',}, h("img", {src: githubLogo, alt: "logo", style: githubIcon}),),
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
  render(h("div", {style: {"background-color": "#ffffff",}}, [h(Site)]), document.getElementById("main"));
};
