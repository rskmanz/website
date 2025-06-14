import ComponentCarousel from '../src/components/ui/component-carousel'
import ContactForm from '../src/components/ContactForm'
import Header from '../src/components/ui/header'
import Link from 'next/link'
import Head from 'next/head'
import { Card } from '../src/components/ui/card'
import { Badge } from '../src/components/ui/badge'
import { Button } from '../src/components/ui/button'
import { Users, Target, Zap, Globe, Brain, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const tHero = useTranslations('hero')
  const tNumbers = useTranslations('numbers')
  const tCompany = useTranslations('company')
  const tTransform = useTranslations('transform')
  const tFooter = useTranslations('footer')
  const tSeo = useTranslations('seo')

  const seoTitle = locale === 'ja' 
    ? 'Bayond LLC - AI搭載デジタル変革 & SaaS開発 | サンフランシスコ' 
    : tSeo('title')
  
  const seoDescription = locale === 'ja'
    ? 'サンフランシスコを拠点とするBayond LLCの最先端AIソリューション、SaaS開発、デジタル変革サービスでビジネスを変革。スタートアップから大企業まで画期的な成果を実現。'
    : tSeo('description')
  
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={locale === 'ja' ? 'AIソリューション, SaaS開発, デジタル変革, スタートアップアクセラレーター, サンフランシスコ テック企業, エンタープライズソフトウェア, AI統合, カスタムソフトウェア開発' : tSeo('keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://bayond.tech${locale === 'ja' ? '/ja' : ''}`} />
        <meta property="og:image" content="https://bayond.tech/og-image.jpg" />
        <meta property="og:site_name" content="Bayond LLC" />
        <meta property="og:locale" content={locale === 'ja' ? 'ja_JP' : 'en_US'} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://bayond.tech/twitter-card.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://bayond.tech${locale === 'ja' ? '/ja' : ''}`} />
        
        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="en" href="https://bayond.tech" />
        <link rel="alternate" hrefLang="ja" href="https://bayond.tech/ja" />
        <link rel="alternate" hrefLang="x-default" href="https://bayond.tech" />
      </Head>
      
      <div className="min-h-screen">
      <Header />
      {/* ① The Future of Knowledge Work */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background pt-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500">
            <Brain className="w-4 h-4 mr-2" />
            {tHero('badge')}
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            {tHero('title')}
          </h1>

          {/* Myond SVGイメージ追加（h1の直下・グラデ背景） */}
          <div className="flex justify-center items-center w-full mb-8">
            <div className="bg-gradient-to-br from-background via-muted/20 to-background rounded-2xl shadow-lg p-6" style={{ width: 600, maxWidth: '95vw', height: 340, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/bayond_images/(English) (2).svg"
                alt="Myond English"
                width={600}
                height={340}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            {tHero('description')}
          </p>
          <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            {tHero('exploreButton')}
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
              {tNumbers('badge')}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {tNumbers('title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {tNumbers('description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-muted-foreground">{tNumbers('activeClients')}</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-green-50/50 to-emerald-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">32</div>
              <div className="text-muted-foreground">{tNumbers('completedProjects')}</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50/50 to-violet-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-muted-foreground">{tNumbers('techExperts')}</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-orange-50/50 to-red-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-muted-foreground">{tNumbers('globalOffices')}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* ③ Bayond LLC: Products & Services */}
      <ComponentCarousel />

      {/* ④ Company Overview */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500">
              <Globe className="w-4 h-4 mr-2" />
              {tCompany('badge')}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {tCompany('title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              &ldquo;{tCompany('tagline')}&rdquo;
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tCompany('globalTeam')}</h3>
                  <p className="text-muted-foreground">{tCompany('globalTeamDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tCompany('innovationFocus')}</h3>
                  <p className="text-muted-foreground">{tCompany('innovationDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tCompany('mission')}</h3>
                  <p className="text-muted-foreground">{tCompany('missionDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-green-50/50 rounded-2xl p-8 border border-border/50">
              <h4 className="text-lg font-semibold mb-6">{tCompany('companyInfo')}</h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{tCompany('founded')}</span>
                  <span className="font-medium">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{tCompany('headquarters')}</span>
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{tCompany('ceo')}</span>
                  <span className="font-medium">Ryosuke Ogata</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{tCompany('email')}</span>
                  <span className="font-medium">r.ogata@bayond.tech</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{tCompany('officeAddress')}</span>
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
              {tTransform('badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {tTransform('title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {tTransform('description')}
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
                &ldquo;{tFooter('companyDescription')}&rdquo;
              </p>
              <p className="text-sm text-muted-foreground">
                {tFooter('address')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{tFooter('productsServices')}</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">{tFooter('myondWorkspace')}</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">{tFooter('aiSolutions')}</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">{tFooter('saasSupport')}</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">{tFooter('techServices')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{tFooter('contactUs')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>{tFooter('ceoName')}</li>
                <li>{tFooter('emailContact')}</li>
                <li>{tFooter('linkedin')}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              {tFooter('copyright')}
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

// Messages are handled globally in _app.js