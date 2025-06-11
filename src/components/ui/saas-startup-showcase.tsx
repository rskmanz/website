"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Rocket, 
  Cloud, 
  Code, 
  CheckCircle,
  Lightbulb,
  Target,
  Globe,
  TrendingUp,
  Brain
} from 'lucide-react'

const SaasStartupShowcase = () => {
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

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Custom AI Agent inside Customer App",
      description: "Build sophisticated multi-agent workflows with LangGraph integration directly into your SaaS application",
      features: [
        "LangGraph-powered multi-agent workflows and state management",
        "Native AI assistant integration within your app UI",
        "Complex decision trees and conditional logic for AI agents",
        "Real-time user interaction with persistent conversation state",
        "Custom tool integration and function calling capabilities"
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50/50"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "MVP Development & Rapid Prototyping",
      description: "Transform your ideas into working prototypes quickly with validated user experience",
      features: [
        "User story mapping and validation",
        "Rapid prototyping with React/Next.js",
        "User testing and feedback integration",
        "Iterative design improvements"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Complete application development using modern tech stack for scalability",
      features: [
        "Frontend: React, Next.js, TypeScript",
        "Backend: Node.js, Python, Firebase",
        "Database: PostgreSQL, MongoDB, Firebase",
        "Real-time features with WebSocket"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50/50"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure Setup",
      description: "Scalable cloud architecture on AWS, Google Cloud, or Azure platforms",
      features: [
        "Auto-scaling infrastructure setup",
        "CI/CD pipeline implementation",
        "Monitoring and logging systems",
        "Security best practices implementation"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50/50"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Product Strategy & Go-to-Market",
      description: "Business strategy development from market research to launch planning",
      features: [
        "Market research and competitor analysis",
        "Business model validation",
        "Go-to-market strategy development",
        "Funding preparation and pitch deck creation"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50/50"
    }
  ]

  const successStories = [
    {
      title: "AI-Enhanced Customer Support SaaS",
      description: "Built an intelligent customer service platform with LangGraph multi-agent workflows",
      results: ["80% reduction in response time", "AI agents handling complex inquiries", "Seamless human-AI handoff"]
    },
    {
      title: "E-commerce Platform",
      description: "Built a complete B2B e-commerce solution with inventory management",
      results: ["50% faster order processing", "30% increase in user engagement", "Multi-tenant architecture"]
    },
    {
      title: "AI-Powered Analytics Tool",
      description: "Developed data analytics platform with machine learning capabilities",
      results: ["Real-time data processing", "Custom ML model integration", "Interactive dashboard"]
    }
  ]

  const techStack = [
    { name: 'React/Next.js', icon: '⚛️', description: 'Modern frontend framework' },
    { name: 'Node.js/Python', icon: '🟢', description: 'Scalable backend services' },
    { name: 'AWS/GCP/Azure', icon: '☁️', description: 'Cloud infrastructure' },
    { name: 'Firebase/Supabase', icon: '🔥', description: 'Real-time database' }
  ]

  return (
    <div ref={showcaseRef} className="py-8 bg-gradient-to-br from-green-50/50 to-emerald-50/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500">
            <Rocket className="w-4 h-4 mr-2" />
            SaaS & Startup Support
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From Idea to Market:
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}AI-Powered SaaS Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help entrepreneurs and businesses build, launch, and scale AI-enhanced software applications 
            from concept to market with comprehensive development and strategy support.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className={`p-8 h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${service.bgColor}`}>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group"
              >
                <Card className="p-6 h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                  <h4 className="text-lg font-semibold mb-3">{story.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{story.description}</p>
                  <div className="space-y-2">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h3>
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

        {/* Process */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Development Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discovery", description: "Understanding your vision and market needs", icon: <Lightbulb className="w-6 h-6" /> },
              { step: "2", title: "Design & Plan", description: "Creating MVP roadmap and technical architecture", icon: <Target className="w-6 h-6" /> },
              { step: "3", title: "Develop & Test", description: "Agile development with continuous user feedback", icon: <Code className="w-6 h-6" /> },
              { step: "4", title: "Launch & Scale", description: "Market deployment and growth optimization", icon: <Rocket className="w-6 h-6" /> }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {phase.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  <span className="text-green-600">Step {phase.step}:</span> {phase.title}
                </h4>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-12 bg-gradient-to-br from-green-50/50 to-emerald-50/50 border-border/50">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your SaaS?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s transform your idea into a successful SaaS application with our comprehensive development and strategy support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500">
                Start Your Project
                <Rocket className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
                View Portfolio
                <Globe className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SaasStartupShowcase 