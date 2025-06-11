'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useI18n, useLocaleInfo } from '@/contexts/I18nContext'

export default function AdvancedLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { switchLocale, isLoading } = useI18n()
  const { currentLocale, allLocales, getLocaleDisplayName } = useLocaleInfo()

  const handleLocaleChange = (locale: string) => {
    if (locale !== currentLocale) {
      switchLocale(locale)
    }
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Toggle Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className="flex items-center gap-2"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {getLocaleDisplayName(currentLocale)}
        </span>
        <span className="sm:hidden">
          {currentLocale.toUpperCase()}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <Card className="absolute top-full right-0 mt-2 w-48 p-2 z-20 shadow-lg border">
            <div className="space-y-1">
              {allLocales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLocaleChange(locale)}
                  disabled={isLoading}
                  className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors hover:bg-muted ${
                    locale === currentLocale ? 'bg-muted' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase">
                      {locale}
                    </span>
                    <span>{getLocaleDisplayName(locale)}</span>
                  </span>
                  {locale === currentLocale && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Status */}
            <div className="mt-2 pt-2 border-t text-xs text-muted-foreground">
              {isLoading ? (
                <Badge variant="secondary" className="text-xs">
                  切り替え中...
                </Badge>
              ) : (
                <div className="flex items-center justify-between">
                  <span>現在の言語</span>
                  <Badge variant="outline" className="text-xs">
                    {getLocaleDisplayName(currentLocale)}
                  </Badge>
                </div>
              )}
            </div>
          </Card>
        </>
      )}
    </div>
  )
} 