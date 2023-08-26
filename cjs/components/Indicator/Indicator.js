'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Indicator_module = require('./Indicator.module.css.js');
var cnx = require('../../core/utils/cnx.js');
var setVars = require('../../core/utils/set-vars.js');

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
const Indicator = (props) => {
  const _a = props, {
    h,
    w,
    c,
    size,
    repositioning,
    className,
    style,
    children,
    offset,
    bordered,
    borderColor,
    borderWidth,
    mih,
    mah,
    miw,
    maw,
    active,
    type = "dot",
    position = "right-start"
  } = _a, rest = __objRest(_a, [
    "h",
    "w",
    "c",
    "size",
    "repositioning",
    "className",
    "style",
    "children",
    "offset",
    "bordered",
    "borderColor",
    "borderWidth",
    "mih",
    "mah",
    "miw",
    "maw",
    "active",
    "type",
    "position"
  ]);
  const getIndicatorStyleVars = (order) => {
    const styleVars = {};
    const armIndicatorHeight = typeof size === "number" ? `${size}px` : setVars.setSize(size || "default", "indicator-h");
    const armIndicatorWidth = typeof size === "number" ? `${size}px` : setVars.setSize(size || "default", "indicator-w");
    const indicatorHeight = h != null ? h : armIndicatorHeight;
    const indicatorWidth = w != null ? w : armIndicatorWidth;
    const indicatorSpacing = typeof offset === "number" ? `${offset}px` : offset;
    const armIndicatorOffset = offset != null ? offset : indicatorSpacing;
    switch (order) {
      case "indicator":
        styleVars[`--indicator-${position}-h`] = String(indicatorHeight);
        styleVars[`--indicator-${position}-w`] = String(indicatorWidth);
        styleVars[`--indicator-${position}-t`] = String(
          armIndicatorOffset || "var(--indicator-offset)"
        );
        styleVars[`--indicator-${position}-r`] = String(
          armIndicatorOffset || "var(--indicator-offset)"
        );
        styleVars[`--indicator-${position}-b`] = String(
          armIndicatorOffset || "var(--indicator-offset)"
        );
        styleVars[`--indicator-${position}-l`] = String(
          armIndicatorOffset || "var(--indicator-offset)"
        );
        styleVars["--indicator-c"] = String(c != null ? c : "var(--indicator-color-default)");
        bordered && (styleVars["--indicator-bd-w"] = String(borderWidth || "1px"));
        bordered && (styleVars["--indicator-bd-c"] = String(borderColor || "#1a1b1e"));
        styleVars["--_indicator-min-h"] = String(mih != null ? mih : "var(--indicator-min-h)");
        styleVars["--_indicator-min-w"] = String(miw != null ? miw : "var(--indicator-min-w)");
        styleVars["--_indicator-max-h"] = String(mah != null ? mah : "var(--indicator-max-h)");
        styleVars["--_indicator-max-w"] = String(maw != null ? maw : "var(--indicator-max-w)");
        return styleVars;
      default:
        return {};
    }
  };
  const rootC = cnx.cnx(
    ["Indicator-root", Indicator_module["default"].indicator, !repositioning && Indicator_module["default"].root],
    className
  );
  const indicatorS = __spreadValues(__spreadValues({}, getIndicatorStyleVars("indicator")), style);
  const Props = {};
  Props["data-indicator"] = `${type}`;
  Props["indicator-position"] = `${position}`;
  active && (Props["indicator-active"] = "true");
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", __spreadValues(__spreadValues({ className: rootC, style: indicatorS }, rest), Props), children));
};
Indicator.classes = Indicator_module["default"];
Indicator.displayName = "ioeri/Indicator";

exports.Indicator = Indicator;
//# sourceMappingURL=Indicator.js.map
