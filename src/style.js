const primaryColor = "#444053";
const secondaryColor = "#ffffff";
const shadowBlue = "#8091A5";
const linkColor = "#0769D7";

import headerBg from './images/formality-bg-2.jpg';
import usageBg from './images/usageBg2.png';

import { text } from './font-style';

const formalityTitleContainer = {
  "width": "600px",
  "height": "60px",
  "object-fit": "cover",
  "background-repeat": "no-repeat, repeat",
  "background-size": "cover",
  "display": "flex",
  "flex-flow": "column nowrap",
  "justify-content": "flex-start",
  "align-items": "center",
}

const tabs = {
  "height" : "30px", 
  "margin" : "30px 20px 20px",
  "display" : "flex",
  "align-items" : "center",
  "font-size" : "15px",
  "font-family" : "Open Sans"
}

const tabsOnFocus = {
  "height" : "30px", 
  "margin" : "30px 20px 19px",
  "border-bottom" : "1px solid #ffffff",
  "display" : "flex",
  "align-items" : "center",
  "font-size" : "15px",
  "font-family" : "Open Sans",
  "cursor": "pointer"
}

const bigContainer = {
  "width": "100%",
  "height": "650px",
  "object-fit": "cover",
  "background-repeat": "no-repeat, repeat",
  "background-size": "cover",
  "display": "flex",
  "flex-direction": "column",
  "flex-flow": "column nowrap",
  "justify-content": "flex-start",
  "align-items": "center",
}

const topContainer = {
  ...bigContainer,
  "background-image": "url(src/images/formality-bg-2.jpg)",
}

const usageContainer = {
  ...bigContainer,
  "background-image": "url(src/images/usageBg2.png)",
}

const usageCodeContainer = {
  "margin-top": "20px",
  "heigth": "250px",
  "width" : "600px",
  "background-color": secondaryColor,
  "flex-direction": "column",
  "font-family" : "Inconsolata", 
  "font-size" : "15px",
  "padding-top": "20px",
  "padding-right": "20px",
  "padding-bottom": "20px",
  "padding-left": "20px"
}

const pageContentMD = {
  "font-family": 'Open Sans', 
  "color": "#373530", 
  "margin-left": "200px", 
  "margin-right": "200px", 
  "margin-top": "20px", 
  "line-height": "1.6",
}

export { formalityTitleContainer, primaryColor, secondaryColor, shadowBlue, linkColor, tabs, tabsOnFocus, 
        topContainer, usageContainer, pageContentMD,
         usageCodeContainer };
