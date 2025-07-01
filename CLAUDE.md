# Claude Code 指示書
- 回答は日本語で行ってください。
- 必ずこのドキュメントの通りに作業を行ってください。

## 開発環境セットアップ

### データベース起動（PostgreSQL）:
```bash
# PostgreSQLコンテナを起動（ポート5432）
docker-compose up -d postgres

# データベースの状態確認
docker-compose ps

# データベース停止
docker-compose down
```

**注意**: DockerのPostgreSQLは標準ポート**5432**を使用します。

### アプリケーション開発:
```bash
# 依存関係のインストール
npm install

# Prismaクライアント生成
npm run db:generate

# データベースマイグレーション
npm run db:push

# 開発サーバー起動（Turbopack）
npm run dev
```

### 主要な開発コマンド:
- `npm run dev` - Turbopackで開発サーバーを起動（.nextキャッシュを最初にクリア）
- `npm run build` - プロダクションビルド（最初にPanda CSS codegenを実行）
- `npm run start` - プロダクションサーバーを起動

### コード品質チェックコマンド:
- `npm run lint` - Biome linterでコードをチェック
- `npm run lint:fix` - Biomeで自動的にlintの問題を修正
- `npm run format` - Biomeでコードフォーマットをチェック
- `npm run format:fix` - Biomeでコードを自動フォーマット
- `npm run typecheck` - TypeScriptの型チェック

### テスト:
- StorybookとVitest統合でテストを実行
- Playwrightで Chromiumブラウザーテスト
- セットアップファイル: `.storybook/vitest.setup.ts`

## アーキテクチャ

### スタイリングシステム:
- **Panda CSS** でデザイントークンとレシピを使用したスタイリング
- タイプセーフなスタイル生成によるCSS-in-JS
- スタイルコンポーネントは `styled-system/` ディレクトリに出力
- カスタムブレークポイント: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1440px)

### コード品質:
- **Biome** でlintingとフォーマット（タブインデント、ダブルクォート）
- Huskyのpre-commitフックとlint-staged
- `styled-system/` ディレクトリをフォーマット/lintingから除外

### フレームワーク設定:
- Next.js 15 with App Router
- React 19
- TypeScript（strict型チェック）
- Voltaまたはfnmを使用したNode.jsバージョン管理 (v22.16.0)

### 特記事項:
- プロダクションビルド前に必ず`panda codegen`を実行
- Biomeはタブインデントとダブルクォートを使用
- ビルド時はESLintを無効化（代わりにBiomeを使用）

## 追加指示

以下のドキュメントも参照して作業を進めてください:

- @docs/component-design.mdc - コンポーネント設計ガイドライン
- @docs/github-workflow.mdc - GitHubワークフロー・ブランチ戦略
