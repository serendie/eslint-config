import reactHooks from "eslint-plugin-react-hooks";
import pandaCss from "@pandacss/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import tsESLint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import type { Linter } from "eslint";

const compat = new FlatCompat();

// デフォルト設定を別オブジェクトとして定義
const defaultRules = {
  ...pandaCss.configs.recommended.rules,
  "@pandacss/file-not-included": "off",
  "react-refresh/only-export-components": [
    "warn",
    { allowConstantExport: true },
  ],
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
    },
  ],
} as const;

const defaultIgnores = [
  "**/dist/",
  "**/styled-system/",
  "**/*.cjs",
  "**/public/storybook/",
  "**/.astro/",
  "**/.storybook/",
  "**/env.d.ts",
] as const;

// 設定をカスタマイズするための型定義
type ConfigOptions = {
  extends?: string[];
  rules?: Partial<Linter.RulesRecord>;
  ignores?: string[];
};

// カスタマイズ可能な設定を生成する関数
export function createConfig(options?: ConfigOptions) {
  const {
    extends: extendConfigs = [],
    rules = {},
    ignores = [],
  } = options ?? {};

  return tsESLint.config(
    ...compat.extends("plugin:storybook/recommended", ...extendConfigs),
    {
      plugins: {
        "react-refresh": reactRefresh,
        "@pandacss": pandaCss,
        "react-hooks": reactHooks,
      },
      rules: {
        ...defaultRules,
        ...rules, // カスタムルールで上書き
      },
    },
    eslint.configs.recommended,
    ...tsESLint.configs.recommended,
    prettierRecommended,
    {
      ignores: [...defaultIgnores, ...ignores], // カスタム無視パターンを追加
    }
  );
}

// デフォルト設定をエクスポート
export default createConfig();
