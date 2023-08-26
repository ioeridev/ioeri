import React from 'react';
import { Dots } from './openclosebutton/Dots.js';
import { PlusX } from './openclosebutton/PlusX.js';
import { BarX } from './openclosebutton/BarX.js';
import classes from './OpenCloseButton.module.css.js';
import { cnx } from '../../core/utils/cnx.js';
import { setRadius, setVal } from '../../core/utils/set-vars.js';

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
    mih,
    mah,
    miw,
    maw,
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
    "mih",
    "mah",
    "miw",
    "maw",
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
        styleVars["--oc-rd"] = setRadius(rd, `var(--oc-rd-${size})`);
        styleVars["--oc-h"] = String(h || `var(--oc-${size})`);
        styleVars["--oc-w"] = String(w || `var(--oc-${size})`);
        styleVars["--oc-p"] = setVal(p);
        styleVars.paddingTop = setVal(pt);
        styleVars.paddingRight = setVal(pr);
        styleVars.paddingBottom = setVal(pb);
        styleVars.paddingLeft = setVal(pl);
        styleVars.paddingBlock = setVal(py);
        styleVars.paddingInline = setVal(px);
        styleVars["--oc-m"] = setVal(m);
        styleVars.marginTop = setVal(mt);
        styleVars.marginRight = setVal(mr);
        styleVars.marginBottom = setVal(mb);
        styleVars.marginLeft = setVal(ml);
        styleVars.marginBlock = setVal(my);
        styleVars.marginInline = setVal(mx);
        t && (styleVars["--oc-t"] = setVal(t));
        r && (styleVars["--oc-r"] = setVal(r));
        b && (styleVars["--oc-b"] = setVal(b));
        l && (styleVars["--oc-l"] = setVal(l));
        mih && (styleVars["--oc-min-h"] = setVal(mih));
        miw && (styleVars["--oc-min-w"] = setVal(miw));
        mah && (styleVars["--oc-max-h"] = setVal(mah));
        maw && (styleVars["--oc-max-w"] = setVal(maw));
        ff && (styleVars["--oc-ff"] = String(ff));
        if (fz === "h1") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVal(hand_lh);
        } else if (fz === "h2") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVal(hand_lh);
        } else if (fz === "h3") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVal(hand_lh);
        } else if (fz === "h4") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVal(hand_lh);
        } else if (fz === "h5") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVal(hand_lh);
        } else if (fz === "h6") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
          styleVars["--oc-lh"] = setVal(hand_lh);
        } else if (fz === "xs") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "sm") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "md") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "lg") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "xl") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "xxl") {
          styleVars["--oc-fz"] = setVal(hand_fz);
          styleVars["--oc-fw"] = String(hand_fw);
        } else if (fz === "xxxl") {
          styleVars["--oc-fz"] = setVal(hand_fz);
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
  const rootclass = cnx(
    ["openclose-root", classes.openclose, classes.root],
    classNames == null ? void 0 : classNames.root,
    className
  );
  const rootstyle = __spreadValues(__spreadValues(__spreadValues({}, getOpenCloseStyleVars("openclose")), styles == null ? void 0 : styles.root), style);
  const wrapperclass = cnx(["openclose-wrapper", classes.wrapper], classNames == null ? void 0 : classNames.wrapper);
  const leftLabelclass = cnx(["openclose-leftLabel", classes.label], classNames == null ? void 0 : classNames.leftLabel);
  const innerclass = cnx(["openclose-inner", classes.inner], classNames == null ? void 0 : classNames.inner);
  const rightLabelclass = cnx(["openclose-rightLabel", classes.label], classNames == null ? void 0 : classNames.rightLabel);
  const Prop = {};
  Prop["data-type-openclose"] = `${type}`;
  clicked && (Prop["data-clicked"] = "true");
  leftLabel && (Prop["data-left-label"] = "true");
  rightLabel && (Prop["data-right-label"] = "true");
  const OPENCLOSETYPE = {
    dots: /* @__PURE__ */ React.createElement(Dots, { transform }),
    "plus-x": /* @__PURE__ */ React.createElement(PlusX, { transform }),
    "bar-x": /* @__PURE__ */ React.createElement(BarX, { transform })
  }[type];
  return /* @__PURE__ */ React.createElement(
    "button",
    __spreadValues(__spreadValues({
      type: "button",
      "data-button": "true",
      className: rootclass,
      style: rootstyle
    }, rest), Prop),
    /* @__PURE__ */ React.createElement("div", { className: wrapperclass, style: styles == null ? void 0 : styles.wrapper }, leftLabel && /* @__PURE__ */ React.createElement("span", { className: leftLabelclass, style: styles == null ? void 0 : styles.leftLabel }, leftLabel), /* @__PURE__ */ React.createElement("span", { className: innerclass, style: styles == null ? void 0 : styles.inner }, OPENCLOSETYPE), rightLabel && /* @__PURE__ */ React.createElement("span", { className: rightLabelclass, style: styles == null ? void 0 : styles.rightLabel }, rightLabel))
  );
};
OpenCloseButton.classes = classes;
OpenCloseButton.displayName = "ioeri/OpenCloseButton";

export { OpenCloseButton };
//# sourceMappingURL=OpenCloseButton.js.map
