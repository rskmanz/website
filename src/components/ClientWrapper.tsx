'use client'

import { I18nProvider } from '@/contexts/I18nContext'

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <I18nProvider>
      {children}
    </I18nProvider>
  )
} 