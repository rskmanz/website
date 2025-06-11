import ComponentCarousel from '@/components/ui/component-carousel'
import ContactForm from '@/components/ContactForm'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import AdvancedLanguageSwitcher from '@/components/AdvancedLanguageSwitcher'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Target, Zap, Globe, Brain, ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen">
      {/* Language Switchers */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageSwitcher />
        <AdvancedLanguageSwitcher />
      </div>
      
      {/* ① The Future of Knowledge Work */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500">
            <Brain className="w-4 h-4 mr-2" />
            {t('hero.title')}
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            {t('hero.subtitle').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t('hero.subtitle').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('hero.description').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t('hero.description').split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            {t('hero.cta')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* ② Numbers */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2" variant="outline">
              <Target className="w-4 h-4 mr-2" />
              {t('numbers.title')}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('numbers.subtitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('numbers.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-muted-foreground">{t('numbers.activeClients')}</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-green-50/50 to-emerald-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">32</div>
              <div className="text-muted-foreground">{t('numbers.completedProjects')}</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50/50 to-violet-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-muted-foreground">{t('numbers.techExperts')}</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-orange-50/50 to-red-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-muted-foreground">{t('numbers.globalOffices')}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* ③ Bayond LLC: プロダクト & サービス */}
      <ComponentCarousel />

      {/* ④ Company Overview */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500">
              <Globe className="w-4 h-4 mr-2" />
              {t('company.title')}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('company.subtitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {t('company.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('company.globalTeam.title')}</h3>
                  <p className="text-muted-foreground">{t('company.globalTeam.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('company.innovation.title')}</h3>
                  <p className="text-muted-foreground">{t('company.innovation.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('company.mission.title')}</h3>
                  <p className="text-muted-foreground">{t('company.mission.description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-green-50/50 rounded-2xl p-8 border border-border/50">
              <h4 className="text-lg font-semibold mb-6">{t('company.info.title')}</h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('company.info.founded')}</span>
                  <span className="font-medium">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('company.info.headquarters')}</span>
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('company.info.ceo')}</span>
                  <span className="font-medium">Ryosuke Ogata</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('company.info.email')}</span>
                  <span className="font-medium">r.ogata@bayond.tech</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('company.info.address')}</span>
                  <span className="font-medium">2443 Fillmore St, SF, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ Ready to Transform Your Workflow? */}
      <section className="py-20 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500">
              <Brain className="w-4 h-4 mr-2" />
              {t('transform.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('transform.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('transform.description')}
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Bayond LLC</h3>
              <p className="text-muted-foreground mb-4">
                {t('footer.description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('footer.address')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.products')}</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">{t('footer.myond')}</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">{t('footer.aiSolutions')}</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">{t('footer.saasSupport')}</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">{t('footer.techServices')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('common.contactUs')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>CEO: Ryosuke Ogata</li>
                <li>Email: r.ogata@bayond.tech</li>
                <li>LinkedIn: Available for connection</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Bayond LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
