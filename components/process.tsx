"use client"

import { useFadeIn } from "@/hooks/use-fade-in"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep understanding of your goals, challenges, and technical landscape.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Crafting a tailored architecture and roadmap aligned with your vision.",
  },
  {
    number: "03",
    title: "Engineering",
    description: "Building with precision, continuous iteration, and transparent progress.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "Deploying with confidence and optimizing based on real-world data.",
  },
]

export function Process() {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <section id="process" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          className={cn(
            "max-w-xl mb-20 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-sm text-primary font-medium tracking-wide uppercase">
            Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium mt-4 tracking-tight">
            How we work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "relative p-8 lg:p-10 bg-background transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              {/* Number */}
              <span className="text-6xl lg:text-7xl font-medium text-border/50 absolute top-6 right-6 select-none">
                {step.number}
              </span>
              
              <div className="relative z-10 pt-16 lg:pt-20">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
