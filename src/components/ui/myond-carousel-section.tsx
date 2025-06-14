import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Network, CheckCircle, Layers, Target, Zap, Users, GraduationCap, Palette, Search, Code, Calendar, Star, Sparkles, ArrowRight, Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Image from 'next/image'

const MyondCarouselSection = () => {
  const t = useTranslations('myond')
  const router = useRouter()
  const showcaseRef = useRef(null)
  const isInView = useInView(showcaseRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  // Helper function to safely get array from translations
  const getTranslationArray = (key: string, fallback: string[] = []) => {
    try {
      const result = t.raw(key)
      return Array.isArray(result) ? result : fallback
    } catch {
      return fallback
    }
  }

  const capabilities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: t('capabilities.metaThinking.title'),
      description: t('capabilities.metaThinking.description'),
      features: getTranslationArray('capabilities.metaThinking.features', ["AI-powered mind mapping", "Emotional intelligence tracking", "Cognitive load optimization", "Pattern recognition"])
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('capabilities.centralHub.title'),
      description: t('capabilities.centralHub.description'),
      features: getTranslationArray('capabilities.centralHub.features', ["360° personal dashboard", "Universal app integration", "Intelligent workflow automation", "Real-time synchronization"])
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: t('capabilities.meaningfulConnections.title'),
      description: t('capabilities.meaningfulConnections.description'),
      features: getTranslationArray('capabilities.meaningfulConnections.features', ["Relationship mapping", "Communication insights", "Networking optimization", "Collaboration enhancement"])
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('capabilities.extension.title'),
      description: t('capabilities.extension.description'),
      features: getTranslationArray('capabilities.extension.features', ["AI-powered knowledge retrieval", "Dynamic information mapping", "Creative perspective expansion", "Intelligent connections"])
    }
  ]

  const useCases = [
    {
      icon: <Users className="w-5 h-5" />,
      title: t('useCases.entrepreneurs.title'),
      description: t('useCases.entrepreneurs.description'),
      tags: getTranslationArray('useCases.entrepreneurs.benefits', ["Vision Planning", "Team Management", "Investor Pitch"])
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: t('useCases.students.title'),
      description: t('useCases.students.description'),
      tags: getTranslationArray('useCases.students.benefits', ["Study Maps", "Quiz Generation", "Assignment Tracking"])
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: t('useCases.creatives.title'),
      description: t('useCases.creatives.description'),
      tags: getTranslationArray('useCases.creatives.benefits', ["Creative Workflow", "Content Planning", "Project Visualization"])
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: t('useCases.researchers.title'),
      description: t('useCases.researchers.description'),
      tags: getTranslationArray('useCases.researchers.benefits', ["Literature Review", "Note Organization", "Research Synthesis"])
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: t('useCases.developers.title'),
      description: t('useCases.developers.description'),
      tags: getTranslationArray('useCases.developers.benefits', ["System Design", "Feature Planning", "Bug Tracking"])
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: t('useCases.managers.title'),
      description: t('useCases.managers.description'),
      tags: getTranslationArray('useCases.managers.benefits', ["Meeting Management", "Task Dependencies", "Team Coordination"])
    }
  ]

  const pricingOptions = [
    {
      duration: t('pricing.basic.duration'),
      price: t('pricing.basic.price'),
      features: getTranslationArray('pricing.basic.features', ["Basic graph workspace", "Personal templates", "Cloud sync"])
    },
    {
      duration: t('pricing.pro.duration'),
      price: t('pricing.pro.price'),
      features: getTranslationArray('pricing.pro.features', ["All basic features", "AI collaboration", "Advanced templates", "Team sharing"]),
      popular: true
    },
    {
      duration: t('pricing.enterprise.duration'),
      price: t('pricing.enterprise.price'),
      features: getTranslationArray('pricing.enterprise.features', ["All features", "Priority support", "Custom integrations", "Advanced analytics"])
    }
  ]

  const techStack = [
    { name: 'React', icon: '⚛️', description: t('techStack.react') },
    { name: 'Firebase', icon: '🔥', description: t('techStack.firebase') },
    { name: 'OpenAI', icon: '🤖', description: t('techStack.openai') },
    { name: 'LangChain', icon: '🔗', description: t('techStack.langchain') }
  ]

  const productFeatures = getTranslationArray('features', [
    "Graph Workspace - Visualize entire thought and work process",
    "Daily Logs & Reflections - Track emotional state and progress",
    "Smart Nodes - Text, tasks, links, videos, PDFs, code",
    "AI Functions - Ask, Edit, Agent for comprehensive support",
    "Templates - Built-in formats for various use cases",
    "Reusable Structures - Brand messages, pitches, roadmaps"
  ])

  return (
    <div ref={showcaseRef} className="py-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500">
            <Sparkles className="w-4 h-4 mr-2" />
            {t('badge')}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
          <Image
            src="/images/components/myond-workspace.svg"
            alt="Myond"
            width={320}
            height={180}
            className="rounded-xl mx-auto mb-4"
            style={{ width: '100%', height: 'auto', maxWidth: 320 }}
          />
        </motion.div>

        {/* Core Capabilities */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('coreCapabilities')}</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group"
              >
                <Card className="p-5 h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {capability.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{capability.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{capability.description}</p>
                      <div className="space-y-1">
                        {capability.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('perfectFor')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="group"
              >
                <Card className="p-4 h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-primary">
                      {useCase.icon}
                    </div>
                    <h4 className="font-semibold text-sm">{useCase.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-xs mb-3">{useCase.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {useCase.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-2 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Features */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('keyFeatures')}</h3>
              <div className="space-y-3">
                {productFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-border/50 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold">{t('workspaceTitle')}</h4>
                  <p className="text-muted-foreground text-sm">{t('workspaceDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('simplePricing')}</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {pricingOptions.map((option) => (
              <motion.div
                key={option.duration}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className={`p-5 text-center relative overflow-hidden ${
                  option.popular ? 'border-primary shadow-lg' : 'border-border/50'
                }`}>
                  {option.popular && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-xs">
                      {t('popular')}
                    </Badge>
                  )}
                  <div className="mb-3">
                    <div className="text-2xl font-bold mb-1">{option.price}</div>
                    <div className="text-muted-foreground text-xs capitalize">{option.duration}</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full text-sm ${option.popular ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''}`}
                    variant={option.popular ? 'default' : 'outline'}
                    size="sm"
                  >
                    {t('getStarted')}
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">{t('builtWith')}</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="text-center group"
              >
                <Card className="p-4 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold mb-1 text-sm">{tech.name}</h4>
                  <p className="text-muted-foreground text-xs">{tech.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Message & Mission */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('brandMessage')}
              </h3>
              <blockquote className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-relaxed">
                &ldquo;{t('brandQuote')}&rdquo;
              </blockquote>
              <div className="border-t border-border/30 pt-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">{t('ourMission')}</h4>
                <p className="text-base text-muted-foreground italic">
                  &ldquo;{t('missionQuote')}&rdquo;
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-border/50">
            <h3 className="text-2xl font-bold mb-3">{t('ctaTitle')}</h3>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-500">
                {t('startFreeTrial')}
                <Star className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-3 text-base font-semibold">
                {t('viewDemo')}
                <Globe className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MyondCarouselSection 