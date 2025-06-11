import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'プロジェクトに関するご相談、お見積りなど、お気軽にお問い合わせください。専門のスタッフが迅速にご対応いたします。',
  openGraph: {
    title: 'お問い合わせ | Your Company',
    description: 'プロジェクトに関するご相談、お見積りなど、お気軽にお問い合わせください。',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold text-gray-900">Your Company</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">ホーム</Link>
              <a href="/#about" className="text-gray-700 hover:text-blue-600 font-medium">会社概要</a>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 font-medium">サービス</a>
              <Link href="/contact" className="text-blue-600 font-medium">お問い合わせ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              プロジェクトに関するご相談、お見積りなど、お気軽にお問い合わせください。
              専門のスタッフが迅速にご対応いたします。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* お問い合わせフォーム */}
            <div>
              <ContactForm />
            </div>

            {/* 会社情報 */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">会社情報</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">本社所在地</h4>
                      <p className="text-gray-600">
                        〒150-0001<br />
                        東京都渋谷区神宮前1-1-1<br />
                        サンプルビル 10F
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">電話番号</h4>
                      <p className="text-gray-600">03-1234-5678</p>
                      <p className="text-sm text-gray-500">受付時間: 平日 9:00〜18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">メールアドレス</h4>
                      <p className="text-gray-600">contact@yourcompany.com</p>
                      <p className="text-sm text-gray-500">24時間受付</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">営業時間</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">月曜日 - 金曜日</span>
                    <span className="font-semibold text-gray-900">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">土曜日</span>
                    <span className="font-semibold text-gray-900">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">日曜日・祝日</span>
                    <span className="text-red-600">休業</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">緊急時のご連絡</h3>
                <p className="text-gray-600 mb-4">
                  システム障害や緊急の技術的な問題については、24時間対応いたします。
                </p>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🚨</span>
                  <div>
                    <p className="font-semibold text-gray-900">緊急時専用ダイヤル</p>
                    <p className="text-blue-600 font-bold">080-1234-5678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Your Company</h3>
              <p className="text-gray-400">
                革新的なテクノロジーソリューションを提供する会社です。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ウェブ開発</li>
                <li>データベース設計</li>
                <li>クラウドサービス</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li>会社概要</li>
                <li>採用情報</li>
                <li>プライバシーポリシー</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@yourcompany.com</li>
                <li>03-1234-5678</li>
                <li>東京都渋谷区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 