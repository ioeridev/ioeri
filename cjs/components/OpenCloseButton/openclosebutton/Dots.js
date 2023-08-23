'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Dots = (props) => {
  const { transform } = props;
  return /* @__PURE__ */ React__default.createElement("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ React__default.createElement(
    "circle",
    {
      cx: "5",
      cy: "7.5",
      r: "2",
      style: {
        transform: transform ? "translateX(53%) translateY(-7.8%) scale(1.25)" : "none"
      }
    }
  ), /* @__PURE__ */ React__default.createElement(
    "circle",
    {
      cx: "12",
      cy: "7.5",
      r: "2",
      style: {
        transform: transform ? "translateY(30%) translateX(-41.75%) scale(1.25)" : "none"
      }
    }
  ), /* @__PURE__ */ React__default.createElement(
    "circle",
    {
      cx: "19",
      cy: "7.5",
      r: "2",
      style: {
        transform: transform ? "translateY(30%) translateX(-19.75%) scale(1.25)" : "none"
      }
    }
  ), /* @__PURE__ */ React__default.createElement(
    "circle",
    {
      cx: "5",
      cy: "16.6",
      r: "2",
      style: {
        transform: transform ? "translateY(-36.25%) translateX(24%) scale(1.25)" : "none"
      }
    }
  ), /* @__PURE__ */ React__default.createElement(
    "circle",
    {
      cx: "12",
      cy: "16.6",
      r: "2",
      style: {
        transform: transform ? "translateY(-17.5%) translateX(16.75%) scale(1.25)" : "none"
      }
    }
  ), /* @__PURE__ */ React__default.createElement(
    "circle",
    {
      cx: "19",
      cy: "16.6",
      r: "2",
      style: {
        transform: transform ? "translateY(-55.25%) translateX(-78%) scale(1.25)" : "none"
      }
    }
  ));
};
Dots.displayName = "ioeri/openclosebutton/Dots";

exports.Dots = Dots;
//# sourceMappingURL=Dots.js.map
