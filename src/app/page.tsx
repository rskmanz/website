import ComponentCarousel from '@/components/ui/component-carousel'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Target, Zap, Globe, Brain, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ① The Future of Knowledge Work */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500">
            <Brain className="w-4 h-4 mr-2" />
            The Future of Knowledge Work
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Transform How You<br />Think & Work
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Myond by Bayond LLC is an AI-powered next-generation workspace.<br />
            Visualize and structure your thoughts, plans, and tasks to clarify what you truly want to achieve.
          </p>
          <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            Explore the Future
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
              Numbers That Matter
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Global Impact & Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Performance of a global startup based in San Francisco and Japan
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-muted-foreground">Active Clients</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-green-50/50 to-emerald-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">32</div>
              <div className="text-muted-foreground">Completed Projects</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50/50 to-violet-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-muted-foreground">Tech Experts</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-orange-50/50 to-red-50/50 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-muted-foreground">Global Offices</div>
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
              Company Overview
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Bayond LLC: Beyond Boundaries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              &ldquo;This is Global Startup, beyond Bay Area in US and the Shores of Japan&rdquo;
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Team</h3>
                  <p className="text-muted-foreground">Global team based in San Francisco, CA and Japan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
                  <p className="text-muted-foreground">Revolutionizing corporate and individual productivity with cutting-edge AI, SaaS, and DX technologies</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-muted-foreground">Creating moments that make people happier through technology</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-green-50/50 rounded-2xl p-8 border border-border/50">
              <h4 className="text-lg font-semibold mb-6">Company Information</h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="font-medium">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Headquarters</span>
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CEO</span>
                  <span className="font-medium">Ryosuke Ogata</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">r.ogata@bayond.tech</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Office Address</span>
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
              Ready to Transform?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Workflow
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take your workflow to the next level. Start a new way of working with Myond.
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
                &ldquo;This is Global Startup, beyond Bay Area in US and the Shores of Japan&rdquo;
              </p>
              <p className="text-sm text-muted-foreground">
                2443 Fillmore St, San Francisco, CA, 94115
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Products & Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Myond - AI Workspace</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">AI Solutions</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">SaaS/Startup Support</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Tech Services (DX & Analytics)</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
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