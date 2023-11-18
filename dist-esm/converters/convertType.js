import convertScalar from './convertScalar';
const convertType = (field, model, config) => {
    const { kind } = field;
    if (kind === 'scalar' || (config === null || config === void 0 ? void 0 : config.customRules)) {
        return convertScalar(field, model, config);
    }
    // TODO
    return field;
};
export default convertType;
//# sourceMappingURL=convertType.js.map