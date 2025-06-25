# einja-management-template
いいんじゃ管理画面テンプレート

## Docker を使用した開発環境の構築

### 前提条件
- Docker
- Docker Compose

### 開発環境の起動

1. **リポジトリをクローン**
   ```bash
   git clone <repository-url>
   cd einja-management-template
   ```

2. **環境変数を設定**
   ```bash
   cp .env.example .env
   # .envファイルを編集して適切な値を設定
   ```

3. **Docker Composeで起動**
   ```bash
   # データベースとアプリケーションを起動
   docker-compose up -d
   
   # または開発モードで起動（ホットリロード有効）
   docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d
   ```

4. **データベースマイグレーション**
   ```bash
   # コンテナ内でマイグレーションを実行
   docker-compose exec app npm run db:push
   ```

5. **アプリケーションにアクセス**
   - アプリケーション: http://localhost:3000
   - Prisma Studio: http://localhost:5555 (別途 `docker-compose exec app npm run db:studio` で起動)

### Docker Compose サービス

- **database**: PostgreSQL 15
  - ポート: 5432
  - データベース: `einja_management`
  - ユーザー: `postgres`
  - パスワード: `postgres`

- **app**: Next.js アプリケーション
  - ポート: 3000
  - 本番環境とほぼ同等の設定

### 便利なコマンド

```bash
# ログを確認
docker-compose logs -f app

# コンテナに入る
docker-compose exec app sh

# データベースに直接接続
docker-compose exec database psql -U postgres -d einja_management

# データベースをリセット
docker-compose down -v
docker-compose up -d

# Prisma Studio を起動
docker-compose exec app npm run db:studio
```

### 開発ワークフロー

1. コードを変更
2. ホットリロードで即座に反映
3. データベーススキーマを変更した場合は `npm run db:push`
4. 本番ビルドをテストする場合は `docker-compose build`

## ローカル開発（Docker なし）

```bash
# 依存関係をインストール
npm install

# PostgreSQLを起動（別途インストールが必要）
brew services start postgresql@15

# 環境変数を設定
cp .env.example .env

# データベースマイグレーション
npm run db:push

# 開発サーバーを起動
npm run dev
```
