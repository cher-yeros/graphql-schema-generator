import { printSchema, buildSchema } from 'graphql';
export const sdl = (s) => printSchema(buildSchema(s));
export const removeExclamation = (s) => {
    if (s.match(/!$/)) {
        return s.slice(0, -1);
    }
    return s;
};
//# sourceMappingURL=utils.js.map