# Your Company Website

Next.js と Supabase を使用した現代的な会社ウェブサイトです。

## 🚀 技術スタック

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel (推奨)

## 📋 機能

- ✅ レスポンシブデザイン
- ✅ モダンなUI/UX
- ✅ お問い合わせフォーム
- ✅ Supabase統合
- ✅ TypeScript完全対応
- ✅ SEO最適化

## 🛠️ セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Supabaseプロジェクトの作成

1. [Supabase](https://supabase.com)でアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトのURLとanonキーを`.env.local`に設定

### 4. データベーステーブルの作成（オプション）

お問い合わせフォームを使用する場合は、以下のSQLを実行してテーブルを作成してください：

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) を有効化
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 挿入を許可するポリシーを作成
CREATE POLICY "Allow insert for everyone" ON contacts
FOR INSERT WITH CHECK (true);
```

### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## 📁 プロジェクト構造

```
src/
├── app/
│   ├── contact/        # お問い合わせページ
│   │   └── page.tsx
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # ホームページ
│   └── globals.css     # グローバルスタイル
├── components/
│   └── ContactForm.tsx # お問い合わせフォームコンポーネント
└── lib/
    └── supabase.ts     # Supabaseクライアント設定
```

## 🎨 カスタマイズ

### 会社情報の変更

以下のファイルで会社情報を更新できます：

- `src/app/page.tsx` - ホームページのメイン情報
- `src/app/contact/page.tsx` - お問い合わせページの会社情報
- `src/components/ContactForm.tsx` - お問い合わせフォームの設定

### スタイリング

Tailwind CSSを使用しています。カスタムスタイルは以下で設定できます：

- `tailwind.config.ts` - Tailwindの設定
- `src/app/globals.css` - グローバルスタイル

## 🚀 デプロイ

### Vercel (推奨)

1. Vercelアカウントを作成
2. GitHubリポジトリと連携
3. 環境変数を設定
4. デプロイ実行

### 他のプラットフォーム

- Netlify
- AWS Amplify
- Railway
- など

## 📞 サポート

質問やサポートが必要な場合は、[お問い合わせフォーム](/contact)からご連絡ください。

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

---

Made with ❤️ by Your Company Team
