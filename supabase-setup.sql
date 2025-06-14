-- Supabaseのcontactsテーブルを作成するためのSQLスクリプト
-- Supabaseの管理画面のSQL Editorで実行してください

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

-- インデックスを作成（パフォーマンス向上のため）
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- updated_atカラムを自動更新するためのトリガー関数を作成
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- トリガーを作成
DROP TRIGGER IF EXISTS update_contacts_updated_at ON contacts;
CREATE TRIGGER update_contacts_updated_at
    BEFORE UPDATE ON contacts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) を有効にする（推奨）
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- アプリケーションからの読み書きを許可するポリシーを作成
-- 注意: 本番環境では認証に基づいたより厳密なポリシーを設定してください
CREATE POLICY "Allow insert for all users" ON contacts
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow select for all users" ON contacts
    FOR SELECT USING (true);

CREATE POLICY "Allow update for all users" ON contacts
    FOR UPDATE USING (true);

-- テーブルの確認
SELECT 
    column_name, 
    data_type, 
    is_nullable, 
    column_default
FROM information_schema.columns 
WHERE table_name = 'contacts' 
ORDER BY ordinal_position;

-- 作成完了のメッセージ
SELECT 'contactsテーブルの作成が完了しました！' as message; 