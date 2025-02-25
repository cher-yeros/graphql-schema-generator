import {DMMF} from '@prisma/generator-helper';

enum SDL {
  ID = 'ID',
  Int = 'Int',
  Float = 'Float',
  String = 'String',
  Boolean = 'Boolean',
}

enum PSL {
  Int = 'Int',
  Float = 'Float',
  String = 'String',
  BigInt = 'BigInt',
  Boolean = 'Boolean',
  Decimal = 'Decimal',
  DateTime = 'DateTime',
  Json = 'Json',
  Bytes = 'Bytes',
  Unsupported = 'Unsupported',
}

enum Scalar {
  ByteArray = 'ByteArray',
  DateTime = 'DateTime',
  Json = 'Json',
}

enum ReservedName {
  Query = 'Query',
  Mutation = 'Mutation',
}

enum Definition {
  type = 'type',
  enum = 'enum',
  input = 'input',
}

type Rule = {
  matcher: (field: DMMF.Field, model: DMMF.Model) => boolean;
  transformer: (field: DMMF.Field) => DMMF.Field;
};

type CustomRules = {
  beforeAddingTypeModifiers?: Rule[];
  afterAddingTypeModifiers?: Rule[];
};

export type {Rule, CustomRules};

export {SDL, PSL, Scalar, ReservedName, Definition};
