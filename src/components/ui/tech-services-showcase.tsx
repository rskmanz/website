import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Settings, 
  BarChart3, 
  CheckCircle
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const TechServicesShowcase = () => {
  const t = useTranslations('techServicesShowcase')
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
      icon: <Settings className="w-8 h-8" />,
      title: "Digital Transformation (DX)",
      description: "Enterprise system integration and process automation with modern cloud solutions",
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
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & BI",
      description: "Business intelligence dashboards and data-driven decision-making solutions",
      features: [
        "Tableau & Power BI Dashboard Development",
        "Machine Learning & Predictive Analytics",
        "Data Pipeline & ETL Development",
        "Real-time Analytics & Monitoring"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50/50"
    }
  ]

  return (
    <div ref={showcaseRef} className="py-8 bg-gradient-to-br from-blue-50/50 to-green-50/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500">
            <Settings className="w-4 h-4 mr-2" />
            Tech Services: DX & Analytics
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Digital Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            エンタープライズ統合によるデジタル変革とデータ分析コンサルティング
          </p>
          <p className="text-muted-foreground mb-4">
            Digital transformation and data analytics consulting for enterprise systems
          </p>
          <Image
            src="/bayond_images/tech-services-card.svg"
            alt="Tech Services"
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

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-8 bg-gradient-to-br from-blue-50/50 to-green-50/50 border-border/50">
            <h3 className="text-2xl font-bold mb-3">Ready for Digital Transformation?</h3>
            <p className="text-muted-foreground mb-6">
              システムを近代化してデータドリブンな洞察を活用しましょう
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-green-500">
              Start Transformation
              <Settings className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TechServicesShowcase 