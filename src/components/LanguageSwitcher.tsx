'use client'

import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { useI18n, useLocaleInfo } from '@/contexts/I18nContext'

export default function LanguageSwitcher() {
  const { switchLocale, isLoading } = useI18n()
  const { currentLocale, otherLocales, getLocaleDisplayName } = useLocaleInfo()

  const handleLanguageSwitch = () => {
    const nextLocale = currentLocale === 'ja' ? 'en' : 'ja'
    switchLocale(nextLocale)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLanguageSwitch}
      disabled={isLoading}
      className="flex items-center gap-2"
    >
      <Globe className="w-4 h-4" />
      {isLoading ? '...' : (currentLocale === 'ja' ? 'EN' : 'JA')}
    </Button>
  )
} 