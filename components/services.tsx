"use client"

import { Brain, Cpu, Cloud, Code2, ArrowUpRight } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI models, intelligent assistants, and ML pipelines engineered for your specific challenges.",
    capabilities: ["Custom LLMs", "Predictive Analytics", "Computer Vision", "NLP"],
  },
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description: "Smart automation systems that learn, adapt, and scale operations efficiently.",
    capabilities: ["Process Automation", "Workflow Optimization", "Smart Integrations", "RPA"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable, secure infrastructure designed for performance and reliability.",
    capabilities: ["Cloud Migration", "Serverless", "Infrastructure as Code", "DevOps"],
  },
  {
    icon: Code2,
    title: "Enterprise Software",
    description: "Production-grade applications built with modern engineering practices.",
    capabilities: ["Web Apps", "Mobile Apps", "Android Apps", "APIs", "Microservices"],
  },
  {
    icon: Code2,
    title: "Android Application Development",
    description: "Native Android apps built with Kotlin and Java, optimized for performance and user experience.",
    capabilities: ["Native Apps", "Material Design", "Firebase Integration", "App Optimization"],
  },
  {
    icon: Code2,
    title: "IT Services & Consulting",
    description: "Comprehensive IT solutions including digital transformation, system integration, and technical support.",
    capabilities: ["System Integration", "Technical Support", "Network Services", "Security Solutions"],
  },
]

export function Services() {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <section id="services" className="py-32 lg:py-40 relative">
      <div ref={ref} className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={cn(
            "max-w-xl mb-20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-sm text-primary font-medium tracking-wide uppercase">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium mt-4 tracking-tight">
            What we build
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={service.title}
                className={cn(
                  "group relative p-8 lg:p-10 rounded-2xl border border-border/40 bg-card/20 hover:bg-card/40 hover:border-border/60 transition-all duration-500 cursor-pointer",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.capabilities.map((cap) => (
                    <span 
                      key={cap} 
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary/40 text-muted-foreground"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
