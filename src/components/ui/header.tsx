import React from 'react'
import Link from 'next/link'
import LanguageSwitcher from './language-switcher'
import { Button } from './button'
import { useTranslations } from 'next-intl'

const Header = () => {
  const t = useTranslations('header')
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground">
              Bayond LLC
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {t('contact')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header