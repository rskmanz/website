import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

const LanguageSwitcher = () => {
  const router = useRouter()
  const t = useTranslations('common')
  const { pathname, asPath, query, locale } = router

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <div className="flex gap-1">
        <Link 
          href={{ pathname, query }}
          as={asPath}
          locale="ja"
        >
          <Button 
            variant={locale === 'ja' ? 'default' : 'outline'}
            size="sm"
            className="text-xs"
          >
            JP
          </Button>
        </Link>
        <Link 
          href={{ pathname, query }}
          as={asPath}
          locale="en"
        >
          <Button 
            variant={locale === 'en' ? 'default' : 'outline'}
            size="sm"
            className="text-xs"
          >
            EN
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LanguageSwitcher 