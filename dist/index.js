"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResizeObserver = void 0;
var react_1 = require("react");
function useResizeObserver(ref) {
    var _a = react_1.useState(null), current = _a[0], setCurrent = _a[1];
    var _b = react_1.useState(null), entries = _b[0], setEntries = _b[1];
    react_1.useLayoutEffect(function () {
        if (!ref.current) {
            return;
        }
        var observer = new ResizeObserver(function (entries) {
            setCurrent(ref.current);
            setEntries(entries);
        });
        observer.observe(ref.current);
        return function () { return observer.disconnect(); };
    }, [ref]);
    return { current: current, entries: entries };
}
exports.useResizeObserver = useResizeObserver;
//# sourceMappingURL=index.js.map