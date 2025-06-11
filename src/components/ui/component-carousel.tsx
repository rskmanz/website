"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  Bot, 
  Rocket, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react'
import MyondCarouselSection from './myond-carousel-section'
import AiSolutionsShowcase from './ai-solutions-showcase'
import SaasStartupShowcase from './saas-startup-showcase'
import TechServicesShowcase from './tech-services-showcase'

const ComponentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const components = [
    {
      id: 'myond',
      title: 'Myond',
      subtitle: 'AI Workspace',
      description: 'AI-powered next-generation workspace that visually structures thoughts, plans, and activities',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50/50',
      component: <MyondCarouselSection />
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      subtitle: 'LLM & RAG Services',
      description: 'Advanced AI services including LLM integration, RAG systems, and AI agent development',
      icon: <Bot className="w-6 h-6" />,
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-50/50',
      component: <AiSolutionsShowcase />
    },
    {
      id: 'saas-startup',
      title: 'SaaS/Startup',
      subtitle: 'Full Development Support',
      description: 'Complete SaaS development and startup support from concept to market',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50/50',
      component: <SaasStartupShowcase />
    },
    {
      id: 'tech-services',
      title: 'Tech Services',
      subtitle: 'DX & Analytics',
      description: 'Digital transformation and data analytics consulting for enterprise systems',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-blue-500 to-green-500',
      bgColor: 'bg-blue-50/50',
      component: <TechServicesShowcase />
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % components.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + components.length) % components.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    if (isAutoPlay) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
        autoPlayRef.current = null
      }
      setIsAutoPlay(false)
    } else {
      autoPlayRef.current = setInterval(nextSlide, 5000)
      setIsAutoPlay(true)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  return (
    <div className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/80 to-primary">
            <span className="flex items-center gap-2">
              {components[currentIndex].icon}
              4つのコアコンポーネント
            </span>
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Bayond LLC:
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}プロダクト & サービス
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            4つの主要コンポーネントをスライド形式でご紹介します。各サービスの詳細をご覧ください。
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {components.map((comp, index) => (
            <button
              key={comp.id}
              onClick={() => goToSlide(index)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                currentIndex === index
                  ? `bg-gradient-to-br ${comp.color} text-white shadow-xl scale-105`
                  : 'bg-background border border-border/50 text-foreground hover:bg-muted/50 hover:scale-102 hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col items-start gap-3">
                <div className={`p-3 rounded-xl ${
                  currentIndex === index 
                    ? 'bg-white/20 text-white' 
                    : `bg-gradient-to-br ${comp.color} text-white`
                }`}>
                  <span className="text-xl">{comp.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{comp.title}</h3>
                  <p className="text-sm font-medium mb-2">{comp.subtitle}</p>
                  <p className={`text-xs leading-relaxed ${
                    currentIndex === index 
                      ? 'text-white/90' 
                      : 'text-muted-foreground'
                  }`}>
                    {comp.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Current Component Info Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Card className={`p-6 ${components[currentIndex].bgColor} border-border/50`}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${components[currentIndex].color} text-white`}>
                  {components[currentIndex].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    {components[currentIndex].title}
                    <span className="text-lg font-normal text-muted-foreground ml-2">
                      - {components[currentIndex].subtitle}
                    </span>
                  </h3>
                  <p className="text-muted-foreground">{components[currentIndex].description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleAutoPlay}
                  className="hidden sm:flex"
                >
                  {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isAutoPlay ? 'Pause' : 'Auto'}
                </Button>
                
                <Button variant="outline" size="sm" onClick={prevSlide}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <span className="text-sm text-muted-foreground px-2">
                  {currentIndex + 1} / {components.length}
                </span>
                
                <Button variant="outline" size="sm" onClick={nextSlide}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl bg-background/50 border border-border/50 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full min-h-[600px]"
            >
              {components[currentIndex].component}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {components.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? `bg-gradient-to-r ${components[index].color}`
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Keyboard Navigation Hint */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            💡 キーボードの ←→ キーでもスライドを切り替えできます
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComponentCarousel 