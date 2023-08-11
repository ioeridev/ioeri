function setNumberVars(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(")) {
      return true;
    }
    return /[0-9]/.test(value.trim().replace("-", "")[0]);
  }
  return false;
}
function setStringVars(value) {
  if (typeof value === "number") {
    return false;
  }
  if (typeof value === "string") {
    return true;
  }
  return false;
}

export { setNumberVars, setStringVars };
//# sourceMappingURL=set-vars.types.js.map
