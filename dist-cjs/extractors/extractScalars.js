"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../converters/types");
const extractScalars = (dataModel) => {
    const { models, names } = dataModel;
    const scalars = new Set();
    console.log('fork test');
    names.forEach((name) => {
        const model = models[name];
        model.fields.forEach((field) => {
            const { type } = field;
            if (type === types_1.PSL.DateTime) {
                scalars.add(types_1.Scalar.DateTime);
            }
            if (type === types_1.PSL.Bytes) {
                scalars.add(types_1.Scalar.ByteArray);
            }
            if (type === types_1.PSL.Json) {
                scalars.add(types_1.PSL.Json || 'Json');
            }
        });
    });
    return Array.from(scalars.values());
};
exports.default = extractScalars;
//# sourceMappingURL=extractScalars.js.map