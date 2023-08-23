import React from 'react';
import classes from './Loader.module.css.js';
import { Atomic } from './loaders/Atomic.js';
import { Beat } from './loaders/Beat.js';
import { Circle } from './loaders/Circle.js';
import { Orbit } from './loaders/Orbit.js';
import { Pacman } from './loaders/Pacman.js';
import { Pulse } from './loaders/Pulse.js';
import { Rises } from './loaders/Rises.js';
import { ClassicBuffer } from './loaders/ClassicBuffer.js';
import { ModernBuffer } from './loaders/ModernBuffer.js';
import { ClockWise } from './loaders/ClockWise.js';
import { CubeBox } from './loaders/CubeBox.js';
import { LineBar } from './loaders/LineBar.js';
import { LoadingText } from './loaders/LoadingText.js';
import { OrbitRotate } from './loaders/OrbitRotate.js';
import { SyncBars } from './loaders/SyncBars.js';
import { SyncDots } from './loaders/SyncDots.js';

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
    atomic: Atomic,
    beat: Beat,
    circle: Circle,
    orbit: Orbit,
    pacman: Pacman,
    pulse: Pulse,
    rises: Rises,
    "classic-buffer": ClassicBuffer,
    "modern-buffer": ModernBuffer,
    "clock-wise": ClockWise,
    "cube-box": CubeBox,
    "line-bar": LineBar,
    "loading-text": LoadingText,
    "orbit-rotate": OrbitRotate,
    "sync-bars": SyncBars,
    "sync-dots": SyncDots
  }[type];
  const arm_rd = typeof rd === "number" ? `${rd}px` : rd;
  return /* @__PURE__ */ React.createElement("div", { className: `Loader-root ${classes.parent}` }, children, active && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `Loader-wrap ${classes.child}`,
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
    children && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `Loader-wrapp-for-children ${classes.wrapForChildren}`,
        style: { borderRadius: arm_rd || "var(--ioeri-rd-sm)" }
      }
    ),
    /* @__PURE__ */ React.createElement(TypeLoader, __spreadValues({}, rest))
  ));
};
Loader.classes = classes;
Loader.displayName = "ioeri/Loader";

export { Loader };
//# sourceMappingURL=Loader.js.map
