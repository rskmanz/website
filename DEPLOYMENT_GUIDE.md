# 🚀 デプロイメントガイド

このガイドではNext.jsアプリケーションをVercelにデプロイする方法を説明します。

## 📋 デプロイ前の準備

### 1. Supabaseプロジェクトの準備
1. [Supabase](https://supabase.com)でプロジェクトを作成
2. `supabase-setup.sql`を実行してテーブルを作成
3. プロジェクトのURLとAPIキーを取得

### 2. 本番環境用の設定確認
```bash
# ビルドテスト
npm run build

# ローカルで本番環境テスト
npm run start
```

## 🔧 Vercelデプロイ手順

### 方法1: Vercel CLI（推奨）

#### 1. Vercel CLIをインストール
```bash
npm i -g vercel
```

#### 2. Vercelにログイン
```bash
vercel login
```

#### 3. プロジェクトをデプロイ
```bash
vercel --prod
```

### 方法2: Vercel Web Dashboard

#### 1. GitHubにプッシュ
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### 2. Vercelダッシュボードで設定
1. [Vercel Dashboard](https://vercel.com/dashboard)にアクセス
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. 「Deploy」をクリック

## ⚙️ 環境変数の設定

### Vercel Dashboard での設定
1. プロジェクトの「Settings」タブ
2. 「Environment Variables」セクション
3. 以下の環境変数を追加:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Vercel CLI での設定
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## 🔍 デプロイ後の確認

### 1. 基本機能テスト
- [ ] メインページが正常に表示
- [ ] お問い合わせフォームが動作
- [ ] 管理画面（`/admin/contacts`）が表示

### 2. Supabase連携テスト
- [ ] お問い合わせフォーム送信
- [ ] Supabaseにデータが保存されている
- [ ] 管理画面でデータが表示される

### 3. APIエンドポイントテスト
```bash
# お問い合わせAPI
curl -X POST https://your-domain.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "テスト太郎",
    "email": "test@example.com",
    "message": "テストメッセージ"
  }'

# 管理API
curl https://your-domain.vercel.app/api/admin/contacts
```

## 🐛 トラブルシューティング

### ビルドエラーの場合
```bash
# ローカルでビルドテスト
npm run build

# TypeScriptエラーの確認
npx tsc --noEmit
```

### 環境変数が反映されない場合
1. Vercelダッシュボードで環境変数を確認
2. 再デプロイを実行
```bash
vercel --prod --force
```

### Supabase接続エラーの場合
1. Supabase URLとキーが正しいか確認
2. Supabaseプロジェクトが一時停止されていないか確認
3. RLSポリシーが正しく設定されているか確認

## 📊 パフォーマンス最適化

### 1. 画像最適化
```bash
# 画像を /public/images/ に配置
# Next.js Image コンポーネントを使用
```

### 2. バンドルサイズ分析
```bash
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## 🔄 継続的デプロイ

### GitHub Actions（オプション）
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🌍 カスタムドメイン設定

### Vercelダッシュボードで設定
1. プロジェクトの「Settings」タブ
2. 「Domains」セクション
3. ドメインを追加し、DNS設定を更新

## 📈 モニタリング

### Vercel Analytics
- 自動的に基本的なアナリティクスが利用可能
- パフォーマンスメトリクス
- エラー追跡

### Supabase Dashboard
- データベースの使用状況
- API呼び出し統計
- パフォーマンスメトリクス

## 🚀 デプロイ完了！

正常にデプロイが完了したら、以下のURLでアクセスできます：
- メインサイト: `https://your-project-name.vercel.app`
- 管理画面: `https://your-project-name.vercel.app/admin/contacts`

お疲れ様でした！🎉 