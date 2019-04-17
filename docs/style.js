const primaryColor = "#444053";
const secondaryColor = "#ffffff";

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

const gridContainer = {
  "display": "flex",
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center",
}

const gridItem = {
  "display": "flex",
  "height": "350px",
  "width": "900px",
  // "margin-left": "100px", // max width of 1000, or 
  // "margin-right": "100px",
  "align-items": "center", 
  "font-size": "22px"
}

const featureImg =  {
  "border-radius": "8px",
  "width": "300px"
}

const logo = {
  "width" : "45px",
  "height" : "40px",
  "margin-left" : "130px",
  "margin-top" : "10px", 
  "margin-bottom" : "10px",
  "cursor": "pointer"
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

const tryItButton = {
  "width": "100px",
  "height": "100px",
  "background-color": secondaryColor, 
  "border-color": primaryColor,
  "color": "white", 
  "padding": "20px",
  "text-align": "center",
  "display": "inline-block", 
  "font-size": "32px", 
  "margin": "4px 2px",
  "cursor": "pointer"
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

const footerContainer = {
  "display": "flex",
  "margin-top": "20px",
  "margin-left": "130px",
  "font-size": "13px",
  "font-family": "Open Sans",
  "color": primaryColor,
  "flex-direction": "row",
  "justify-content": "space-between",
  "background-color": secondaryColor,
  "height": "100px",
  "width": "200px",
}

const githubIcon = {
  "width" : "20px",
  "height" : "20px",
  "margin-top" : "10px", 
  "cursor": "pointer"
}

export { formalityTitleContainer, primaryColor, secondaryColor,  gridContainer, gridItem, featureImg, logo, tabs, tabsOnFocus, 
        topContainer, tryItButton, usageContainer,
        footerContainer, usageCodeContainer, githubIcon };
