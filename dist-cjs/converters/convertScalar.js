"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const scalar_1 = (0, tslib_1.__importDefault)(require("./rules/scalar"));
const convertScalar = (initialField, model, config) => {
    var _a;
    const rules = ((_a = config === null || config === void 0 ? void 0 : config.customRules) === null || _a === void 0 ? void 0 : _a.beforeAddingTypeModifiers)
        ? config.customRules.beforeAddingTypeModifiers
        : scalar_1.default;
    const newField = rules.reduce((field, { matcher, transformer }) => {
        if (matcher(field, model)) {
            return transformer(field);
        }
        return field;
    }, initialField);
    return newField;
};
exports.default = convertScalar;
//# sourceMappingURL=convertScalar.js.map