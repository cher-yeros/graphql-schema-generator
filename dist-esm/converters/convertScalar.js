import existingRules from './rules/scalar';
const convertScalar = (initialField, model, config) => {
    var _a;
    const rules = ((_a = config === null || config === void 0 ? void 0 : config.customRules) === null || _a === void 0 ? void 0 : _a.beforeAddingTypeModifiers)
        ? config.customRules.beforeAddingTypeModifiers
        : existingRules;
    const newField = rules.reduce((field, { matcher, transformer }) => {
        if (matcher(field, model)) {
            return transformer(field);
        }
        return field;
    }, initialField);
    return newField;
};
export default convertScalar;
//# sourceMappingURL=convertScalar.js.map