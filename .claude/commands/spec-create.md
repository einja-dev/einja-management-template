---
description: "タスクの仕様書（requirements.md、design.md、tasks.md）を段階的に作成・修正するワークフローを実行します。ARGUMENTS: タスク内容の説明またはAsanaタスクURL（必須）、既存仕様書のパス（オプション）"
allowed-tools: Task, Read, Write, Edit, MultiEdit, Bash, Grep, Glob, mcp__asana__*, mcp__figma_dev_mode__*
---

# タスク仕様書作成コマンド

## あなたの役割
プロダクト開発のシニアテクニカルアーキテクト兼シニアプロダクトエンジニアとして、ATDD（受け入れテスト駆動開発）に基づく仕様書を段階的に作成します。

## 実行手順

### 1. 外部リソースの確認

**AsanaタスクURL**の場合：
- AsanaMCPでタスク情報を取得（タイトル、説明、カスタムフィールド）
- タスクIDから適切なディレクトリ名を生成

**FigmaURL**が含まれる場合：
- FigmaDevModeMCPでデザイン分析
- UI要件、コンポーネント仕様、デザイントークンを抽出

### 2. 作業ディレクトリの決定
- パス指定あり → 指定ディレクトリを使用
- パス指定なし → `/docs/specs/tasks/{domain}/{YYYYMMDD}-{domain}-{feature}/` で自動作成

### 3. 段階的仕様書作成
各段階でユーザー承認を得てから次へ進行：

1. **requirements.md** (要件定義書)
  - spec-requirements-generatorエージェントで作成
  - ATDD形式のユーザーストーリーと受け入れ基準

2. **design.md** (設計書)
  - spec-design-generatorエージェントで作成
  - 技術アーキテクチャとデータモデル

3. **tasks.md** (タスク一覧)
  - spec-tasks-generatorエージェントで作成
  - 実装タスクの分解と依存関係

4. **qa-tests/** (QAテストシナリオ)
  - spec-qa-generatorエージェントで作成
  - 各タスクの受け入れテスト手順とチェックリスト
  - フェーズごとにディレクトリを分けて管理

### 5. 既存ファイル処理
- 既存ファイルは内容確認後に次段階へ進行
- 修正指示がある場合のみ該当エージェントで再生成

### 6. 成果物の構成
/docs/specs/tasks/
└── {domain}/
└── {YYYYMMDD}-{domain}-{feature}/
├── requirements.md  # 要件定義書（ATDD形式）
├── design.md        # 設計書（技術詳細）
├── tasks.md         # タスク一覧（実装手順）
└── qa-tests/        # QAテストシナリオ
├── phase1/
│   ├── 1-1-1.md
│   └── ...
└── phase2/
└── ...

## 重要な原則
- 段階的開発：各フェーズの承認を必須
- ATDD形式による受け入れ基準の明確化
- Next.js + Hono + Prisma技術スタック対応
- Asana/Figma連携によるトレーサビリティ確保

実行を開始します...
