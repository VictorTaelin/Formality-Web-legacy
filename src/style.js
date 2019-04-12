const primaryColor = "#444053";
const secondaryColor = "#ffffff";

const gridContainer = {
  "display": "grid",
  "grid-row-gap": "30px",
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center",
  "width": "100%"
}

const gridItem = {
  "width": "100%",
  "height": "350px",
  "display": "flex",
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
  "margin-left" : "90px",
  "margin-top" : "10px", 
  "margin-bottom" : "10px"
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
  "height" : "29px", 
  "margin" : "30px 20px 20px",
  "border-bottom" : "1px solid #ffffff",
  "display" : "flex",
  "align-items" : "center",
  "font-size" : "15px",
  "font-family" : "Open Sans",
  "cursor": "pointer"
}

const topContainer = {
  "width": "100%",
  "height": "400px",
  "object-fit": "cover",
  "background-image": "url(src/images/formality-bg.jpg)",
  "background-repeat": "no-repeat, repeat",
  "background-size": "cover",
  "display": "flex",
  "flex-flow": "column nowrap",
  "justify-content": "flex-start",
  "align-items": "center"
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
  // "align-items" : "flex-start",
  "background-color": "#fff781",
  "height": "200px",
  // "object-fit": "cover",
  // container30size,
}

const usageImage = {
  "max-width": "100%",
  "height": "auto",
}

const footerContainer = {
  "background-color": "#00f781",
  "height": "200px",
}

const whiteRectangle = {
  "width" : "400px", // metade da tela
  "heigth" : "200px",
  "backgroundColor" : "#123fff",
}

export { primaryColor, secondaryColor,  gridContainer, gridItem, featureImg, logo, tabs, tabsOnFocus, 
        topContainer, tryItButton, usageContainer, usageImage,
        footerContainer, whiteRectangle };
