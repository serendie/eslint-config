declare module "eslint-plugin-react-hooks";
declare module "@pandacss/eslint-plugin";
declare module "eslint-plugin-react-refresh";
declare module "eslint-plugin-prettier/recommended";
declare module "typescript-eslint";
declare module "@eslint/eslintrc" {
  export class FlatCompat {
    extends(...configs: string[]): any[];
  }
}
