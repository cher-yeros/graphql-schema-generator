import { DMMF } from '@prisma/generator-helper';
declare enum SDL {
    ID = "ID",
    Int = "Int",
    Float = "Float",
    String = "String",
    Boolean = "Boolean"
}
declare enum PSL {
    Int = "Int",
    Float = "Float",
    String = "String",
    BigInt = "BigInt",
    Boolean = "Boolean",
    Decimal = "Decimal",
    DateTime = "DateTime",
    Json = "Json",
    Bytes = "Bytes",
    Unsupported = "Unsupported"
}
declare enum Scalar {
    ByteArray = "ByteArray",
    DateTime = "DateTime",
    Json = "Json"
}
declare enum ReservedName {
    Query = "Query",
    Mutation = "Mutation"
}
declare enum Definition {
    type = "type",
    enum = "enum",
    input = "input"
}
declare type Rule = {
    matcher: (field: DMMF.Field, model: DMMF.Model) => boolean;
    transformer: (field: DMMF.Field) => DMMF.Field;
};
declare type CustomRules = {
    beforeAddingTypeModifiers?: Rule[];
    afterAddingTypeModifiers?: Rule[];
};
export type { Rule, CustomRules };
export { SDL, PSL, Scalar, ReservedName, Definition };
