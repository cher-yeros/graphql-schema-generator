"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeExclamation = exports.sdl = void 0;
const graphql_1 = require("graphql");
const sdl = (s) => (0, graphql_1.printSchema)((0, graphql_1.buildSchema)(s));
exports.sdl = sdl;
const removeExclamation = (s) => {
    if (s.match(/!$/)) {
        return s.slice(0, -1);
    }
    return s;
};
exports.removeExclamation = removeExclamation;
//# sourceMappingURL=utils.js.map