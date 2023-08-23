import { setSize, setColor } from '../../core/utils/set-vars.js';

const getLoaderStyleVars = (order, { size, c }) => {
  const styleVars = {};
  switch (order) {
    case "root":
      styleVars["--Loader-size"] = setSize(size || "default", "Loader-size");
      styleVars["--Loader-color"] = setColor(c || "var(--Loader-color-default)", "");
      return styleVars;
    default:
      return {};
  }
};

export { getLoaderStyleVars };
//# sourceMappingURL=Loader.types.js.map
