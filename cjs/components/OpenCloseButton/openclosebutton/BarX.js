'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var OpenCloseButton_module = require('../OpenCloseButton.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const BarX = (props) => {
  const { transform } = props;
  return /* @__PURE__ */ React__default.createElement("span", { className: OpenCloseButton_module["default"].barX }, /* @__PURE__ */ React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", className: OpenCloseButton_module["default"].barXSVG }, /* @__PURE__ */ React__default.createElement(
    "rect",
    {
      x: "5",
      y: "21",
      width: "38",
      height: "6",
      rx: "2",
      ry: "2",
      fill: "currentColor",
      className: OpenCloseButton_module["default"].barXPath,
      style: {
        transform: transform ? "none" : "translateY(-30%)",
        opacity: transform ? 0 : 1
      }
    }
  )), /* @__PURE__ */ React__default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: OpenCloseButton_module["default"].barXSVG,
      style: {
        transform: transform ? "rotate(45deg)" : "none"
      }
    },
    /* @__PURE__ */ React__default.createElement("rect", { x: "5", y: "21", width: "38", height: "6", rx: "2", ry: "2", fill: "currentColor" })
  ), /* @__PURE__ */ React__default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: OpenCloseButton_module["default"].barXSVG,
      style: {
        transform: transform ? "rotate(-45deg)" : "none"
      }
    },
    /* @__PURE__ */ React__default.createElement("rect", { x: "5", y: "21", width: "38", height: "6", rx: "2", ry: "2", fill: "currentColor" })
  ), /* @__PURE__ */ React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", className: OpenCloseButton_module["default"].barXSVG }, /* @__PURE__ */ React__default.createElement(
    "rect",
    {
      x: "5",
      y: "21",
      width: "38",
      height: "6",
      rx: "2",
      ry: "2",
      fill: "currentColor",
      className: OpenCloseButton_module["default"].barXPath,
      style: {
        transform: transform ? "none" : "translateY(30%)",
        opacity: transform ? 0 : 1
      }
    }
  )));
};
BarX.classes = OpenCloseButton_module["default"];
BarX.displayName = "ioeri/openclosebutton/BarX";

exports.BarX = BarX;
//# sourceMappingURL=BarX.js.map
