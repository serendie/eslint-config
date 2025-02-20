import type { Linter } from "eslint";
type ConfigOptions = {
    extends?: string[];
    rules?: Partial<Linter.RulesRecord>;
    ignores?: string[];
};
export declare function createConfig(options?: ConfigOptions): any;
declare const _default: any;
export default _default;
