import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  Search,
  CheckCircle
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const AiSolutionsShowcase = () => {
  const t = useTranslations('aiSolutions')
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
      description: "Build sophisticated multi-agent workflows with LangGraph integration directly into your applications",
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
      icon: <Search className="w-8 h-8" />,
      title: "AI × DX with MCP",
      description: "Transform your digital infrastructure with Model Context Protocol - the 'USB-C of AI' for seamless system integration",
      features: [
        "MCP servers connecting AI to enterprise systems (Salesforce, Gmail, Jira)",
        "Real-time data retrieval and analysis across multiple platforms",
        "Automated workflow execution from insight to action",
        "Secure, auditable AI interactions with enterprise data",
        "Unified context sharing between AI agents and business tools"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50/50"
    }
  ]

  const useCases = [
    {
      title: "Enterprise Digital Transformation",
      description: "MCP-powered integration across enterprise systems",
      applications: [
        "Connect AI to Salesforce, HubSpot, and CRM systems for intelligent customer insights",
        "Automate data flow between Gmail, Jira, and project management tools",
        "Real-time analysis of business metrics from multiple data sources",
        "Intelligent workflow automation from insight to execution"
      ],
      icon: "🏢",
      bgColor: "bg-blue-50/50"
    },
    {
      title: "Customer Support & Service",
      description: "LangGraph-powered intelligent customer service agents",
      applications: [
        "Multi-step conversation workflows with state management",
        "Context-aware support agents that remember conversation history",
        "Automated ticket routing and escalation based on complex decision trees",
        "Integration with knowledge bases and customer data for personalized responses"
      ],
      icon: "🎧",
      bgColor: "bg-purple-50/50"
    },
    {
      title: "Data Analysis & Business Intelligence",
      description: "MCP-enabled cross-platform data analysis and insights",
      applications: [
        "Ad-hoc analysis across Snowflake, BigQuery, and spreadsheet data",
        "Automated report generation from multiple business systems",
        "Real-time monitoring and alerting through Datadog and Grafana integration",
        "Natural language queries across complex data landscapes"
      ],
      icon: "📊",
      bgColor: "bg-green-50/50"
    },
    {
      title: "Development & DevOps",
      description: "AI agents for code, deployment, and system management",
      applications: [
        "LangGraph workflows for automated code review and testing",
        "MCP integration with GitHub, GitLab for intelligent project management",
        "Automated deployment and monitoring through cloud service integration",
        "Context-aware documentation generation and code explanation"
      ],
      icon: "💻",
      bgColor: "bg-cyan-50/50"
    },
    {
      title: "Sales & Marketing Automation",
      description: "Multi-agent workflows for sales and marketing processes",
      applications: [
        "LangGraph-powered lead qualification and nurturing workflows",
        "MCP integration with email systems for personalized campaign management",
        "Automated prospect research and outreach sequence management",
        "Real-time sales performance analysis and optimization"
      ],
      icon: "📈",
      bgColor: "bg-orange-50/50"
    },
    {
      title: "Content & Document Management",
      description: "Intelligent content creation and document processing",
      applications: [
        "LangGraph workflows for multi-step content creation and review",
        "MCP integration with Confluence, Notion for knowledge management",
        "Automated document analysis and information extraction",
        "Context-aware content generation based on company knowledge"
      ],
      icon: "📄",
      bgColor: "bg-red-50/50"
    }
  ]

  const implementationProcess = [
    {
      step: "1",
      title: "AI Strategy Consultation",
      description: "Assess your business needs and identify optimal AI implementation opportunities"
    },
    {
      step: "2", 
      title: "Custom Solution Design",
      description: "Design tailored AI architecture with appropriate LLM selection and RAG configuration"
    },
    {
      step: "3",
      title: "Rapid Prototyping",
      description: "Build and test MVP AI solutions with real data and user feedback integration"
    },
    {
      step: "4",
      title: "Full Deployment",
      description: "Scale to production with monitoring, optimization, and continuous improvement"
    }
  ]

  return (
    <div ref={showcaseRef} className="py-8 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500">
            <Brain className="w-4 h-4 mr-2" />
            {t('badge')}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground mb-4">
            {t('description')}
          </p>
          <Image
            src="/images/components/ai-solutions.svg"
            alt="AI Solutions"
            width={320}
            height={180}
            className="rounded-xl mx-auto mb-4"
            style={{ width: '100%', height: 'auto', maxWidth: 320 }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className={`p-6 h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${service.bgColor}`}>
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">{t('useCases')}</h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group"
              >
                <Card className={`p-6 h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${useCase.bgColor}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{useCase.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{useCase.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Process */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">{t('implementationProcess')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationProcess.map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group text-center"
              >
                <Card className="p-6 h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{process.title}</h4>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-8 bg-gradient-to-br from-purple-50/50 to-blue-50/50 border-border/50">
            <h3 className="text-2xl font-bold mb-3">{t('ctaTitle')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('ctaDescription')}
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500">
              {t('startProject')}
              <Brain className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AiSolutionsShowcase 