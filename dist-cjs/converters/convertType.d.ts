import { DMMF } from '@prisma/generator-helper';
import type { Config } from '../generateGraphqlSchema';
declare const convertType: (field: DMMF.Field, model: DMMF.Model, config?: Config | undefined) => DMMF.Field;
export default convertType;
