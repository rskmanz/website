"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  Network, 
  MessageSquare, 
  Edit, 
  Bot, 
  Users, 
  GraduationCap, 
  Palette, 
  Search, 
  Code, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Layers,
  Target,
  Zap,
  Globe
} from 'lucide-react'

const MyondProductShowcase = () => {
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

  const capabilities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Meta Thinking",
      description: "Structure and visualize your thoughts, emotions, plans, and tasks to get a bird's-eye view of the whole picture. Organize the state of your mind as a map.",
      features: ["Visual mind mapping", "Thought pattern analysis", "Cognitive load optimization"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Central Own Hub",
      description: "A personal central platform that aggregates all information related to you and connects with other tools and services as your intellectual core.",
      features: ["Personal central database", "External app integration", "Unified workflow management"]
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Connection (Meaningful Relationships)",
      description: "Diverse relationships as meaningful structures - directional and non-directional connections that form an intelligent network.",
      features: ["Smart relationship mapping", "Dynamic connection types", "Intelligent navigation"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Extension (Beyond Yourself)",
      description: "AI automatically retrieves and maps related information, building a dynamic knowledge network that expands your thinking horizons.",
      features: ["AI-powered knowledge retrieval", "Dynamic information mapping", "Creative perspective expansion"]
    }
  ]

  const aiFeatures = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Ask - Explore Ideas Freely",
      description: "Interact with AI to ask questions, brainstorm, or gather knowledge. Expand thinking and find insights intuitively.",
      color: "bg-blue-500"
    },
    {
      icon: <Edit className="w-5 h-5" />,
      title: "Edit - Refine and Transform",
      description: "AI helps modify or reframe existing content — turning notes into tasks, organizing scattered thoughts, or summarizing ideas.",
      color: "bg-green-500"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "Agent - Execute with Direction",
      description: "Tell AI what you want to achieve, and it generates tasks, updates maps, and assists in step-by-step workflows.",
      color: "bg-purple-500"
    }
  ]

  const useCases = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Startup Founders",
      description: "Map vision → strategy → product → pitch. Organize team structure and OKRs.",
      tags: ["Vision Planning", "Team Management", "Investor Pitch"]
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Students",
      description: "Create visual study maps, generate quiz questions, and track assignments.",
      tags: ["Study Maps", "Quiz Generation", "Assignment Tracking"]
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Designers & Creators",
      description: "Map creative flow, script, or content production cycles.",
      tags: ["Creative Workflow", "Content Planning", "Project Visualization"]
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Researchers",
      description: "Organize research questions, literature, notes, and conclusions.",
      tags: ["Literature Review", "Note Organization", "Research Synthesis"]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Developers",
      description: "Visualize system architecture, feature specs, and track bugs or updates.",
      tags: ["System Design", "Feature Planning", "Bug Tracking"]
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Managers",
      description: "Turn meeting notes into tasks and connect dependencies visually.",
      tags: ["Meeting Management", "Task Dependencies", "Team Coordination"]
    }
  ]

  const pricingOptions = [
    {
      duration: '2weeks' as const,
      price: '¥80',
      features: ['Basic graph workspace', 'Personal templates', 'Cloud sync']
    },
    {
      duration: '4weeks' as const,
      price: '¥120',
      features: ['All basic features', 'AI collaboration', 'Advanced templates', 'Team sharing'],
      popular: true
    },
    {
      duration: '8weeks' as const,
      price: '¥150',
      features: ['All features', 'Priority support', 'Custom integrations', 'Advanced analytics']
    }
  ]

  const techStack = [
    { name: 'React', icon: '⚛️', description: 'Modern UI framework' },
    { name: 'Firebase', icon: '🔥', description: 'Real-time database' },
    { name: 'OpenAI', icon: '🤖', description: 'AI intelligence' },
    { name: 'LangChain', icon: '🔗', description: 'AI orchestration' }
  ]

  const productFeatures = [
    "Graph Workspace - Visualize entire thought and work process",
    "Daily Logs & Reflections - Track emotional state and progress",
    "Smart Nodes - Text, tasks, links, videos, PDFs, code",
    "AI Functions - Ask, Edit, Agent for comprehensive support",
    "Templates - Built-in formats for various use cases",
    "Reusable Structures - Brand messages, pitches, roadmaps"
  ]

  return (
    <div ref={showcaseRef} className="py-20 bg-gradient-to-br from-background to-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Workspace
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Myond
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An AI-powered next-generation workspace that visually structures and visualizes everything about you—thoughts, plans, tasks, and activities—on a single graph. 
            It functions as your central database, clarifying &ldquo;what you really want to do&rdquo; and navigating you toward realization.
          </p>
        </motion.div>

        {/* Core Capabilities */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Core Capabilities</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {capability.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{capability.title}</h4>
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      <div className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
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

        {/* AI Features */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">AI Collaboration Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="p-6 h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Perfect for Every Professional</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group"
              >
                <Card className="p-6 h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-primary">
                      {useCase.icon}
                    </div>
                    <h4 className="font-semibold">{useCase.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
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
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Key Features</h3>
              <div className="space-y-4">
                {productFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-border/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Network className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold">Interactive Graph Workspace</h4>
                  <p className="text-muted-foreground">Visualize connections between all your work elements</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Simple Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingOptions.map((option) => (
              <motion.div
                key={option.duration}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className={`p-6 text-center relative overflow-hidden ${
                  option.popular ? 'border-primary shadow-lg' : 'border-border/50'
                }`}>
                  {option.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500">
                      Popular
                    </Badge>
                  )}
                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-2">{option.price}</div>
                    <div className="text-muted-foreground text-sm capitalize">{option.duration}</div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${option.popular ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''}`}
                    variant={option.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">Built with Modern Technology</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <Card className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{tech.name}</h4>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Message & Mission */}
        <motion.div variants={itemVariants} className="mb-16">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brand Message
              </h3>
              <blockquote className="text-2xl lg:text-3xl font-bold text-foreground mb-8 leading-relaxed">
                &ldquo;Ask yourself, What you do and what you really want to do&rdquo;
              </blockquote>
              <div className="border-t border-border/30 pt-8">
                <h4 className="text-xl font-semibold mb-4 text-primary">Our Mission</h4>
                <p className="text-lg text-muted-foreground italic">
                  &ldquo;Map everything about you and guide your daily thoughts into meaningful actions with AI&rdquo;
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-12 bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-border/50">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who use Myond to map their thoughts into meaningful actions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500">
                Start Free Trial
                <Star className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
                View Demo
                <Globe className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MyondProductShowcase 