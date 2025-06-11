"use client"

import React from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const t = useTranslations('common')

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <div className="flex gap-1">
        <Link href="/" locale="ja">
          <Button 
            variant={locale === 'ja' ? 'default' : 'outline'}
            size="sm"
            className="text-xs"
          >
            {t('japanese')}
          </Button>
        </Link>
        <Link href="/en" locale="en">
          <Button 
            variant={locale === 'en' ? 'default' : 'outline'}
            size="sm"
            className="text-xs"
          >
            {t('english')}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LanguageSwitcher 