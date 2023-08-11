'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function cnx(classNames, ...additionalClassNames) {
  let classNamesArray = Array.isArray(classNames) ? classNames : [classNames];
  classNamesArray = classNamesArray.filter((className) => typeof className === "string");
  const combinedClassNames = [...classNamesArray];
  additionalClassNames.forEach((className) => {
    if (className) {
      combinedClassNames.push(className);
    }
  });
  return combinedClassNames.join(" ");
}

exports.cnx = cnx;
//# sourceMappingURL=cnx.js.map
