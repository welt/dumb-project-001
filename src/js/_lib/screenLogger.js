/**
 * @file screenLogger.js
 * Proxies console.log() so that messages containing
 * the substring "cached" are also logged to screen.
 * @param {Logger} DumpToScreenClass 
 * @param {String} elementId - DOM id of the element to log messages to
 * @returns {Function}
 */
export default function createScreenLogger(
  DumpToScreenClass,
  elementId,
) {
  const screenDumper = new DumpToScreenClass(elementId);

  const originalConsoleLog = console.log;

  const stringsAllowed = ["cached"];

  const isScreenMethod = (str) => {
    if (typeof str !== "string") return false;
    return stringsAllowed.some(
      (allowedStr) => str.toLowerCase().includes(allowedStr)
    );
  };

  console.log = new Proxy(originalConsoleLog, {
    apply: function (target, thisArg, argumentsList) {
      const [str] = argumentsList;
      if (isScreenMethod(str)) {
        screenDumper.log(str);
      }
      return Reflect.apply(target, thisArg, argumentsList);
    },
  });

  return console.log;
}
