import React from 'react';
import { getLoaderStyleVars } from '../Loader.types.js';
import classes from '../Loader.module.css.js';
import { cnx } from '../../../core/utils/cnx.js';

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
  const rootS = __spreadValues(__spreadValues({}, getLoaderStyleVars("root", props)), style);
  const rootC = cnx([classes.root, classes.circle], className);
  return /* @__PURE__ */ React.createElement("span", { "data-loader-type": "circle", className: rootC, style: rootS });
};
Circle.classes = classes;
Circle.displayName = "ioeri/loader/Circle";

export { Circle };
//# sourceMappingURL=Circle.js.map
