'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Dots = require('./openclosebutton/Dots.js');
var PlusX = require('./openclosebutton/PlusX.js');
var BarX = require('./openclosebutton/BarX.js');
var OpenCloseButton_module = require('./OpenCloseButton.module.css.js');
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
const OpenCloseButton = (props) => {
  const _a = props, {
    transition,
    type = "dots",
    c,
    bg,
    bd,
    hoverc,
    hoverbg,
    hoverbd,
    size = "sm",
    cursor,
    rd,
    t,
    r,
    b,
    l,
    h,
    w,
    minH,
    maxH,
    minW,
    maxW,
    p,
    pt,
    pr,
    pb,
    pl,
    py,
    px,
    m,
    mt,
    mr,
    mb,
    ml,
    my,
    mx,
    fz,
    ff,
    fw,
    lh,
    transform,
    clicked,
    leftLabel,
    rightLabel,
    style,
    styles,
    className,
    classNames
  } = _a, rest = __objRest(_a, [
    "transition",
    "type",
    "c",
    "bg",
    "bd",
    "hoverc",
    "hoverbg",
    "hoverbd",
    "size",
    "cursor",
    "rd",
    "t",
    "r",
    "b",
    "l",
    "h",
    "w",
    "minH",
    "maxH",
    "minW",
    "maxW",
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "py",
    "px",
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "my",
    "mx",
    "fz",
    "ff",
    "fw",
    "lh",
    "transform",
    "clicked",
    "leftLabel",
    "rightLabel",
    "style",
    "styles",
    "className",
    "classNames"
  ]);
  const getOpenCloseStyleVars = (order) => {
    const styleVars = {};
    const arm_fz = fz === "h1" || fz === "h2" || fz === "h3" || fz === "h4" || fz === "h5" || fz === "h6" || fz === "xs" || fz === "sm" || fz === "md" || fz === "lg" || fz === "xl" || fz === "xxl" || fz === "xxxl";
    const hand_fz = arm_fz ? `var(--ioeri-fz-${fz})` : fz;
    const hand_fw = arm_fz ? `var(--ioeri-fw-${fz})` : fw;
    const hand_lh = arm_fz ? `var(--ioeri-lh-${fz})` : lh;
    switch (order) {
      case "openclose":
        styleVars["--oc-c"] = String(c != null ? c : "var(--oc-color-default)");
        styleVars["--oc-bg"] = String(bg != null ? bg : "var(--oc-bg-default)");
        styleVars["--oc-bd"] = String(bd || "var(--_oc-bd)");
        hoverc && (styleVars["--oc-hover-c"] = String(hoverc));
        hoverbg && (styleVars["--oc-hover-bg"] = String(hoverbg));
        hoverbd && (styleVars["--oc-hover-bd"] = String(hoverbd));
        styleVars["--oc-transition"] = String(transition != null ? transition : "var(--oc-transition-default)");
        styleVars["--oc-csr"] = String(cursor || "pointer");
        styleVars["--oc-rd"] = setVars.setRadius(rd, `var(--oc-rd-${size})`);
        styleVars["--oc-h"] = String(h || `var(--oc-${size})`);
        styleVars["--oc-w"] = String(w || `var(--oc-${size})`);
        styleVars["--oc-p"] = setVars.setVal(p);
        styleVars.paddingTop = setVars.setVal(pt);
        styleVars.paddingRight = setVars.setVal(pr);
        styleVars.paddingBottom = setVars.setVal(pb);
        styleVars.paddingLeft = setVars.setVal(pl);
        styleVars.paddingBlock = setVars.setVal(py);
        styleVars.paddingInline = setVars.setVal(px);
        styleVars["--oc-m"] = setVars.setVal(m);
        styleVars.marginTop = setVars.setVal(mt);
        styleVars.marginRight = setVars.setVal(mr);
        styleVars.marginBottom = setVars.setVal(mb);
        styleVars.marginLeft = setVars.setVal(ml);
        styleVars.marginBlock = setVars.setVal(my);
        styleVars.marginInline = setVars.setVal(mx);
        t && (styleVars["--oc-t"] = setVars.setVal(t));
        r && (styleVars["--oc-r"] = setVars.setVal(r));
        b && (styleVars["--oc-b"] = setVars.setVal(b));
        l && (styleVars["--oc-l"] = setVars.setVal(l));
        minH && (styleVars["--oc-min-h"] = setVars.setVal(minH));
        minW && (styleVars["--oc-min-w"] = setVars.setVal(minW));
        maxH && (styleVars["--oc-max-h"] = setVars.setVal(maxH));
        maxW && (styleVars["--oc-max-w"] = setVars.setVal(maxW));
        ff && (styleVars["--oc-ff"] = String(ff));
        if (fz === "h1") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVars.setVal(hand_lh);
        } else if (fz === "h2") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVars.setVal(hand_lh);
        } else if (fz === "h3") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVars.setVal(hand_lh);
        } else if (fz === "h4") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVars.setVal(hand_lh);
        } else if (fz === "h5") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVars.setVal(hand_lh);
        } else if (fz === "h6") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVars.setVal(hand_lh);
        } else if (fz === "xs") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "sm") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "md") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "lg") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "xl") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "xxl") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "xxxl") {
          styleVars["--oc-fz"] = setVars.setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (!arm_fz) {
          lh && (styleVars["--oc-lh"] = String(lh));
          fw && (styleVars["--oc-fw"] = String(fw));
          fz && (styleVars["--oc-fz"] = String(fz));
        }
        clicked && (styleVars["--oc-clicked"] = String("var(--_oc-clicked)"));
        return styleVars;
      default:
        return {};
    }
  };
  const rootclass = cnx.cnx(
    ["openclose-root", OpenCloseButton_module["default"].openclose, OpenCloseButton_module["default"].root],
    classNames == null ? void 0 : classNames.root,
    className
  );
  const rootstyle = __spreadValues(__spreadValues(__spreadValues({}, getOpenCloseStyleVars("openclose")), styles == null ? void 0 : styles.root), style);
  const wrapperclass = cnx.cnx(["openclose-wrapper", OpenCloseButton_module["default"].wrapper], classNames == null ? void 0 : classNames.wrapper);
  const leftLabelclass = cnx.cnx(["openclose-leftLabel", OpenCloseButton_module["default"].label], classNames == null ? void 0 : classNames.leftLabel);
  const innerclass = cnx.cnx(["openclose-inner", OpenCloseButton_module["default"].inner], classNames == null ? void 0 : classNames.inner);
  const rightLabelclass = cnx.cnx(["openclose-rightLabel", OpenCloseButton_module["default"].label], classNames == null ? void 0 : classNames.rightLabel);
  const Prop = {};
  Prop["data-type-openclose"] = `${type}`;
  clicked && (Prop["data-clicked"] = "true");
  leftLabel && (Prop["data-left-label"] = "true");
  rightLabel && (Prop["data-right-label"] = "true");
  const OPENCLOSETYPE = {
    dots: /* @__PURE__ */ React__default.createElement(Dots.Dots, { transform }),
    "plus-x": /* @__PURE__ */ React__default.createElement(PlusX.PlusX, { transform }),
    "bar-x": /* @__PURE__ */ React__default.createElement(BarX.BarX, { transform })
  }[type];
  return /* @__PURE__ */ React__default.createElement(
    "button",
    __spreadValues(__spreadValues({
      type: "button",
      "data-button": "true",
      className: rootclass,
      style: rootstyle
    }, rest), Prop),
    /* @__PURE__ */ React__default.createElement("div", { className: wrapperclass, style: styles == null ? void 0 : styles.wrapper }, leftLabel && /* @__PURE__ */ React__default.createElement("span", { className: leftLabelclass, style: styles == null ? void 0 : styles.leftLabel }, leftLabel), /* @__PURE__ */ React__default.createElement("span", { className: innerclass, style: styles == null ? void 0 : styles.inner }, OPENCLOSETYPE), rightLabel && /* @__PURE__ */ React__default.createElement("span", { className: rightLabelclass, style: styles == null ? void 0 : styles.rightLabel }, rightLabel))
  );
};
OpenCloseButton.classes = OpenCloseButton_module["default"];
OpenCloseButton.displayName = "ioeri/OpenCloseButton";

exports.OpenCloseButton = OpenCloseButton;
//# sourceMappingURL=OpenCloseButton.js.map
