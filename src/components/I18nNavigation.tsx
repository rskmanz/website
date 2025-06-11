'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocalizedRouter, useLocaleInfo } from '@/contexts/I18nContext'
import { Button } from '@/components/ui/button'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

function NavLink({ href, children, className = '' }: NavLinkProps) {
  const { push } = useLocalizedRouter()
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    push(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`hover:text-primary transition-colors ${className}`}
    >
      {children}
    </a>
  )
}

export default function I18nNavigation() {
  const t = useTranslations('navigation')
  const { isDefaultLocale } = useLocaleInfo()

  const navigationItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/services' },
    { key: 'contact', href: '/contact' }
  ]

  return (
    <nav className="flex items-center space-x-6">
      {navigationItems.map((item) => (
        <NavLink
          key={item.key}
          href={item.href}
          className="text-sm font-medium"
        >
          {t(item.key)}
        </NavLink>
      ))}
      
      {/* Language indicator */}
      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
        <span>{isDefaultLocale ? '🇯🇵' : '🇺🇸'}</span>
      </div>
    </nav>
  )
}

// Alternative: More comprehensive navigation with breadcrumbs
export function I18nBreadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  const { push } = useLocalizedRouter()

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <span>/</span>}
          {item.href ? (
            <button
              onClick={() => push(item.href!)}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
} 