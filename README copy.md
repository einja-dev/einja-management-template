This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Node.js のバージョン管理について

以下のいずれか、もしくは `.node-version` に対応しているバージョン管理ツールを利用してください

- [fnm](https://github.com/Schniz/fnm)
- [volta](https://volta.sh/)

### fnm を使用する場合

see: https://github.com/Schniz/fnm?tab=readme-ov-file#installation

### Volta を使用する場合

see: https://docs.volta.sh/guide/getting-started

## 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 開発コマンド

### Lint

コードの品質チェックを実行:

```bash
npm run lint
```

自動修正も含めて実行:

```bash
npm run lint:fix
```

### Format

コードフォーマットのチェック:

```bash
npm run format
```

自動フォーマット:

```bash
npm run format:fix
```

### Storybook

コンポーネントの開発・確認用にStorybookを起動:

```bash
npm run storybook
```

ブラウザで [http://localhost:6006](http://localhost:6006) を開いて確認してください。

### その他

型チェック:

```bash
npm run typecheck
```

本番用ビルド:

```bash
npm run build
```

本番サーバー起動:

```bash
npm run start
```
