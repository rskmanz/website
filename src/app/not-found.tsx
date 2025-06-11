import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, Globe } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="text-6xl mb-4">🤖</div>
        <h1 className="text-2xl font-bold mb-2">ページが見つかりません</h1>
        <p className="text-muted-foreground mb-6">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="w-full">
            <Link href="/en">
              <Globe className="w-4 h-4 mr-2" />
              English Page
            </Link>
          </Button>
        </div>
        
        <div className="mt-6 text-xs text-muted-foreground">
          <p>エラーコード: 404</p>
          <p>サポートが必要な場合は、お問い合わせください。</p>
        </div>
      </Card>
    </div>
  )
} 