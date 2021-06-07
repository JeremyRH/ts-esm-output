export function subModule(first, ...rest) {
    var _a;
    return first.toString() + ((_a = rest[0]) === null || _a === void 0 ? void 0 : _a.toFixed(1));
}
