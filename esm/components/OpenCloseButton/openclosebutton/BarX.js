import React from 'react';
import classes from '../OpenCloseButton.module.css.js';

const BarX = (props) => {
  const { transform } = props;
  return /* @__PURE__ */ React.createElement("span", { className: classes.barX }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", className: classes.barXSVG }, /* @__PURE__ */ React.createElement(
    "rect",
    {
      x: "5",
      y: "21",
      width: "38",
      height: "6",
      rx: "2",
      ry: "2",
      fill: "currentColor",
      className: classes.barXPath,
      style: {
        transform: transform ? "none" : "translateY(-30%)",
        opacity: transform ? 0 : 1
      }
    }
  )), /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: classes.barXSVG,
      style: {
        transform: transform ? "rotate(45deg)" : "none"
      }
    },
    /* @__PURE__ */ React.createElement("rect", { x: "5", y: "21", width: "38", height: "6", rx: "2", ry: "2", fill: "currentColor" })
  ), /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: classes.barXSVG,
      style: {
        transform: transform ? "rotate(-45deg)" : "none"
      }
    },
    /* @__PURE__ */ React.createElement("rect", { x: "5", y: "21", width: "38", height: "6", rx: "2", ry: "2", fill: "currentColor" })
  ), /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", className: classes.barXSVG }, /* @__PURE__ */ React.createElement(
    "rect",
    {
      x: "5",
      y: "21",
      width: "38",
      height: "6",
      rx: "2",
      ry: "2",
      fill: "currentColor",
      className: classes.barXPath,
      style: {
        transform: transform ? "none" : "translateY(30%)",
        opacity: transform ? 0 : 1
      }
    }
  )));
};
BarX.classes = classes;
BarX.displayName = "ioeri/openclosebutton/BarX";

export { BarX };
//# sourceMappingURL=BarX.js.map
