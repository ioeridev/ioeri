'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Animated_module = require('./Animated.module.css.js');
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
const Animated = (props) => {
  var _d, _e, _f, _g;
  const _a = props, {
    type,
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
    z,
    pointer,
    bdFlt
  } = _a, rest = __objRest(_a, [
    "type",
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
    "z",
    "pointer",
    "bdFlt"
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
          pos && (styleVars["--animated-pos"] = String(pos));
          display && (styleVars["--animated-dsp"] = String(display));
          wrap && (styleVars["--animated-wrap"] = String(wrap));
          justify && (styleVars["--animated-justify"] = String(justify));
          items && (styleVars["--animated-items"] = String(items));
          content && (styleVars["--animated-content"] = String(content));
          direct && (styleVars["--animated-direct"] = String(direct));
          cursor && (styleVars["--animated-csr"] = String(cursor));
          pointer && (styleVars["--animated-csr"] = String(cursor || "pointer"));
          c && (styleVars["--animated-c"] = String(c));
          bg && (styleVars["--animated-bg"] = String(bg));
          bd && (styleVars["--animated-bd"] = String(bd));
          overflow && (styleVars["--animated-overfl"] = String(overflow));
          bdFlt && (styleVars["--animated-bd-filter"] = String(bdFlt));
          hoverc && (styleVars["--animated-hover-c"] = String(hoverc));
          hoverbg && (styleVars["--animated-hover-bg"] = String(hoverbg));
          hoverbd && (styleVars["--animated-hover-bd"] = String(hoverbd));
          z && (styleVars["--animated-z"] = String(z));
          styleVars["--animated-gap"] = setVars.setVal(gap);
          styleVars["--animated-rd"] = setVars.setVal(rd);
          styleVars["--animated-h"] = setVars.setVal(h);
          styleVars["--animated-w"] = setVars.setVal(w);
          styleVars["--animated-p"] = setVars.setVal(p);
          styleVars["--animated-m"] = setVars.setVal(m);
          styleVars["--animated-pt"] = setVars.setVal(pt);
          styleVars["--animated-pr"] = setVars.setVal(pr);
          styleVars["--animated-pb"] = setVars.setVal(pb);
          styleVars["--animated-pl"] = setVars.setVal(pl);
          styleVars["--animated-py"] = setVars.setVal(py);
          styleVars["--animated-px"] = setVars.setVal(px);
          styleVars["--animated-mt"] = setVars.setVal(mt);
          styleVars["--animated-mr"] = setVars.setVal(mr);
          styleVars["--animated-mb"] = setVars.setVal(mb);
          styleVars["--animated-ml"] = setVars.setVal(ml);
          styleVars["--animated-my"] = setVars.setVal(my);
          styleVars["--animated-mx"] = setVars.setVal(mx);
          styleVars["--animated-min-h"] = setVars.setVal(mih);
          styleVars["--animated-min-w"] = setVars.setVal(miw);
          styleVars["--animated-max-h"] = setVars.setVal(mah);
          styleVars["--animated-max-w"] = setVars.setVal(maw);
          ff && (styleVars["--animated-ff"] = String(ff));
          tt && (styleVars["--animated-tt"] = String(tt));
          ta && (styleVars["--animated-ta"] = String(ta));
          td && (styleVars["--animated-td"] = String(td));
          lts && (styleVars["--animated-lts"] = String(lts));
          clicked && (styleVars["--animated-clicked"] = String("var(--_animated-clicked)"));
          if (type === "transform") {
            styleVars["--animated-pos"] = String(pos || "relative");
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-h"] = setVars.setVal(h || "auto");
            styleVars["--animated-w"] = setVars.setVal(w || "auto");
          }
          if (fz === "h1") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
            styleVars["--animated-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h2") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
            styleVars["--animated-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h3") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
            styleVars["--animated-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h4") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
            styleVars["--animated-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h5") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
            styleVars["--animated-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "h6") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
            styleVars["--animated-lh"] = setVars.setVal(hand_lh);
          } else if (fz === "xs") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
          } else if (fz === "sm") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
          } else if (fz === "md") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
          } else if (fz === "lg") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
          } else if (fz === "xl") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
          } else if (fz === "xxl") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
          } else if (fz === "xxxl") {
            styleVars["--animated-fz"] = setVars.setVal(hand_fz);
            styleVars["--animated-fw"] = String(hand_fw);
          } else if (!arm_fz) {
            fz && (styleVars["--animated-fz"] = setVars.setVal(fz));
            fw && (styleVars["--animated-fw"] = String(fw));
            lh && (styleVars["--animated-lh"] = String(lh));
          }
          if (centered || flex === "centered") {
            styleVars["--animated-wrap"] = String(wrap || "wrap");
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-content"] = String(content || "center");
            styleVars["--animated-justify"] = String(justify || "center");
            styleVars["--animated-items"] = String(items || "center");
          } else if (flex === "left-center") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "flex-start");
            styleVars["--animated-items"] = String(items || "center");
            styleVars["--animated-content"] = String(content || "center");
          } else if (flex === "right-center") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "flex-end");
            styleVars["--animated-items"] = String(items || "center");
            styleVars["--animated-content"] = String(content || "center");
          } else if (flex === "top-center") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "center");
            styleVars["--animated-items"] = String(items || "flex-start");
            styleVars["--animated-content"] = String(content || "flex-start");
          } else if (flex === "bottom-center") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "center");
            styleVars["--animated-items"] = String(items || "flex-end");
            styleVars["--animated-content"] = String(content || "flex-end");
          } else if (flex === "left-start") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "flex-start");
            styleVars["--animated-items"] = String(items || "flex-start");
            styleVars["--animated-content"] = String(content || "flex-start");
          } else if (flex === "left-end") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "flex-start");
            styleVars["--animated-items"] = String(items || "flex-end");
            styleVars["--animated-content"] = String(content || "flex-end");
          } else if (flex === "right-start") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "flex-end");
            styleVars["--animated-items"] = String(items || "flex-start");
            styleVars["--animated-content"] = String(content || "flex-start");
          } else if (flex === "right-end") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "flex-end");
            styleVars["--animated-items"] = String(items || "flex-end");
            styleVars["--animated-content"] = String(content || "flex-end");
          } else if (flex === "between-center") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-between");
            styleVars["--animated-items"] = String(items || "center");
            styleVars["--animated-content"] = String(content || "space-between");
          } else if (flex === "between-start") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-between");
            styleVars["--animated-items"] = String(items || "flex-start");
            styleVars["--animated-content"] = String(content || "space-between");
          } else if (flex === "between-end") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-between");
            styleVars["--animated-items"] = String(items || "flex-end");
            styleVars["--animated-content"] = String(content || "space-between");
          } else if (flex === "around-center") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-around");
            styleVars["--animated-items"] = String(items || "center");
            styleVars["--animated-content"] = String(content || "space-around");
          } else if (flex === "around-start") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-around");
            styleVars["--animated-items"] = String(items || "flex-start");
            styleVars["--animated-content"] = String(content || "space-around");
          } else if (flex === "around-end") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-around");
            styleVars["--animated-items"] = String(items || "flex-end");
            styleVars["--animated-content"] = String(content || "space-around");
          } else if (flex === "evenly-center") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-evenly");
            styleVars["--animated-items"] = String(items || "center");
            styleVars["--animated-content"] = String(content || "stretch");
          } else if (flex === "evenly-start") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-evenly");
            styleVars["--animated-items"] = String(items || "flex-start");
            styleVars["--animated-content"] = String(content || "stretch");
          } else if (flex === "evenly-end") {
            styleVars["--animated-dsp"] = String(display || "flex");
            styleVars["--animated-justify"] = String(justify || "space-evenly");
            styleVars["--animated-items"] = String(items || "flex-end");
            styleVars["--animated-content"] = String(content || "stretch");
          }
        }
        return styleVars;
      default:
        return {};
    }
  };
  if (type === "transform") {
    const _b = rest, {
      hold = 0.1,
      opacity,
      transform,
      transition,
      withoutOpacity,
      children
    } = _b, transformProps = __objRest(_b, [
      "hold",
      "opacity",
      "transform",
      "transition",
      "withoutOpacity",
      "children"
    ]);
    const transformRef = React.useRef(null);
    React.useEffect(() => {
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * hold;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(Animated_module["default"].transformAF);
            } else {
              entry.target.classList.remove(Animated_module["default"].transformAF);
            }
          });
        },
        { rootMargin: `0px 0px -${threshold}px 0px` }
      );
      if (transformRef.current) {
        observer.observe(transformRef.current);
      }
      return () => {
        if (transformRef.current) {
          observer.unobserve(transformRef.current);
        }
      };
    }, []);
    const getStyletransformVars = (order) => {
      const styleVars = {};
      const setTransformDelay = typeof (transform == null ? void 0 : transform.delay) === "number" ? `${transform == null ? void 0 : transform.delay}s` : transform == null ? void 0 : transform.delay;
      switch (order) {
        case "transform":
          if (!withoutOpacity) {
            styleVars["--transform-opacity-bf"] = String(opacity || "0");
            styleVars["--transform-opacity-af"] = String("1 !important");
          }
          styleVars["--transform-transition"] = String(
            transition || "opacity 0.5s ease, all 1s ease"
          );
          styleVars["--transform-before"] = String((transform == null ? void 0 : transform.before) || "scale(0)");
          styleVars["--transform-after"] = String((transform == null ? void 0 : transform.after) || "scale(1)");
          styleVars["--transform-origin"] = String((transform == null ? void 0 : transform.origin) || "bottom");
          styleVars["--transform-delay"] = String(setTransformDelay || "0.3s");
          return styleVars;
        default:
          return {};
      }
    };
    const transformCl = cnx.cnx(
      ["ioeri_Animated_Transform", Animated_module["default"].animated, Animated_module["default"].transformBF],
      className
    );
    const transformSt = __spreadValues(__spreadValues(__spreadValues({}, getStyleVars("core")), getStyletransformVars("transform")), style);
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues({ ref: transformRef, className: transformCl, style: transformSt }, transformProps), children);
  }
  if (type === "skew-card-hover") {
    const _c = rest, {
      children,
      classNames,
      styles,
      noShine,
      getStyleShine,
      offsetShine = 0,
      skew = 12
    } = _c, offsetShineProps = __objRest(_c, [
      "children",
      "classNames",
      "styles",
      "noShine",
      "getStyleShine",
      "offsetShine",
      "skew"
    ]);
    const [transform, setTransform] = React.useState({
      rotateX: 0,
      rotateY: 0
    });
    const [shineTransform, setShineTransform] = React.useState({
      translateX: 0,
      translateY: 0
    });
    const cardShineRef = React.useRef(null);
    const offsetShineWValue = ((_d = getStyleShine == null ? void 0 : getStyleShine.offset) == null ? void 0 : _d.x) || offsetShine + 50 || ((_e = cardShineRef.current) == null ? void 0 : _e.offsetWidth) || 0;
    const offsetShineHValue = ((_f = getStyleShine == null ? void 0 : getStyleShine.offset) == null ? void 0 : _f.y) || offsetShine || ((_g = cardShineRef.current) == null ? void 0 : _g.offsetHeight) || 0;
    const handleMouseMove = (e) => {
      const cardBounding = e.currentTarget.getBoundingClientRect();
      const posX = e.clientX - cardBounding.left;
      const posY = e.clientY - cardBounding.top;
      const cardWidth = cardBounding.width;
      const cardHeight = cardBounding.height;
      const rotateX = (posY - cardHeight / 2) / cardHeight * skew;
      const rotateY = (posX - cardWidth / 2) / cardWidth * skew;
      const translateX = posX - offsetShineWValue / (skew / 2);
      const translateY = posY - offsetShineHValue / (skew / 2);
      setTransform({ rotateX, rotateY });
      setShineTransform({ translateX, translateY });
    };
    const handleMouseLeave = () => {
      setTransform({ rotateX: 0, rotateY: 0 });
      setShineTransform({ translateX: 0, translateY: 0 });
    };
    React.useEffect(() => {
      const handleWindowResize = () => {
        const translateX = shineTransform.translateX - (offsetShineWValue - 650) / 2;
        const translateY = shineTransform.translateY - (offsetShineHValue - 650) / 2;
        setShineTransform({ translateX, translateY });
      };
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, [shineTransform, offsetShineWValue, offsetShineHValue]);
    const SCHRootClass = cnx.cnx(
      ["ioeri_Animated_skew-card-hover_root", Animated_module["default"].skewcardhover],
      classNames == null ? void 0 : classNames.root
    );
    const SCHInnerClass = cnx.cnx(
      ["ioeri_Animated_skew-card-hover_inner", Animated_module["default"].animated],
      className,
      classNames == null ? void 0 : classNames.inner
    );
    const SCHShineClass = cnx.cnx(["ioeri_Animated_skew-card-hover_shine"], classNames == null ? void 0 : classNames.shine);
    const arm_ShineFilter = (getStyleShine == null ? void 0 : getStyleShine.blur) || 80;
    const hand_ShineFilter = typeof arm_ShineFilter === "number" ? `blur(${arm_ShineFilter}px)` : `blur(${arm_ShineFilter})`;
    const hand_ShinSize = typeof (getStyleShine == null ? void 0 : getStyleShine.size) === "number" ? `${getStyleShine == null ? void 0 : getStyleShine.size}px` : getStyleShine == null ? void 0 : getStyleShine.size;
    const hand_Radius = typeof rd === "number" ? `${rd}px` : rd;
    const hand_ofsetShine = `translate(${shineTransform.translateX}px, ${shineTransform.translateY}px)`;
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
      "div",
      {
        className: SCHRootClass,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: __spreadValues({
          height: "auto",
          width: "auto",
          background: bg,
          zIndex: 1,
          display: "block !important",
          overflow: "hidden !important",
          position: "relative",
          perspective: "700px !important",
          transform: `perspective(700px) rotateX(${transform.rotateX}deg) rotateY(${-transform.rotateY}deg)`,
          backgroundRepeat: "no-repeat",
          transition: "transform 0.75s ease 0s",
          transformStyle: "preserve-3d",
          borderRadius: hand_Radius || "16px"
        }, styles == null ? void 0 : styles.root)
      },
      /* @__PURE__ */ React__default.createElement(
        "div",
        __spreadValues({
          className: SCHInnerClass,
          style: __spreadValues(__spreadValues(__spreadValues({
            zIndex: 1,
            position: "relative",
            borderRadius: hand_Radius || "16px",
            background: "none !important"
          }, getStyleVars("core")), style), styles == null ? void 0 : styles.inner)
        }, offsetShineProps),
        children,
        noShine ? null : /* @__PURE__ */ React__default.createElement(
          "div",
          {
            className: Animated_module["default"].wrapperShine,
            style: { borderRadius: hand_Radius || "16px", zIndex: -1 }
          },
          /* @__PURE__ */ React__default.createElement(
            "div",
            {
              suppressHydrationWarning: true,
              ref: cardShineRef,
              className: SCHShineClass,
              style: __spreadValues({
                transform: hand_ofsetShine,
                width: hand_ShinSize || "200px",
                height: hand_ShinSize || "200px",
                filter: hand_ShineFilter,
                backgroundColor: (getStyleShine == null ? void 0 : getStyleShine.color) || "#fab005c2",
                borderRadius: "9999px",
                opacity: transform.rotateX ? 1 : 0,
                willChange: "transform",
                position: "absolute",
                pointerEvents: "none",
                overflow: "hidden"
              }, styles == null ? void 0 : styles.shine)
            }
          )
        )
      )
    ));
  }
  if (type === "pop-over") {
    const _h = rest, {
      children,
      popover,
      onClose,
      variant = "unstyled",
      trigger = "hover",
      placement = "bottom",
      placementOffset,
      getStylePlacement,
      withArrow,
      arrowColor,
      classNames,
      styles
    } = _h, popoverProps = __objRest(_h, [
      "children",
      "popover",
      "onClose",
      "variant",
      "trigger",
      "placement",
      "placementOffset",
      "getStylePlacement",
      "withArrow",
      "arrowColor",
      "classNames",
      "styles"
    ]);
    const [show, setShow] = React.useState(false);
    const ref = React.useRef(null);
    const handleClick = () => {
      if (trigger === "click") {
        setShow(!show);
      }
    };
    const handleMouseEnter = () => {
      if (trigger === "hover") {
        setShow(true);
      }
    };
    const handleMouseLeave = () => {
      if (trigger === "hover") {
        setShow(false);
      }
    };
    React.useEffect(() => {
      const handleMouseDown = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
          onClose == null ? void 0 : onClose();
        }
      };
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          setShow(false);
          onClose == null ? void 0 : onClose();
        }
        if (event.key === "Enter" || event.key === " ") {
          handleClick();
        }
      };
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);
    const getStylePopOverVars = (order) => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      const styleVars = {};
      const handleheight = getStylePlacement == null ? void 0 : getStylePlacement.height;
      const handleheightVal = typeof handleheight === "number" ? `${handleheight}px` : handleheight;
      const handlewidth = getStylePlacement == null ? void 0 : getStylePlacement.width;
      const handlewidthVal = typeof handlewidth === "number" ? `${handlewidth}px` : handlewidth;
      const handletop = getStylePlacement == null ? void 0 : getStylePlacement.top;
      const handletopVal = typeof handletop === "number" ? `${handletop}px` : handletop;
      const handleright = getStylePlacement == null ? void 0 : getStylePlacement.right;
      const handlerightVal = typeof handleright === "number" ? `${handleright}px` : handleright;
      const handlebottom = getStylePlacement == null ? void 0 : getStylePlacement.bottom;
      const handlebottomVal = typeof handlebottom === "number" ? `${handlebottom}px` : handlebottom;
      const handleleft = getStylePlacement == null ? void 0 : getStylePlacement.left;
      const handleleftVal = typeof handleleft === "number" ? `${handleleft}px` : handleleft;
      const popoffset = (getStylePlacement == null ? void 0 : getStylePlacement.offset) || placementOffset;
      const popoffsetVal = typeof popoffset === "number" ? `${popoffset}px` : popoffset;
      const sizeArrow = (_a2 = getStylePlacement == null ? void 0 : getStylePlacement.arrow) == null ? void 0 : _a2.size;
      const sizeArrowVal = typeof sizeArrow === "number" ? `${sizeArrow}px` : sizeArrow;
      const PopOverFz = getStylePlacement == null ? void 0 : getStylePlacement.fz;
      const PoPOverFzVal = typeof sizeArrow === "number" ? `${PopOverFz}px` : PopOverFz;
      const handleArrowT = (_b2 = getStylePlacement == null ? void 0 : getStylePlacement.arrow) == null ? void 0 : _b2.t;
      const handleArrowR = (_c2 = getStylePlacement == null ? void 0 : getStylePlacement.arrow) == null ? void 0 : _c2.r;
      const handleArrowB = (_d2 = getStylePlacement == null ? void 0 : getStylePlacement.arrow) == null ? void 0 : _d2.b;
      const handleArrowL = (_e2 = getStylePlacement == null ? void 0 : getStylePlacement.arrow) == null ? void 0 : _e2.l;
      const handleArrowColor = ((_f2 = getStylePlacement == null ? void 0 : getStylePlacement.arrow) == null ? void 0 : _f2.c) || arrowColor;
      const handleBGPopOver = getStylePlacement == null ? void 0 : getStylePlacement.bg;
      switch (order) {
        case "popover":
          PopOverFz && (styleVars["--po-fz"] = String(PoPOverFzVal));
          handleheight && (styleVars.height = String(handleheightVal));
          handlewidth && (styleVars.width = String(handlewidthVal));
          handletop && (styleVars["--po-handle-t"] = String(handletopVal));
          handleright && (styleVars["--po-handle-r"] = String(handlerightVal));
          handlebottom && (styleVars["--po-handle-b"] = String(handlebottomVal));
          handleleft && (styleVars["--po-handle-l"] = String(handleleftVal));
          handleArrowColor && (styleVars["--bg-popoverArrow"] = String(handleArrowColor));
          handleBGPopOver && (styleVars["--po-bg"] = String(handleBGPopOver));
          popoffset && (styleVars["--po-plc-offs"] = String(popoffsetVal));
          sizeArrow && (styleVars["--po-sz-arrow"] = String(sizeArrowVal));
          handleArrowT && (styleVars["--arrow-of-t"] = String(handleArrowT));
          handleArrowR && (styleVars["--arrow-of-r"] = String(handleArrowR));
          handleArrowB && (styleVars["--arrow-of-b"] = String(handleArrowB));
          handleArrowL && (styleVars["--arrow-of-l"] = String(handleArrowL));
          trigger === "hover" && (styleVars["--po-plc-cntn"] = String('""'));
          return styleVars;
        default:
          return {};
      }
    };
    const additionalProps = {};
    show && (additionalProps["data-popover-open"] = "true");
    additionalProps["data-trigger"] = `${trigger}`;
    additionalProps["data-placement"] = `${(getStylePlacement == null ? void 0 : getStylePlacement.placement) || placement}`;
    additionalProps["data-variant"] = `${(getStylePlacement == null ? void 0 : getStylePlacement.variant) || variant}`;
    return /* @__PURE__ */ React__default.createElement(
      "div",
      __spreadValues({
        ref,
        className: cnx.cnx(["ioeri-Animated pop-over-root", Animated_module["default"].popoverroot], classNames == null ? void 0 : classNames.root),
        style: styles == null ? void 0 : styles.root
      }, additionalProps),
      /* @__PURE__ */ React__default.createElement(
        "div",
        __spreadValues({
          onClick: handleClick,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          "aria-label": `trigger-${trigger}`,
          onKeyDown: (e) => e.key === "Enter" && handleClick(),
          role: "button",
          tabIndex: 0,
          className: cnx.cnx(
            [
              "ioeri-Animated pop-over-trigger",
              Animated_module["default"].popovertrigger,
              Animated_module["default"].popoverhead,
              Animated_module["default"].animated
            ],
            classNames == null ? void 0 : classNames.trigger
          ),
          style: __spreadValues(__spreadValues(__spreadValues({}, getStylePopOverVars("popover")), style), styles == null ? void 0 : styles.trigger)
        }, popoverProps),
        children
      ),
      show && /* @__PURE__ */ React__default.createElement(
        "div",
        {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          "aria-label": `popover-${trigger}`,
          className: cnx.cnx(
            [
              "ioeri-Animated pop-over-popover",
              Animated_module["default"].popoverdropdown,
              show && Animated_module["default"].popoverbody,
              withArrow && Animated_module["default"].popoverArrow
            ],
            className,
            classNames == null ? void 0 : classNames.popover
          ),
          style: __spreadValues(__spreadValues(__spreadValues({}, getStyleVars("core")), getStylePopOverVars("popover")), styles == null ? void 0 : styles.popover)
        },
        popover
      )
    );
  }
  if (type === "running-text-1") {
    const _i = rest, {
      placeholders,
      delayAfterAnimation = 1e3,
      minDelay = 200,
      maxDelay = 200
    } = _i, runningtextone = __objRest(_i, [
      "placeholders",
      "delayAfterAnimation",
      "minDelay",
      "maxDelay"
    ]);
    const elementRef = React.useRef(null);
    const RT1rC = cnx.cnx(["ioeri_Animated_running-text-1", Animated_module["default"].animated], className);
    const RT1Rs = __spreadValues(__spreadValues({}, getStyleVars("core")), style);
    React.useEffect(() => {
      const getRandomDelayBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const setTextContent = (element, text) => {
        const el = element;
        el.textContent = text;
      };
      const animatedRunningTextOne = (currentText, remainingText, element, onAnimationEnd2) => {
        var _a2;
        if (!remainingText.length) {
          typeof onAnimationEnd2 === "function" && onAnimationEnd2(currentText.join(""), element);
          return;
        }
        currentText.push((_a2 = remainingText.shift()) != null ? _a2 : "");
        setTimeout(
          () => {
            setTextContent(element, currentText.join(""));
            animatedRunningTextOne(currentText, remainingText, element, onAnimationEnd2);
          },
          getRandomDelayBetween(minDelay, maxDelay)
        );
      };
      const animatePlaceholder = (element, placeholder, onAnimationEnd2) => {
        animatedRunningTextOne([], placeholder.split(""), element, onAnimationEnd2);
      };
      const onAnimationEnd = (placeholder, element) => {
        setTimeout(() => {
          let newPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
          do {
            newPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
          } while (placeholder === newPlaceholder);
          animatePlaceholder(element, newPlaceholder, onAnimationEnd);
        }, delayAfterAnimation);
      };
      if (elementRef.current) {
        animatePlaceholder(elementRef.current, placeholders[0], onAnimationEnd);
      }
    }, []);
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues({ className: RT1rC, style: RT1Rs }, runningtextone), /* @__PURE__ */ React__default.createElement("div", { ref: elementRef }));
  }
  if (type === "running-text-2") {
    const _j = rest, {
      placeholders,
      speed = 25
    } = _j, runningtexttwo = __objRest(_j, [
      "placeholders",
      "speed"
    ]);
    const containerRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const animationFrameId = React.useRef(null);
    const currentPosition = React.useRef(0);
    const lastTimeRef = React.useRef(0);
    React.useEffect(() => {
      const container = containerRef.current;
      const inner = contentRef.current;
      if (!container || !inner)
        return;
      const containerWidth = container.offsetWidth;
      const contentWidth = inner.offsetWidth;
      if (containerWidth >= contentWidth)
        return;
      const animate = (timestamp) => {
        if (!lastTimeRef.current) {
          lastTimeRef.current = timestamp;
        }
        const elapsed = timestamp - lastTimeRef.current;
        if (elapsed >= speed) {
          lastTimeRef.current = timestamp - elapsed % speed;
          currentPosition.current -= Math.floor(elapsed / speed);
          if (currentPosition.current <= -contentWidth) {
            currentPosition.current = containerWidth;
          }
          inner.style.transform = `translateX(${currentPosition.current}px)`;
        }
        animationFrameId.current = requestAnimationFrame(animate);
      };
      animationFrameId.current = requestAnimationFrame(animate);
      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }, [speed]);
    const RT2rC = cnx.cnx(["ioeri_Animated_running-text-2", Animated_module["default"].animated], className);
    const RT2Rs = __spreadValues(__spreadValues({}, getStyleVars("core")), style);
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues({ className: RT2rC, style: RT2Rs }, runningtexttwo), /* @__PURE__ */ React__default.createElement("div", { ref: containerRef, style: { width: "100%", overflow: "hidden" } }, /* @__PURE__ */ React__default.createElement("div", { ref: contentRef, style: { display: "inline-block", whiteSpace: "nowrap" } }, placeholders)));
  }
  if (!type) {
    throw new Error("Prop 'type' is required for Animated type. You Must Define Animated type!");
  }
  return type;
};
Animated.classes = Animated_module["default"];
Animated.displayName = "ioeri/Animated";

exports.Animated = Animated;
//# sourceMappingURL=Animated.js.map
