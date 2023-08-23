'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Loader_module = require('./Loader.module.css.js');
var Atomic = require('./loaders/Atomic.js');
var Beat = require('./loaders/Beat.js');
var Circle = require('./loaders/Circle.js');
var Orbit = require('./loaders/Orbit.js');
var Pacman = require('./loaders/Pacman.js');
var Pulse = require('./loaders/Pulse.js');
var Rises = require('./loaders/Rises.js');
var ClassicBuffer = require('./loaders/ClassicBuffer.js');
var ModernBuffer = require('./loaders/ModernBuffer.js');
var ClockWise = require('./loaders/ClockWise.js');
var CubeBox = require('./loaders/CubeBox.js');
var LineBar = require('./loaders/LineBar.js');
var LoadingText = require('./loaders/LoadingText.js');
var OrbitRotate = require('./loaders/OrbitRotate.js');
var SyncBars = require('./loaders/SyncBars.js');
var SyncDots = require('./loaders/SyncDots.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Loader = (props) => {
  const _a = props, { type = "circle", children, active, rd } = _a, rest = __objRest(_a, ["type", "children", "active", "rd"]);
  const TypeLoader = {
    atomic: Atomic.Atomic,
    beat: Beat.Beat,
    circle: Circle.Circle,
    orbit: Orbit.Orbit,
    pacman: Pacman.Pacman,
    pulse: Pulse.Pulse,
    rises: Rises.Rises,
    "classic-buffer": ClassicBuffer.ClassicBuffer,
    "modern-buffer": ModernBuffer.ModernBuffer,
    "clock-wise": ClockWise.ClockWise,
    "cube-box": CubeBox.CubeBox,
    "line-bar": LineBar.LineBar,
    "loading-text": LoadingText.LoadingText,
    "orbit-rotate": OrbitRotate.OrbitRotate,
    "sync-bars": SyncBars.SyncBars,
    "sync-dots": SyncDots.SyncDots
  }[type];
  const arm_rd = typeof rd === "number" ? `${rd}px` : rd;
  return /* @__PURE__ */ React__default.createElement("div", { className: `Loader-root ${Loader_module["default"].parent}` }, children, active && /* @__PURE__ */ React__default.createElement(
    "div",
    {
      className: `Loader-wrap ${Loader_module["default"].child}`,
      style: {
        width: children ? "calc(100% + 3px)" : void 0,
        height: children ? "calc(100% + 3px)" : void 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        cursor: children ? "not-allowed" : void 0,
        overflow: children ? "hidden" : void 0
      }
    },
    children && /* @__PURE__ */ React__default.createElement(
      "div",
      {
        className: `Loader-wrapp-for-children ${Loader_module["default"].wrapForChildren}`,
        style: { borderRadius: arm_rd || "var(--ioeri-rd-sm)" }
      }
    ),
    /* @__PURE__ */ React__default.createElement(TypeLoader, __spreadValues({}, rest))
  ));
};
Loader.classes = Loader_module["default"];
Loader.displayName = "ioeri/Loader";

exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map
