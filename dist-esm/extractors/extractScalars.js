import { Scalar, PSL } from '../converters/types';
const extractScalars = (dataModel) => {
    const { models, names } = dataModel;
    const scalars = new Set();
    console.log('fork test');
    names.forEach((name) => {
        const model = models[name];
        model.fields.forEach((field) => {
            const { type } = field;
            if (type === PSL.DateTime) {
                scalars.add(Scalar.DateTime);
            }
            if (type === PSL.Bytes) {
                scalars.add(Scalar.ByteArray);
            }
            if (type === PSL.Json) {
                scalars.add(PSL.Json || 'Json');
            }
        });
    });
    return Array.from(scalars.values());
};
export default extractScalars;
//# sourceMappingURL=extractScalars.js.map