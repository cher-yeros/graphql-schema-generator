"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addBrasket = (field) => {
    const { type } = field;
    return { ...field, type: `[${type}]` };
};
const addExclamation = (field) => {
    const { type } = field;
    return { ...field, type: `${type}!` };
};
const rules = [
    {
        matcher: (field) => {
            const { isList, isRequired } = field;
            if (isList) {
                console.assert(isRequired);
            }
            return isList;
        },
        transformer: (field) => {
            return [addExclamation, addBrasket, addExclamation].reduce((acc, cur) => cur(acc), field);
        },
    },
    {
        matcher: (field) => {
            const { isList, isRequired } = field;
            return !isList && isRequired;
        },
        transformer: (field) => addExclamation(field),
    },
];
exports.default = rules;
//# sourceMappingURL=modifier.js.map