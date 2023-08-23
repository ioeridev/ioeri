'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var setVars_types = require('./set-vars.types.js');

function setVars(size, prefix = "size") {
  const convert = typeof size === "number" ? `${size}px` : size;
  return setVars_types.setNumberVars(size) ? convert : `var(--${prefix}-${size})`;
}
function stringVars(size, prefix = "size") {
  const convert = typeof size === "number" ? `${size}px` : size;
  return setVars_types.setStringVars(size) ? convert : `var(--${prefix}-${size})`;
}
function valVars(value, prefix) {
  const convert = typeof value === "number" ? `${value}px` : value;
  return setVars_types.setStringVars(value) ? convert : `${prefix}`;
}
function setVal(value, prefix) {
  const VAL = typeof value === "number" ? `${value}px` : value;
  if (prefix === void 0) {
    return VAL;
  }
  return valVars(VAL, `${prefix}`);
}
function setSize(size, prefix) {
  return setVars(size, `${prefix}`);
}
function setColor(color, prefix) {
  if (color === void 0) {
    return `${prefix}`;
  }
  return stringVars(color, `${prefix}`);
}
function setRadius(size, prefix) {
  if (size === void 0) {
    return `${prefix}`;
  }
  return setVars(size, "ioeri-rd");
}
function setLength(size, prefix) {
  if (size === void 0) {
    return `var(--${prefix})`;
  }
  return setVars(size, "ioeri-length");
}
function setSpacing(size) {
  return setVars(size, "ioeri-spc");
}
function setFontSize(size) {
  return setVars(size, "ioeri-fz");
}
function setShadow(size) {
  if (!size) {
    return "none";
  }
  return setVars(size, "ioeri-shadow");
}

exports.setColor = setColor;
exports.setFontSize = setFontSize;
exports.setLength = setLength;
exports.setRadius = setRadius;
exports.setShadow = setShadow;
exports.setSize = setSize;
exports.setSpacing = setSpacing;
exports.setVal = setVal;
exports.setVars = setVars;
exports.stringVars = stringVars;
exports.valVars = valVars;
//# sourceMappingURL=set-vars.js.map
