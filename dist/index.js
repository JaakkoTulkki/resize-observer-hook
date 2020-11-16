"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResizeObserver = void 0;
var react_1 = require("react");
function useResizeObserver(ref) {
    var _a = react_1.useState({ current: null, entries: null }), observation = _a[0], setObservation = _a[1];
    react_1.useLayoutEffect(function () {
        if (!ref.current) {
            return;
        }
        var observer = new ResizeObserver(function (entries) {
            var o = {
                current: ref.current,
                entries: entries,
            };
            setObservation(o);
        });
        observer.observe(ref.current);
        return function () { return observer.disconnect(); };
    }, [ref]);
    return observation;
}
exports.useResizeObserver = useResizeObserver;
//# sourceMappingURL=index.js.map