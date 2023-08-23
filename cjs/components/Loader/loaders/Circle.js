'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Loader_types = require('../Loader.types.js');
var Loader_module = require('../Loader.module.css.js');
var cnx = require('../../../core/utils/cnx.js');

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
const Circle = (_a) => {
  var _b = _a, { className, style } = _b, props = __objRest(_b, ["className", "style"]);
  const rootS = __spreadValues(__spreadValues({}, Loader_types.getLoaderStyleVars("root", props)), style);
  const rootC = cnx.cnx([Loader_module["default"].root, Loader_module["default"].circle], className);
  return /* @__PURE__ */ React__default.createElement("span", { "data-loader-type": "circle", className: rootC, style: rootS });
};
Circle.classes = Loader_module["default"];
Circle.displayName = "ioeri/loader/Circle";

exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map
