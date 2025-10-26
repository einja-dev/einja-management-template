# QAテスト結果ディレクトリ構造

## 概要
このディレクトリは、タスク実装後のQAテスト結果を記録するためのサンプル構造です。
実際のプロジェクトでは、タスクファイル（例：`.kiro/specs/subscription-management/tasks.md`）と同じディレクトリに`qa-tests`フォルダを作成して管理します。

## ディレクトリ構造
```
specs/[機能名]/
├── requirements.md     # 要件定義
├── design.md           # 設計書
├── tasks.md            # タスク一覧
└── qa-tests/           # QAテスト結果
    ├── phase1/         # フェーズ1のテスト
    │   ├── 1-1.md     # タスク1.1.xのテスト結果
    │   ├── 1-2.md     # タスク1.2.xのテスト結果
    │   └── evidence/   # スクリーンショット等のエビデンス
    ├── phase2/         # フェーズ2のテスト
    │   └── 2-1.md
    └── summary.md      # 全体のテストサマリー
```

## QAテストファイルの記載内容

各QAテストファイル（例：`phase1/1-1.md`）には以下を記載：

### 1. ヘッダー情報
- テスト対象タスクID
- タスク名
- 実装日
- テスト実施日

### 2. 各タスクのテスト内容
- **受け入れ条件**: 要件定義から抽出
- **テストシナリオ**: 具体的なテスト手順
- **期待値**: 期待される結果
- **実施結果**: 最新の実行結果（上書き更新）
  - ステータス（PASS/FAIL/PARTIAL）
  - 実行内容の詳細
  - 検出された問題
  - エビデンス（スクリーンショット等）

### 3. 統合テスト結果
- フェーズ全体の結果サマリー
- 次フェーズへの引き継ぎ事項
- 改善提案

## テスト結果の更新方針

### 上書き更新
- 実施結果セクションは**最新の結果のみ**を記載
- 過去の履歴は保持しない（Gitで管理）
- 更新日時を必ず記載

### ステータス定義
- **✅ PASS**: すべての受け入れ条件を満たす
- **❌ FAIL**: 受け入れ条件を満たさない（要修正）
- **⚠️ PARTIAL**: 主要機能は動作するが軽微な問題あり

### エビデンスの保存
```
qa-tests/
├── phase1/
│   ├── evidence/
│   │   ├── 1-1-1-migration.log     # ログファイル
│   │   ├── 1-1-3-menu.png         # スクリーンショット
│   │   └── 1-1-5-e2e.html         # テストレポート
```

## 実施タイミング

1. **タスク完了時**: 個別タスクのテスト実施
2. **フェーズ完了時**: フェーズ全体の統合テスト
3. **リリース前**: 全機能の回帰テスト

## テストシナリオの記載形式

### 画面操作テスト（表形式）
テストシナリオは以下の表形式で記載します：

| No | URL | 操作対象 | 操作セレクタ | 操作種別 | 期待値 |
|----|-----|---------|------------|---------|--------|
| 1 | http://localhost:3000 | - | - | navigate | ページが表示される |
| 2 | - | ログインボタン | [data-testid="login-button"] | click | クリック可能 |
| 3 | - | メールアドレス入力欄 | [data-testid="email-input"] | type | "test@example.com"が入力される |
| 4 | - | 送信ボタン | [data-testid="submit-button"] | click | フォームが送信される |
| 5 | - | 成功メッセージ | [data-testid="success-message"] | evaluate | "ログインしました"が表示される |

#### カラム説明
- **No**: ステップ番号
- **URL**: アクセスするURL（変更がない場合は "-"）
- **操作対象**: 操作する要素の自然言語説明
- **操作セレクタ**: Playwright MCPで使用するセレクタ（data-testidを優先）
- **操作種別**: navigate, click, type, evaluate, wait など
- **期待値**: 操作後の期待される結果
- **結果**: 実施結果（✅ PASS / ❌ FAIL / ⚠️ PARTIAL / - 未実施）
- **備考**: 実施時の気づきや問題点
  - 成功時：パフォーマンス情報、通常と異なる挙動など
  - 失敗時：エラーメッセージ、推定原因、影響範囲

### APIテスト（表形式）
APIテストは以下の形式で記載：

| No | エンドポイント | メソッド | ヘッダー | ボディ | 期待値 |
|----|-------------|---------|---------|--------|--------|
| 1 | /api/rpc/auth/login | POST | Content-Type: application/json | {"email":"test@example.com"} | ステータス200、トークン返却 |
| 2 | /api/rpc/users/me | GET | Authorization: Bearer {token} | - | ステータス200、ユーザー情報 |

## テストツール使用例

### Playwright MCP（画面テスト実行）
表形式のシナリオを実行する際の例：

```javascript
// ステップ1: navigate
mcp_playwright.navigate('http://localhost:3000')

// ステップ2: evaluate（要素確認）
mcp_playwright.evaluate(`
  document.querySelector('[data-testid="login-button"]')
`)

// ステップ3: click
mcp_playwright.click({
  element: 'ログインボタン',
  ref: '[data-testid="login-button"]'
})

// ステップ4: type
mcp_playwright.type({
  element: 'メールアドレス入力欄',
  ref: '[data-testid="email-input"]',
  text: 'test@example.com'
})

// スクリーンショット取得
mcp_playwright.screenshot({ 
  path: 'qa-tests/phase1/evidence/test.png' 
})
```

### Bash（APIテスト実行）
```bash
# APIエンドポイントテスト
curl -X POST http://localhost:3000/api/rpc/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'

# データベース確認
pnpm exec prisma db pull
```

### 自動テスト実行
```bash
# ユニットテスト
pnpm run test

# E2Eテスト
pnpm run test:e2e

# 全テスト
pnpm run prepush
```