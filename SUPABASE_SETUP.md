# Supabase統合セットアップガイド

このプロジェクトはSupabaseと統合されており、ユーザーからのお問い合わせデータを自動的にSupabaseに保存します。

## 🚀 機能

- **お問い合わせフォーム**: ユーザーからのお問い合わせをSupabaseに自動保存
- **管理画面**: `/admin/contacts`でお問い合わせを管理
- **ステータス管理**: 新規・確認済み・返信済みの状態管理
- **APIエンドポイント**: REST APIでのデータ操作
- **エラーハンドリング**: APIエラー時の自動フォールバック

## 📋 セットアップ手順

### 1. Supabaseプロジェクト作成
1. [Supabase](https://supabase.com)にログイン
2. 新しいプロジェクトを作成
3. プロジェクト設定画面から以下の情報を取得:
   - Project URL
   - Anon key

### 2. 環境変数設定
`.env.local`ファイルを作成し、以下の環境変数を設定:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. データベーススキーマ作成
Supabaseの管理画面の「SQL Editor」で`supabase-setup.sql`を実行:

```sql
-- contactsテーブルを作成
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(200),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- その他のインデックス、トリガー、ポリシーの設定
-- （完全なスクリプトはsupabase-setup.sqlを参照）
```

### 4. 開発サーバー起動
```bash
npm run dev
```

## 📊 使用方法

### お問い合わせフォーム
- メインページ（`/`）の最下部にお問い合わせフォームがあります
- ユーザーが送信すると自動的にSupabaseに保存されます

### 管理画面
- `/admin/contacts`にアクセス
- お問い合わせ一覧の確認
- ステータスの更新（新規→確認済み→返信済み）

### APIエンドポイント

#### お問い合わせ送信
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "山田太郎",
  "email": "yamada@example.com",
  "company": "株式会社サンプル",
  "message": "お問い合わせ内容"
}
```

#### お問い合わせ一覧取得（管理者用）
```bash
GET /api/admin/contacts?page=1&limit=10&status=new
```

#### ステータス更新（管理者用）
```bash
PATCH /api/admin/contacts
Content-Type: application/json

{
  "id": "contact-uuid",
  "status": "read"
}
```

## 🔧 技術仕様

### データベーススキーマ
```sql
contacts テーブル:
- id: UUID (主キー)
- name: VARCHAR(100) (必須)
- email: VARCHAR(255) (必須)
- company: VARCHAR(200) (任意)
- message: TEXT (必須)
- status: VARCHAR(20) ('new', 'read', 'replied')
- created_at: TIMESTAMP WITH TIME ZONE
- updated_at: TIMESTAMP WITH TIME ZONE
```

### フォールバック機能
1. APIエンドポイント経由での送信を試行
2. API失敗時は直接Supabaseクライアントで送信
3. 完全な失敗時はユーザーフレンドリーなエラーメッセージ

## 🚨 セキュリティ考慮事項

- Row Level Security (RLS) が有効
- 本番環境では認証ベースのポリシー設定を推奨
- Anon keyは公開可能ですが、Service Role keyは秘匿すること

## 📱 UI/UX

- レスポンシブデザイン対応
- リアルタイムフィードバック
- 直感的なステータス管理
- ページネーション対応

## ⚡ パフォーマンス

- インデックス最適化
- ページネーション実装
- 効率的なクエリ構造

お問い合わせやサポートが必要な場合は、開発チームまでご連絡ください！ 