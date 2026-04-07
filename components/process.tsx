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
      {/* Distinct "flow field" animation (separate motif) */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute -inset-24 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 blur-3xl animate-rudra-shimmer" />
      </div>
      
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
                "group relative p-8 lg:p-10 bg-background transition-all duration-500 hover:bg-card/30",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              {/* Top gradient tracer on hover */}
              <div className="absolute left-0 right-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-full bg-gradient-to-r from-blue-400/0 via-blue-400/60 to-blue-400/0 animate-rudra-shimmer" />
              </div>
              {/* Corner glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number */}
              <span className="text-6xl lg:text-7xl font-medium text-border/50 absolute top-6 right-6 select-none">
                {step.number}
              </span>
              
              <div className="relative z-10 pt-16 lg:pt-20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary/70">
                    <span className="absolute inset-0 rounded-full bg-blue-400/70 opacity-0 group-hover:opacity-100 animate-ping" />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                    Step
                  </span>
                </div>
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
