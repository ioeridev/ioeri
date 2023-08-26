'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Core_module = require('./Core.module.css.js');
var cnx = require('../../core/utils/cnx.js');
var UnstyledButton = require('../UnstyledButton/UnstyledButton.js');
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
const Core = (props) => {
  const _a = props, {
    core,
    children,
    unstyled,
    className,
    style,
    c,
    bg,
    bd,
    hoverc,
    hoverbg,
    hoverbd,
    cursor,
    rd,
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
    h,
    w,
    mih,
    miw,
    mah,
    maw,
    ff,
    fz,
    fw,
    lh,
    lts,
    tt,
    ta,
    td,
    clicked,
    pos,
    centered,
    flex,
    display,
    direct,
    items,
    justify,
    content,
    gap,
    wrap,
    overflow,
    z
  } = _a, rest = __objRest(_a, [
    "core",
    "children",
    "unstyled",
    "className",
    "style",
    "c",
    "bg",
    "bd",
    "hoverc",
    "hoverbg",
    "hoverbd",
    "cursor",
    "rd",
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
    "h",
    "w",
    "mih",
    "miw",
    "mah",
    "maw",
    "ff",
    "fz",
    "fw",
    "lh",
    "lts",
    "tt",
    "ta",
    "td",
    "clicked",
    "pos",
    "centered",
    "flex",
    "display",
    "direct",
    "items",
    "justify",
    "content",
    "gap",
    "wrap",
    "overflow",
    "z"
  ]);
  const getStyleVars = (order) => {
    const styleVars = {};
    const arm_fz = fz === "h1" || fz === "h2" || fz === "h3" || fz === "h4" || fz === "h5" || fz === "h6" || fz === "xs" || fz === "sm" || fz === "md" || fz === "lg" || fz === "xl" || fz === "xxl" || fz === "xxxl";
    const hand_fz = arm_fz ? `var(--ioeri-fz-${fz})` : fz;
    const hand_fw = arm_fz ? `var(--ioeri-fw-${fz})` : fw;
    const hand_lh = arm_fz ? `var(--ioeri-lh-${fz})` : lh;
    switch (order) {
      case "core":
        if (!unstyled) {
          pos && (styleVars["--core-pos"] = String(pos));
          display && (styleVars["--core-dsp"] = String(display));
          wrap && (styleVars["--core-wrap"] = String(wrap));
          justify && (styleVars["--core-justify"] = String(justify));
          items && (styleVars["--core-items"] = String(items));
          content && (styleVars["--core-content"] = String(content));
          direct && (styleVars["--core-direct"] = String(direct));
          cursor && (styleVars["--core-csr"] = String(cursor));
          c && (styleVars["--core-c"] = String(c));
          bg && (styleVars["--core-bg"] = String(bg));
          bd && (styleVars["--core-bd"] = String(bd));
          overflow && (styleVars["--core-overfl"] = String(overflow));
          hoverc && (styleVars["--core-hover-c"] = String(hoverc));
          hoverbg && (styleVars["--core-hover-bg"] = String(hoverbg));
          hoverbd && (styleVars["--core-hover-bd"] = String(hoverbd));
          z && (styleVars["--core-z"] = String(z));
          styleVars["--core-gap"] = setVars.setVal(gap);
          styleVars["--core-rd"] = setVars.setVal(rd);
          styleVars["--core-h"] = setVars.setVal(h);
          styleVars["--core-w"] = setVars.setVal(w);
          styleVars["--core-p"] = setVars.setVal(p);
          styleVars["--core-m"] = setVars.setVal(m);
          styleVars["--core-pt"] = setVars.setVal(pt);
          styleVars["--core-pr"] = setVars.setVal(pr);
          styleVars["--core-pb"] = setVars.setVal(pb);
          styleVars["--core-pl"] = setVars.setVal(pl);
          styleVars["--core-py"] = setVars.setVal(py);
          styleVars["--core-px"] = setVars.setVal(px);
          styleVars["--core-mt"] = setVars.setVal(mt);
          styleVars["--core-mr"] = setVars.setVal(mr);
          styleVars["--core-mb"] = setVars.setVal(mb);
          styleVars["--core-ml"] = setVars.setVal(ml);
          styleVars["--core-my"] = setVars.setVal(my);
          styleVars["--core-mx"] = setVars.setVal(mx);
          styleVars["--core-min-h"] = setVars.setVal(mih);
          styleVars["--core-min-w"] = setVars.setVal(miw);
          styleVars["--core-max-h"] = setVars.setVal(mah);
          styleVars["--core-max-w"] = setVars.setVal(maw);
          ff && (styleVars["--core-ff"] = String(ff));
          tt && (styleVars["--core-tt"] = String(tt));
          ta && (styleVars["--core-ta"] = String(ta));
          td && (styleVars["--core-td"] = String(td));
          lts && (styleVars["--core-lts"] = String(lts));
          clicked && (styleVars["--core-clicked"] = String("var(--_core-clicked)"));
          if (!arm_fz) {
            if (core === "h1") {
              styleVars["--core-fz-default"] = setVars.setVal(fz || "var(--ioeri-fz-h1)");
              styleVars["--core-fw-default"] = String(fw || "var(--ioeri-fw-h1)");
              styleVars["--core-lh-default"] = String(lh || "var(--ioeri-lh-h1)");
            } else if (core === "h2") {
              styleVars["--core-fz-default"] = setVars.setVal(fz || "var(--ioeri-fz-h2)");
              styleVars["--core-fw-default"] = String(fw || "var(--ioeri-fw-h2)");
              styleVars["--core-lh-default"] = String(lh || "var(--ioeri-lh-h2)");
            } else if (core === "h3") {
              styleVars["--core-fz-default"] = setVars.setVal(fz || "var(--ioeri-fz-h3)");
              styleVars["--core-fw-default"] = String(fw || "var(--ioeri-fw-h3)");
              styleVars["--core-lh-default"] = String(lh || "var(--ioeri-lh-h3)");
            } else if (core === "h4") {
              styleVars["--core-fz-default"] = setVars.setVal(fz || "var(--ioeri-fz-h4)");
              styleVars["--core-fw-default"] = String(fw || "var(--ioeri-fw-h4)");
              styleVars["--core-lh-default"] = String(lh || "var(--ioeri-lh-h4)");
            } else if (core === "h5") {
              styleVars["--core-fz-default"] = setVars.setVal(fz || "var(--ioeri-fz-h5)");
              styleVars["--core-fw-default"] = String(fw || "var(--ioeri-fw-h5)");
              styleVars["--core-lh-default"] = String(lh || "var(--ioeri-lh-h5)");
            } else if (core === "h6") {
              styleVars["--core-fz-default"] = setVars.setVal(fz || "var(--ioeri-fz-h6)");
              styleVars["--core-fw-default"] = String(fw || "var(--ioeri-fw-h6)");
              styleVars["--core-lh-default"] = String(lh || "var(--ioeri-lh-h6)");
            }
          }
          if (fz === "h1") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
            styleVars["--core-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h2") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
            styleVars["--core-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h3") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
            styleVars["--core-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h4") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
            styleVars["--core-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h5") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
            styleVars["--core-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h6") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
            styleVars["--core-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "xs") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
          } else if (fz === "sm") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
          } else if (fz === "md") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
          } else if (fz === "lg") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
          } else if (fz === "xl") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
          } else if (fz === "xxl") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
          } else if (fz === "xxxl") {
            styleVars["--core-fz"] = setVars.setVal(hand_fz);
            styleVars["--core-fw"] = String(hand_fw);
          } else if (!arm_fz) {
            fz && (styleVars["--core-fz"] = setVars.setVal(fz));
            fw && (styleVars["--core-fw"] = String(fw));
            lh && (styleVars["--core-lh"] = String(lh));
          }
          if (centered || flex === "centered") {
            styleVars["--core-wrap"] = String(wrap || "wrap");
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-content"] = String(content || "center");
            styleVars["--core-justify"] = String(justify || "center");
            styleVars["--core-items"] = String(items || "center");
          } else if (flex === "left-center") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "flex-start");
            styleVars["--core-items"] = String(items || "center");
            styleVars["--core-content"] = String(content || "center");
          } else if (flex === "right-center") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "flex-end");
            styleVars["--core-items"] = String(items || "center");
            styleVars["--core-content"] = String(content || "center");
          } else if (flex === "top-center") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "center");
            styleVars["--core-items"] = String(items || "flex-start");
            styleVars["--core-content"] = String(content || "flex-start");
          } else if (flex === "bottom-center") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "center");
            styleVars["--core-items"] = String(items || "flex-end");
            styleVars["--core-content"] = String(content || "flex-end");
          } else if (flex === "left-start") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "flex-start");
            styleVars["--core-items"] = String(items || "flex-start");
            styleVars["--core-content"] = String(content || "flex-start");
          } else if (flex === "left-end") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "flex-start");
            styleVars["--core-items"] = String(items || "flex-end");
            styleVars["--core-content"] = String(content || "flex-end");
          } else if (flex === "right-start") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "flex-end");
            styleVars["--core-items"] = String(items || "flex-start");
            styleVars["--core-content"] = String(content || "flex-start");
          } else if (flex === "right-end") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "flex-end");
            styleVars["--core-items"] = String(items || "flex-end");
            styleVars["--core-content"] = String(content || "flex-end");
          } else if (flex === "between-center") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-between");
            styleVars["--core-items"] = String(items || "center");
            styleVars["--core-content"] = String(content || "space-between");
          } else if (flex === "between-start") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-between");
            styleVars["--core-items"] = String(items || "flex-start");
            styleVars["--core-content"] = String(content || "space-between");
          } else if (flex === "between-end") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-between");
            styleVars["--core-items"] = String(items || "flex-end");
            styleVars["--core-content"] = String(content || "space-between");
          } else if (flex === "around-center") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-around");
            styleVars["--core-items"] = String(items || "center");
            styleVars["--core-content"] = String(content || "space-around");
          } else if (flex === "around-start") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-around");
            styleVars["--core-items"] = String(items || "flex-start");
            styleVars["--core-content"] = String(content || "space-around");
          } else if (flex === "around-end") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-around");
            styleVars["--core-items"] = String(items || "flex-end");
            styleVars["--core-content"] = String(content || "space-around");
          } else if (flex === "evenly-center") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-evenly");
            styleVars["--core-items"] = String(items || "center");
            styleVars["--core-content"] = String(content || "stretch");
          } else if (flex === "evenly-start") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-evenly");
            styleVars["--core-items"] = String(items || "flex-start");
            styleVars["--core-content"] = String(content || "stretch");
          } else if (flex === "evenly-end") {
            styleVars["--core-dsp"] = String(display || "flex");
            styleVars["--core-justify"] = String(justify || "space-evenly");
            styleVars["--core-items"] = String(items || "flex-end");
            styleVars["--core-content"] = String(content || "stretch");
          }
        }
        return styleVars;
      default:
        return {};
    }
  };
  const rootclass = cnx.cnx([!unstyled && Core_module["default"].core], className);
  const rootstyle = __spreadValues(__spreadValues({}, getStyleVars("core")), style);
  if (core === "body") {
    const bodyProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("body", __spreadValues({ className: rootclass, style: rootstyle }, bodyProps), children);
  }
  if (core === "section") {
    const sectionProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("section", __spreadValues({ className: rootclass, style: rootstyle }, sectionProps), children);
  }
  if (core === "main") {
    const mainProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("main", __spreadValues({ className: rootclass, style: rootstyle }, mainProps), children);
  }
  if (core === "header") {
    const headerProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("header", __spreadValues({ className: rootclass, style: rootstyle }, headerProps), children);
  }
  if (core === "footer") {
    const footerProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("footer", __spreadValues({ className: rootclass, style: rootstyle }, footerProps), children);
  }
  if (core === "article") {
    const articleProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("article", __spreadValues({ className: rootclass, style: rootstyle }, articleProps), children);
  }
  if (core === "embed") {
    const embedProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("embed", __spreadValues({ className: rootclass, style: rootstyle }, embedProps));
  }
  if (core === "a") {
    const _b = rest, { href, target } = _b, aProps = __objRest(_b, ["href", "target"]);
    return /* @__PURE__ */ React__default.createElement("a", __spreadValues({ href, target, className: rootclass, style: rootstyle }, aProps), children);
  }
  if (core === "button") {
    const _c = rest, { onClick, href, useRouter, type } = _c, buttonProps = __objRest(_c, ["onClick", "href", "useRouter", "type"]);
    return /* @__PURE__ */ React__default.createElement(
      UnstyledButton.UnstyledButton,
      __spreadValues({
        type: type === "submit" ? "submit" : "button",
        href,
        useRouter,
        onClick,
        className: rootclass,
        style: rootstyle
      }, buttonProps),
      children
    );
  }
  if (core === "form") {
    const formProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("form", __spreadValues({ className: rootclass, style: rootstyle }, formProps), children);
  }
  if (core === "nav") {
    const navProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("nav", __spreadValues({ className: rootclass, style: rootstyle }, navProps), children);
  }
  if (core === "progress") {
    const progressProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("progress", __spreadValues({ className: rootclass, style: rootstyle }, progressProps), children);
  }
  if (core === "span") {
    const spanProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("span", __spreadValues({ className: rootclass, style: rootstyle }, spanProps), children);
  }
  if (core === "caption") {
    const captionProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("caption", __spreadValues({ className: rootclass, style: rootstyle }, captionProps), children);
  }
  if (core === "center") {
    const centerProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("center", __spreadValues({ className: rootclass, style: rootstyle }, centerProps), children);
  }
  if (core === "col") {
    const colProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("col", __spreadValues({ className: rootclass, style: rootstyle }, colProps));
  }
  if (core === "colgroup") {
    const colgroupProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("colgroup", __spreadValues({ className: rootclass, style: rootstyle }, colgroupProps), children);
  }
  if (core === "bdo") {
    const bdoProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("bdo", __spreadValues({ className: rootclass, style: rootstyle }, bdoProps), children);
  }
  if (core === "small") {
    const smallProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("small", __spreadValues({ className: rootclass, style: rootstyle }, smallProps), children);
  }
  if (core === "details") {
    const _d = rest, { open } = _d, detailsProps = __objRest(_d, ["open"]);
    return /* @__PURE__ */ React__default.createElement("details", __spreadValues({ open, className: rootclass, style: rootstyle }, detailsProps), children);
  }
  if (core === "summary") {
    const summaryProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("summary", __spreadValues({ className: rootclass, style: rootstyle }, summaryProps), children);
  }
  if (core === "menu") {
    const menuProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("menu", __spreadValues({ className: rootclass, style: rootstyle }, menuProps), children);
  }
  if (core === "menu-item") {
    const menuitemProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("menuitem", __spreadValues({ className: rootclass, style: rootstyle }, menuitemProps));
  }
  if (core === "ol") {
    const olProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("ol", __spreadValues({ className: rootclass, style: rootstyle }, olProps), children);
  }
  if (core === "ul") {
    const ulProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("ul", __spreadValues({ className: rootclass, style: rootstyle }, ulProps), children);
  }
  if (core === "li") {
    const liProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("li", __spreadValues({ className: rootclass, style: rootstyle }, liProps), children);
  }
  if (core === "div") {
    const divProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues({ className: rootclass, style: rootstyle }, divProps), children);
  }
  if (core === "strong") {
    const strongProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("strong", __spreadValues({ className: rootclass, style: rootstyle }, strongProps), children);
  }
  if (core === "h1") {
    const _e = rest, h1Props = __objRest(_e, ["role"]);
    return /* @__PURE__ */ React__default.createElement("h1", __spreadValues({ role: "presentation", className: rootclass, style: rootstyle }, h1Props), children);
  }
  if (core === "h2") {
    const h2Props = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("h2", __spreadValues({ className: rootclass, style: rootstyle }, h2Props), children);
  }
  if (core === "h3") {
    const h3Props = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("h3", __spreadValues({ className: rootclass, style: rootstyle }, h3Props), children);
  }
  if (core === "h4") {
    const h4Props = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("h4", __spreadValues({ className: rootclass, style: rootstyle }, h4Props), children);
  }
  if (core === "h5") {
    const h5Props = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("h5", __spreadValues({ className: rootclass, style: rootstyle }, h5Props), children);
  }
  if (core === "h6") {
    const h6Props = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("h6", __spreadValues({ className: rootclass, style: rootstyle }, h6Props), children);
  }
  if (core === "p") {
    const pProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("p", __spreadValues({ className: rootclass, style: rootstyle }, pProps), children);
  }
  if (core === "kbd") {
    const kbdProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("kbd", __spreadValues({ className: rootclass, style: rootstyle }, kbdProps), children);
  }
  if (core === "blockquote") {
    const blockquoteProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("blockquote", __spreadValues({ className: rootclass, style: rootstyle }, blockquoteProps), children);
  }
  if (core === "q") {
    const qProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("q", __spreadValues({ className: rootclass, style: rootstyle }, qProps), children);
  }
  if (core === "iframe") {
    const _f = rest, { title } = _f, iframeProps = __objRest(_f, ["title"]);
    return /* @__PURE__ */ React__default.createElement("iframe", __spreadValues({ title, className: rootclass, style: rootstyle }, iframeProps), children);
  }
  if (core === "label") {
    const _g = rest, { htmlFor } = _g, labelProps = __objRest(_g, ["htmlFor"]);
    return /* @__PURE__ */ React__default.createElement("label", __spreadValues({ className: rootclass, style: rootstyle, htmlFor }, labelProps), children);
  }
  if (core === "input") {
    const inputProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("input", __spreadValues({ className: rootclass, style: rootstyle }, inputProps));
  }
  if (core === "fieldset") {
    const fieldsetProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("fieldset", __spreadValues({ className: rootclass, style: rootstyle }, fieldsetProps), children);
  }
  if (core === "legend") {
    const legendProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("legend", __spreadValues({ className: rootclass, style: rootstyle }, legendProps), children);
  }
  if (core === "textarea") {
    const textareaProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("textarea", __spreadValues({ className: rootclass, style: rootstyle }, textareaProps));
  }
  if (core === "img") {
    const _h = rest, { alt } = _h, imgProps = __objRest(_h, ["alt"]);
    return /* @__PURE__ */ React__default.createElement("img", __spreadValues({ alt, className: rootclass, style: rootstyle }, imgProps));
  }
  if (core === "svg") {
    const svgProps = __objRest(rest, []);
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues({ className: rootclass, style: rootstyle }, svgProps), children);
  }
  if (core === "audio") {
    const _i = rest, { srcLang, label = "" } = _i, audioProps = __objRest(_i, ["srcLang", "label"]);
    return /* @__PURE__ */ React__default.createElement("audio", __spreadValues({ className: rootclass, style: rootstyle }, audioProps), children, /* @__PURE__ */ React__default.createElement("track", { kind: "captions", srcLang, label }));
  }
  if (core === "video") {
    const _j = rest, { srcLang, label = "" } = _j, videoProps = __objRest(_j, ["srcLang", "label"]);
    return /* @__PURE__ */ React__default.createElement("video", __spreadValues({ className: rootclass, style: rootstyle }, videoProps), children, /* @__PURE__ */ React__default.createElement("track", { kind: "captions", srcLang, label }));
  }
  if (!core) {
    throw new Error(
      "Prop 'core' is required for core : component. You Must Define, like a core='div'!"
    );
  }
  return core;
};
Core.classes = Core_module["default"];
Core.displayName = "ioeri/Core";

exports.Core = Core;
//# sourceMappingURL=Core.js.map
