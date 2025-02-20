# @serendie/eslint-config

Serendieプロジェクト用の共有ESLint/Prettier設定

## インストール

```bash
npm install --save-dev @serendie/eslint-config
```

## 使用方法

### ESLint設定

```javascript
// eslint.config.js
import serendieConfig from "@serendie/eslint-config";

export default serendieConfig;
```

### Prettier設定

```javascript
// prettier.config.js
import serendiePrettierConfig from "@serendie/eslint-config/prettier";

export default serendiePrettierConfig;
```
