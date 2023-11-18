import existingRules from './rules/modifier';
const addTypeModifiers = (initialField, model, config) => {
    var _a;
    const rules = ((_a = config === null || config === void 0 ? void 0 : config.customRules) === null || _a === void 0 ? void 0 : _a.afterAddingTypeModifiers)
        ? config.customRules.afterAddingTypeModifiers
        : existingRules;
    const newField = rules.reduce((field, { matcher, transformer }) => {
        if (matcher(field, model)) {
            return transformer(field);
        }
        return field;
    }, initialField);
    return newField;
};
export default addTypeModifiers;
//# sourceMappingURL=addTypeModifiers.js.map