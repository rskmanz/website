"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Settings, 
  Cloud, 
  Brain, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  Trophy,
  Target
} from 'lucide-react'

const BayondTechServices = () => {
  const servicesRef = useRef(null)
  const isInView = useInView(servicesRef, { once: true, amount: 0.2 })

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

  const stats = [
    { icon: <Users className="w-5 h-5" />, number: "12", label: "Clients", color: "text-blue-500" },
    { icon: <Target className="w-5 h-5" />, number: "32", label: "Projects", color: "text-green-500" },
    { icon: <Calendar className="w-5 h-5" />, number: "1", label: "Months of Innovation", color: "text-purple-500" },
    { icon: <Trophy className="w-5 h-5" />, number: "20", label: "Tech Experts", color: "text-orange-500" }
  ]

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DX (Digital Transformation)",
      subtitle: "Transforming Your Core Systems with Seamless Integration",
      description: "Enterprise system integration and process automation with focus on Salesforce, ERP, and modern cloud solutions",
      features: [
        "Enterprise System Integration (Salesforce, ERP, CRM)",
        "API Development & System Connections",
        "Process Automation & Workflow Optimization",
        "Legacy System Modernization & Cloud Migration"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "SaaS / Starting Business from Scratch",
      subtitle: "From Idea to Market: Complete SaaS Solutions",
      description: "Complete startup support from MVP development to scaling, with AI integration and cloud infrastructure",
      features: [
        "MVP Development & Rapid Prototyping",
        "Full-Stack Development (React, Node.js, Firebase)",
        "Cloud Infrastructure Setup (AWS, GCP, Azure)",
        "Product Strategy & Go-to-Market Planning"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50/50"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      subtitle: "Unlock the Full Potential of Large Language Models",
      description: "Advanced AI implementations including LLM integration, RAG systems, and custom AI agent development",
      features: [
        "LLM Integration (OpenAI, Claude, Custom Models)",
        "RAG Systems for Enterprise Knowledge",
        "AI Agent Development & MCP Integration",
        "Fine-tuning Services & AI Strategy Consulting"
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50/50"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & BI",
      subtitle: "Turning Data into Decisions with Advanced Analytics",
      description: "Comprehensive data solutions from BI dashboards to machine learning and real-time analytics",
      features: [
        "Business Intelligence (Tableau, Power BI)",
        "Advanced Analytics & Machine Learning",
        "Data Engineering & ETL Pipelines",
        "Real-time Analytics & Monitoring"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50/50"
    }
  ]

  return (
    <div ref={servicesRef} className="py-20 bg-gradient-to-br from-background to-muted/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500">
            Tech Services Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Turning Data into Decisions,
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Ideas into Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions from digital transformation to AI implementation, 
            designed to accelerate innovation and drive business growth.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <Card className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
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
                        <p className="text-sm font-medium text-primary">{service.subtitle}</p>
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
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Philosophy */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card className="p-12 bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-border/50 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CEO Philosophy</h3>
              <blockquote className="text-xl text-muted-foreground italic mb-6 leading-relaxed">
                &ldquo;We aim to create moments where people around us feel happier through our technology — 
                by making time more productive and enjoyable.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full"></div>
                <div className="text-left">
                  <div className="font-semibold">Ryosuke Ogata</div>
                  <div className="text-sm text-muted-foreground">CEO, Bayond LLC</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-12 bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-border/50">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology services can accelerate your innovation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500">
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
                View Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BayondTechServices 