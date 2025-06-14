"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Zap, Network, Brain, Users, ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface Node {
  id: string
  x: number
  y: number
  label: string
  color: string
  connections: string[]
}



const AnimatedGraph: React.FC = () => {
  const [nodes] = useState<Node[]>([
    { id: '1', x: 20, y: 30, label: 'Ideas', color: '#3b82f6', connections: ['2', '3'] },
    { id: '2', x: 50, y: 20, label: 'Research', color: '#8b5cf6', connections: ['4', '5'] },
    { id: '3', x: 30, y: 60, label: 'Tasks', color: '#10b981', connections: ['4'] },
    { id: '4', x: 70, y: 45, label: 'Projects', color: '#f59e0b', connections: ['5'] },
    { id: '5', x: 85, y: 25, label: 'Goals', color: '#ef4444', connections: [] },
  ])

  const [animatedConnections, setAnimatedConnections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const interval = setInterval(() => {
      const connections: string[] = []
      nodes.forEach(node => {
        node.connections.forEach(targetId => {
          connections.push(`${node.id}-${targetId}`)
        })
      })
      
      if (connections.length > 0) {
        const randomConnection = connections[Math.floor(Math.random() * connections.length)]
        setAnimatedConnections(prev => new Set([...prev, randomConnection]))
        
        setTimeout(() => {
          setAnimatedConnections(prev => {
            const newSet = new Set(prev)
            newSet.delete(randomConnection)
            return newSet
          })
        }, 2000)
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [nodes])

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl overflow-hidden border border-border/50">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connections */}
        {nodes.map(node =>
          node.connections.map(targetId => {
            const target = nodes.find(n => n.id === targetId)
            if (!target) return null
            
            const connectionKey = `${node.id}-${targetId}`
            const isAnimated = animatedConnections.has(connectionKey)
            
            return (
              <motion.line
                key={connectionKey}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke={isAnimated ? '#3b82f6' : '#e5e7eb'}
                strokeWidth={isAnimated ? '0.5' : '0.3'}
                strokeDasharray={isAnimated ? '2,1' : 'none'}
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: isAnimated ? 0.8 : 0.3,
                  strokeWidth: isAnimated ? 0.5 : 0.3
                }}
                transition={{ duration: 0.5 }}
              />
            )
          })
        )}
        
        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill={node.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
            />
            <motion.text
              x={node.x}
              y={node.y - 5}
              textAnchor="middle"
              className="text-xs fill-foreground/70 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {node.label}
            </motion.text>
          </motion.g>
        ))}
      </svg>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

const FeatureCard: React.FC<{
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}> = ({ icon, title, description, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="p-6 h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {icon}
          </div>
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}

const BayondTechHero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isHeroInView) {
      controls.start('visible')
    }
  }, [isHeroInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const features = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI-Powered Intelligence",
      description: "Advanced algorithms that understand your workflow and suggest optimal connections between ideas, tasks, and projects."
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Graph-Based Workspace",
      description: "Visualize relationships between all your work elements in an intuitive, interactive graph that evolves with your thinking."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collaborative Innovation",
      description: "Real-time collaboration tools that let teams build and explore knowledge graphs together, fostering collective intelligence."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Bayond Tech</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge variant="secondary" className="px-3 py-1">
              San Francisco • AI Startup
            </Badge>
          </motion.div>
        </nav>

        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="px-6 lg:px-12 py-12 lg:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <motion.div variants={itemVariants} className="space-y-6">
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                    <Zap className="w-4 h-4 mr-2" />
                    Introducing Myond
                  </Badge>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    The Future of
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {" "}Knowledge Work
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    Transform how you think, create, and collaborate with Myond&apos;s AI-powered graph-based workspace. 
                    Connect ideas, visualize relationships, and unlock your team&apos;s collective intelligence.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Start Building
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group px-8 py-6 text-lg font-semibold hover:bg-muted/50 transition-all duration-300"
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Watch Demo
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">32</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">20+</div>
                    <div className="text-sm text-muted-foreground">Tech Experts</div>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Interactive Graph */}
              <motion.div variants={itemVariants} className="relative">
                <div className="relative">
                  <AnimatedGraph />
                  
                  {/* Overlay for demo video */}
                  {isVideoPlaying && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-background/95 backdrop-blur-sm rounded-2xl flex items-center justify-center cursor-pointer"
                      onClick={() => setIsVideoPlaying(false)}
                    >
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                        <p className="text-muted-foreground">Demo video would play here</p>
                        <p className="text-xs text-muted-foreground">Click to close</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Company Overview Section */}
        <div className="px-6 lg:px-12 py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-4 px-4 py-2">
                <Network className="w-4 h-4 mr-2" />
                Company Overview
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Bayond LLC: 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Beyond Innovation
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                &ldquo;This is Global Startup, beyond Bay Area in US and the Shores of Japan&rdquo; - 
                We deliver cutting-edge products and comprehensive technology services.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {/* Myond Component */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <Image
                  src="/bayond_images/21.svg"
                  alt="Myond Feature"
                  width={320}
                  height={200}
                  className="rounded-xl mx-auto mb-4"
                  style={{ width: '100%', maxWidth: 320, height: 'auto' }}
                />
                <Card className="p-6 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Myond</h3>
                      <p className="text-xs text-blue-600 font-semibold">AI Workspace</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    AI-powered workspace that visualizes and connects thoughts, plans, and actions in a graph-based interface.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Graph Workspace</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">AI Collaboration</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* AI Solutions Component */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <Image
                  src="/bayond_images/22.svg"
                  alt="AI Solutions Feature"
                  width={320}
                  height={200}
                  className="rounded-xl mx-auto mb-4"
                  style={{ width: '100%', maxWidth: 320, height: 'auto' }}
                />
                <Card className="p-6 bg-gradient-to-br from-purple-50/50 to-violet-50/50 border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">AI Solutions</h3>
                      <p className="text-xs text-purple-600 font-semibold">LLM & RAG</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Advanced AI services including LLM integration, RAG systems, and AI agent development.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">LLM Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">AI Agents</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* SaaS/Startup Component */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <Image
                  src="/bayond_images/23.svg"
                  alt="SaaS Startup Feature"
                  width={320}
                  height={200}
                  className="rounded-xl mx-auto mb-4"
                  style={{ width: '100%', maxWidth: 320, height: 'auto' }}
                />
                <Card className="p-6 bg-gradient-to-br from-green-50/50 to-emerald-50/50 border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">SaaS/Startup</h3>
                      <p className="text-xs text-green-600 font-semibold">Full Development</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Complete SaaS development and startup support from concept to market launch.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">MVP Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Cloud Infrastructure</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Tech Services (DX/Analytics) Component */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <Image
                  src="/images/components/tech-services.svg"
                  alt="Tech Services Feature"
                  width={320}
                  height={200}
                  className="rounded-xl mx-auto mb-4"
                  style={{ width: '100%', maxWidth: 320, height: 'auto' }}
                />
                <Card className="p-6 bg-gradient-to-br from-orange-50/50 to-red-50/50 border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Network className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Tech Services</h3>
                      <p className="text-xs text-orange-600 font-semibold">DX & Analytics</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Digital transformation and data analytics consulting with enterprise integration.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Digital Transform</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">BI Dashboards</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Company Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16"
            >
              <Card className="p-8 bg-gradient-to-r from-background to-muted/30 border-border/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">1</div>
                    <div className="text-sm text-muted-foreground">AI Workspace Product</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Service Components</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Active Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">32</div>
                    <div className="text-sm text-muted-foreground">Completed Projects</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-6 lg:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Myond?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the next generation of productivity tools designed for the modern knowledge worker.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default BayondTechHero 