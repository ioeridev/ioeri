'use client';

import React, { forwardRef } from 'react';

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
const UnstyledButton = forwardRef((props, ref) => {
  const _a = props, { children, onClick, href, type, useRouter } = _a, rest = __objRest(_a, ["children", "onClick", "href", "type", "useRouter"]);
  const router = useRouter;
  const isFunction = (event) => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick(event);
    }
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    __spreadValues({
      ref,
      type: type === "submit" ? "submit" : "button",
      onClick: isFunction,
      "data-button": "true"
    }, rest),
    children
  );
});
UnstyledButton.displayName = "ioeri/UnstyledButton";

export { UnstyledButton };
//# sourceMappingURL=UnstyledButton.js.map
