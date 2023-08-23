import React from 'react';
import link from '../../../../../node_modules/next/link.js';
import classes from './NextButton.module.css.js';
import { cnx } from '../../core/utils/cnx.js';
import { Loader } from '../Loader/Loader.js';
import { Indicator } from '../Indicator/Indicator.js';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton.js';
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
const NextButton = (props) => {
  const _a = props, {
    h: h,
    w,
    p,
    py,
    px,
    pt,
    pr,
    pb,
    pl,
    m,
    my,
    mx,
    mt,
    mr,
    mb,
    ml,
    z,
    t,
    r,
    b,
    l,
    c,
    bg,
    bd,
    rd,
    display,
    items,
    pos,
    direct,
    fz,
    fw,
    ff,
    lts,
    ta,
    lh,
    cursor,
    justify: justify,
    indicator: indicator,
    indicatorActive,
    indicatorType = "bar",
    indicatorPos = "left",
    indicatorOffset,
    indicatorSize,
    indicatorColor = "#ffb03a",
    indicatorBordered,
    getStyleIndicator,
    getStyleLoader,
    core: core,
    leftSection,
    rightSection,
    children,
    className,
    classNames,
    style,
    styles,
    size = "sm",
    variant = "base",
    orientation = "horizontal",
    compact,
    clicked,
    gradient,
    loading,
    loaderType = "atomic"
  } = _a, rest = __objRest(_a, [
    // root
    "h",
    "w",
    "p",
    "py",
    "px",
    "pt",
    "pr",
    "pb",
    "pl",
    "m",
    "my",
    "mx",
    "mt",
    "mr",
    "mb",
    "ml",
    "z",
    "t",
    "r",
    "b",
    "l",
    "c",
    "bg",
    "bd",
    "rd",
    "display",
    "items",
    "pos",
    "direct",
    "fz",
    "fw",
    "ff",
    "lts",
    "ta",
    "lh",
    "cursor",
    // wrapper
    "justify",
    // indicator
    "indicator",
    "indicatorActive",
    "indicatorType",
    "indicatorPos",
    "indicatorOffset",
    "indicatorSize",
    "indicatorColor",
    "indicatorBordered",
    "getStyleIndicator",
    "getStyleLoader",
    // boolean ** others
    "core",
    "leftSection",
    "rightSection",
    "children",
    "className",
    "classNames",
    "style",
    "styles",
    "size",
    "variant",
    "orientation",
    "compact",
    "clicked",
    "gradient",
    "loading",
    "loaderType"
  ]);
  const getNextButtonStyleVars = (order) => {
    const styleVars = {};
    const filterSize = size.replace("fit-", "");
    const gradientDeg = (gradient == null ? void 0 : gradient.deg) ? `${gradient == null ? void 0 : gradient.deg} deg` : "45deg";
    const gradientFrom = (gradient == null ? void 0 : gradient.from) ? gradient == null ? void 0 : gradient.from : "transparent";
    const gradientVia = (gradient == null ? void 0 : gradient.via) ? `${gradient == null ? void 0 : gradient.via} ,` : "";
    const gradientTo = (gradient == null ? void 0 : gradient.to) ? gradient == null ? void 0 : gradient.to : "transparent";
    const armGradient = variant === "gradient" ? `linear-gradient(${gradientDeg}, ${gradientFrom}, ${gradientVia} ${gradientTo})` : bg || `var(--NextButton-bg-${variant})`;
    const armBackgound = gradient ? armGradient : bg || `var(--NextButton-bg-${variant})`;
    const armHover = gradient ? armGradient : `var(--NextButton-hover-${variant})`;
    const arm_fz = fz === "h1" || fz === "h2" || fz === "h3" || fz === "h4" || fz === "h5" || fz === "h6" || fz === "xs" || fz === "sm" || fz === "md" || fz === "lg" || fz === "xl" || fz === "xxl" || fz === "xxxl";
    const hand_fz = arm_fz ? `var(--ioeri-fz-${fz})` : fz;
    const hand_fw = arm_fz ? `var(--ioeri-fw-${fz})` : fw;
    const hand_lh = arm_fz ? `var(--ioeri-lh-${fz})` : lh;
    switch (order) {
      case "root":
        styleVars["--NextButton-bg"] = String(armBackgound);
        styleVars["--NextButton-hover"] = String(armHover);
        styleVars["--NextButton-h"] = String(h || `var(--NextButton-height-${size})`);
        styleVars["--NextButton-w"] = String(w || `var(--NextButton-width-${size})`);
        styleVars["--NextButton-px"] = String(px || `var(--NextButton-padding-x-${size})`);
        styleVars["--NextButton-py"] = String(py || `var(--NextButton-padding-y-${size})`);
        styleVars["--NextButton-rd"] = setRadius(rd, `var(--NextButton-rd-${filterSize})`);
        styleVars["--NextButton-ff"] = String(ff || "var(--_NextButton-ff)");
        styleVars["--NextButton-color"] = String(c || `var(--NextButton-c-${variant})`);
        variant === "outline" && (styleVars["box-shadow"] = "0 0 0 1px #fdd040");
        justify && (styleVars["--NextButton-justify"] = String(justify));
        bd && (styleVars["--NextButton-bd"] = String(bd));
        p && (styleVars["--NextButton-p"] = String(p));
        pt && (styleVars["--NextButton-pt"] = String(pt));
        pr && (styleVars["--NextButton-pr"] = String(pr));
        pb && (styleVars["--NextButton-pb"] = String(pb));
        pl && (styleVars["--NextButton-pl"] = String(pl));
        m && (styleVars["--NextButton-m"] = String(m));
        my && (styleVars["--NextButton-my"] = String(my));
        mx && (styleVars["--NextButton-mx"] = String(mx));
        mt && (styleVars["--NextButton-mt"] = String(mt));
        mr && (styleVars["--NextButton-mr"] = String(mr));
        mb && (styleVars["--NextButton-mb"] = String(mb));
        ml && (styleVars["--NextButton-ml"] = String(ml));
        z && (styleVars["--NextButton-z"] = String(z));
        t && (styleVars["--NextButton-t"] = String(t));
        r && (styleVars["--NextButton-r"] = String(r));
        b && (styleVars["--NextButton-b"] = String(b));
        l && (styleVars["--NextButton-l"] = String(l));
        display && (styleVars["--_NextButton-display"] = String(display));
        items && (styleVars["--NextButton-items"] = String(items));
        pos && (styleVars["--_NextButton-position"] = String(pos));
        direct && (styleVars["--NextButton-direction"] = String(direct));
        lts && (styleVars["--NextButton-lts"] = String(lts));
        ta && (styleVars["--NextButton-ta"] = String(ta));
        cursor && (styleVars["--_NextButton-cursor"] = String(cursor));
        if (fz === "h1") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
          styleVars["--NextButton-lh"] = setVal(hand_lh);
        } else if (fz === "h2") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
          styleVars["--NextButton-lh"] = setVal(hand_lh);
        } else if (fz === "h3") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
          styleVars["--NextButton-lh"] = setVal(hand_lh);
        } else if (fz === "h4") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
          styleVars["--NextButton-lh"] = setVal(hand_lh);
        } else if (fz === "h5") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
          styleVars["--NextButton-lh"] = setVal(hand_lh);
        } else if (fz === "h6") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
          styleVars["--NextButton-lh"] = setVal(hand_lh);
        } else if (fz === "xs") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
        } else if (fz === "sm") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
        } else if (fz === "md") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
        } else if (fz === "lg") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
        } else if (fz === "xl") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
        } else if (fz === "xxl") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
        } else if (fz === "xxxl") {
          styleVars["--NextButton-fz"] = setVal(hand_fz);
          styleVars["--NextButton-fw"] = String(hand_fw);
        } else if (!arm_fz) {
          styleVars["--NextButton-fz"] = String(fz || `var(--NextButton-fz-${filterSize})`);
          fw && (styleVars["--NextButton-fw"] = String(fw));
          lh && (styleVars["--NextButton-lh"] = String(lh));
        }
        return styleVars;
      default:
        return {};
    }
  };
  const rootClass = cnx(
    ["NextButton_root", `variant-${variant}`, `size-${size}`, classes.root],
    classNames == null ? void 0 : classNames.root,
    className
  );
  const rootStyle = __spreadValues(__spreadValues(__spreadValues({}, getNextButtonStyleVars("root")), styles == null ? void 0 : styles.root), style);
  const wrapperClass = cnx(["NextButton_wrapper", classes.wrapper], classNames == null ? void 0 : classNames.wrapper);
  const leftSectionClass = cnx(
    ["NextButton_left_section", classes.section],
    classNames == null ? void 0 : classNames.leftSection
  );
  const innerClass = cnx(["NextButton_inner", classes.inner], classNames == null ? void 0 : classNames.inner);
  const rightSectionClass = cnx(
    ["NextButton_right_section", classes.section],
    classNames == null ? void 0 : classNames.rightSection
  );
  const indicatorClass = cnx(["NextButton_Indicator", classes.wrapp], classNames == null ? void 0 : classNames.indicator);
  const additionalProps = {};
  loading && (additionalProps["data-loading"] = "true");
  clicked && (additionalProps["data-clicked"] = "true");
  indicator && (additionalProps["data-indicator"] = "true");
  props.disabled && (additionalProps["data-disabled"] = "true");
  !compact && (additionalProps["data-orientation"] = `${orientation}`);
  additionalProps["data-size"] = `${size}`;
  additionalProps.variant = variant;
  if (compact) {
    additionalProps["data-compact"] = "true";
  } else {
    if (!compact && leftSection) {
      additionalProps["data-left-section"] = "true";
    }
    if (!compact && rightSection) {
      additionalProps["data-right-section"] = "true";
    }
  }
  const nextButtonComponent = /* @__PURE__ */ React.createElement(React.Fragment, null, loading && /* @__PURE__ */ React.createElement("div", { className: `NextButton_Loader ${classes.wrapp}` }, /* @__PURE__ */ React.createElement(
    Loader,
    {
      active: loading,
      type: loading && (getStyleLoader == null ? void 0 : getStyleLoader.type) || loaderType,
      size: loading && (getStyleLoader == null ? void 0 : getStyleLoader.size) || "calc(var(--NextButton-h, calc(var(--Loader-size-md) + 8px )) - 8px)",
      c: loading && (getStyleLoader == null ? void 0 : getStyleLoader.color),
      style: styles == null ? void 0 : styles.loader,
      className: classNames == null ? void 0 : classNames.loader
    }
  )), /* @__PURE__ */ React.createElement("div", { className: wrapperClass, style: styles == null ? void 0 : styles.wrapper }, !compact && leftSection && /* @__PURE__ */ React.createElement("span", { "data-position": "left", className: leftSectionClass, style: styles == null ? void 0 : styles.leftSection }, !compact && leftSection), /* @__PURE__ */ React.createElement("span", { className: innerClass, style: styles == null ? void 0 : styles.inner }, children), !compact && rightSection && /* @__PURE__ */ React.createElement("span", { "data-position": "right", className: rightSectionClass, style: styles == null ? void 0 : styles.rightSection }, !compact && rightSection)), indicator && /* @__PURE__ */ React.createElement(
    Indicator,
    {
      repositioning: true,
      active: indicatorActive,
      position: (getStyleIndicator == null ? void 0 : getStyleIndicator.position) || indicatorPos,
      className: indicatorClass,
      type: (getStyleIndicator == null ? void 0 : getStyleIndicator.type) || indicatorType,
      bordered: indicatorBordered,
      borderColor: getStyleIndicator == null ? void 0 : getStyleIndicator.borderColor,
      borderWidth: getStyleIndicator == null ? void 0 : getStyleIndicator.borderWidth,
      c: (getStyleIndicator == null ? void 0 : getStyleIndicator.color) || indicatorColor,
      h: getStyleIndicator == null ? void 0 : getStyleIndicator.height,
      maxH: getStyleIndicator == null ? void 0 : getStyleIndicator.maxH,
      maxW: getStyleIndicator == null ? void 0 : getStyleIndicator.maxW,
      minH: getStyleIndicator == null ? void 0 : getStyleIndicator.minH,
      minW: getStyleIndicator == null ? void 0 : getStyleIndicator.minW,
      offset: (getStyleIndicator == null ? void 0 : getStyleIndicator.offset) || indicatorOffset,
      size: (getStyleIndicator == null ? void 0 : getStyleIndicator.size) || indicatorSize,
      style: styles == null ? void 0 : styles.indicator,
      w: getStyleIndicator == null ? void 0 : getStyleIndicator.width
    }
  ));
  if (core === "anchor") {
    const _b = rest, {
      onClick,
      href,
      target,
      as,
      rel = "noopener noreferrer"
    } = _b, anchorProps = __objRest(_b, [
      "onClick",
      "href",
      "target",
      "as",
      "rel"
    ]);
    return /* @__PURE__ */ React.createElement(
      link,
      __spreadValues(__spreadValues({
        href,
        rel,
        as,
        onClick,
        target,
        className: rootClass,
        style: rootStyle
      }, additionalProps), anchorProps),
      nextButtonComponent
    );
  }
  if (core === "button") {
    const _c = rest, { onClick, href, useRouter, type } = _c, buttonProps = __objRest(_c, ["onClick", "href", "useRouter", "type"]);
    return /* @__PURE__ */ React.createElement(
      UnstyledButton,
      __spreadValues(__spreadValues({
        type: type === "submit" ? "submit" : "button",
        href,
        useRouter,
        onClick,
        className: rootClass,
        style: rootStyle
      }, additionalProps), buttonProps),
      nextButtonComponent
    );
  }
  if (core === "div") {
    const divProps = __objRest(rest, []);
    return /* @__PURE__ */ React.createElement("div", __spreadValues(__spreadValues({ className: rootClass, style: rootStyle }, additionalProps), divProps), nextButtonComponent);
  }
  if (!core) {
    throw new Error(
      "Prop 'core' is required for NextButton core. You Must Define NextButton core!"
    );
  }
  return core;
};
NextButton.classes = classes;
NextButton.displayName = "ioeri/NextButton";

export { NextButton };
//# sourceMappingURL=NextButton.js.map
