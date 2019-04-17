const primaryColor = "#444053";

const formalityName = {
  "font-size": "80px",
  "color": primaryColor,
  "margin-top": "200px"
}   

const formalitySubtitle = {
  "font-size": "25px",
  "font-family": 'Open Sans',
  "color": "#444053"
}

const title = {
  "width": "100%",
  "height": "100px",
  "display": "flex",
  "justify-content": "center",
  "font-size" : "40px",
  "align-items": "center",
  "font-family": "Open Sans",
  "color": primaryColor,
  "top": "25px",
  "position": "relative",
}

const text = {
  "padding": "40px",
  "font-size": "20px",
  "font-family": "Open Sans",
  "color": primaryColor,
}

const subtitle = {
  ...text, 
  // "margin-left" : "300px",
  // "margin-right" : "300px",
  "width": "900px",
  "margin-top": "20px",
  "text-align": "center"
}

export {title, formalityName, formalitySubtitle, text, subtitle};
