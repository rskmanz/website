'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

interface I18nContextType {
  locale: string
  locales: string[]
  switchLocale: (newLocale: string) => void
  isLoading: boolean
  getLocalizedPath: (path: string, targetLocale?: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const currentLocale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  const locales = ['ja', 'en']
  const defaultLocale = 'ja'

  const getLocalizedPath = (path: string, targetLocale?: string): string => {
    const locale = targetLocale || currentLocale
    
    // Remove any existing locale prefix
    let cleanPath = path
    for (const loc of locales) {
      if (path.startsWith(`/${loc}/`)) {
        cleanPath = path.replace(`/${loc}`, '') || '/'
        break
      }
    }
    
    // Add new locale prefix if not default locale
    if (locale === defaultLocale) {
      return cleanPath
    } else {
      return `/${locale}${cleanPath}`
    }
  }

  const switchLocale = async (newLocale: string) => {
    if (!locales.includes(newLocale) || newLocale === currentLocale) return
    
    setIsLoading(true)
    
    try {
      const newPath = getLocalizedPath(pathname, newLocale)
      await router.push(newPath)
    } catch (error) {
      console.error('Failed to switch locale:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const value: I18nContextType = {
    locale: currentLocale,
    locales,
    switchLocale,
    isLoading,
    getLocalizedPath
  }

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

// Additional utility hooks
export function useLocalizedRouter() {
  const { getLocalizedPath } = useI18n()
  const router = useRouter()

  const push = (path: string, locale?: string) => {
    const localizedPath = getLocalizedPath(path, locale)
    return router.push(localizedPath)
  }

  const replace = (path: string, locale?: string) => {
    const localizedPath = getLocalizedPath(path, locale)
    return router.replace(localizedPath)
  }

  return { push, replace }
}

export function useLocaleInfo() {
  const { locale, locales } = useI18n()
  
  const isDefaultLocale = locale === 'ja'
  const otherLocales = locales.filter(loc => loc !== locale)
  
  const getLocaleDisplayName = (loc: string): string => {
    const displayNames: Record<string, string> = {
      ja: '日本語',
      en: 'English'
    }
    return displayNames[loc] || loc
  }

  return {
    currentLocale: locale,
    isDefaultLocale,
    otherLocales,
    getLocaleDisplayName,
    allLocales: locales
  }
} 