'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var setVars = require('../../core/utils/set-vars.js');

const getLoaderStyleVars = (order, { size, c }) => {
  const styleVars = {};
  switch (order) {
    case "root":
      styleVars["--Loader-size"] = setVars.setSize(size || "default", "Loader-size");
      styleVars["--Loader-color"] = setVars.setColor(c || "var(--Loader-color-default)", "");
      return styleVars;
    default:
      return {};
  }
};

exports.getLoaderStyleVars = getLoaderStyleVars;
//# sourceMappingURL=Loader.types.js.map
