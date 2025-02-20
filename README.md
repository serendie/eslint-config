# @serendie/eslint-config

Serendieプロジェクト用の共有ESLint/Prettier設定

## インストール

```bash
npm install --save-dev @serendie/eslint-config
```

## 使用方法

### 基本的な設定

```javascript
// eslint.config.js
import serendieConfig from "@serendie/eslint-config";

export default serendieConfig;
```

### カスタマイズ設定

設定をカスタマイズする場合は、`createConfig`関数を使用します：

```javascript
// eslint.config.js
import { createConfig } from "@serendie/eslint-config";

export default createConfig({
  // 追加のextends設定
  extends: ["plugin:some-plugin/recommended"],

  // ルールのカスタマイズ
  rules: {
    "some-rule": "error",
    "@typescript-eslint/no-unused-vars": "off",
  },

  // 追加の無視パターン
  ignores: ["**/custom-ignore/**"],
});
```

### Prettier設定

```javascript
// prettier.config.js
import serendiePrettierConfig from "@serendie/eslint-config/prettier";

export default serendiePrettierConfig;
```

## デフォルト設定

### 無視パターン

以下のパターンはデフォルトで無視されます：

- \*\*/dist/
- \*\*/styled-system/
- \*_/_.cjs
- \*\*/public/storybook/
- \*\*/.astro/
- \*\*/.storybook/
- \*\*/env.d.ts

### 主要なルール

- @pandacss関連の推奨設定
- react-refresh/only-export-componentsの警告設定
- @typescript-eslint/no-unused-varsの未使用変数警告設定（特定のパターンを無視）
