"use client"

import { useFadeIn } from "@/hooks/use-fade-in"
import { cn } from "@/lib/utils"

export function About() {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <section id="about" className="py-32 lg:py-40 relative">
      <div ref={ref} className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Main content */}
          <div 
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="text-sm text-primary font-medium tracking-wide uppercase">
              About
            </span>
            <h2 className="text-4xl sm:text-5xl font-medium mt-4 mb-8 tracking-tight leading-[1.1]">
              Engineering intelligence for the modern enterprise
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Rudra Edge is a team of engineers and AI specialists building technology 
                that creates measurable impact. We combine deep technical expertise with 
                a relentless focus on outcomes that matter.
              </p>
              <p>
                Based in Noida, we partner with forward-thinking companies to design and 
                implement AI-powered systems, intelligent automation, and enterprise 
                software that drives competitive advantage.
              </p>
            </div>

            {/* Philosophy points */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { title: "Vision-first", text: "We start with where you want to be, then engineer the path to get there." },
                { title: "Outcome-driven", text: "Every solution we build is measured by the real impact it creates." },
                { title: "Future-ready", text: "We build systems designed to evolve with emerging technologies." },
                { title: "Partnership model", text: "We work as an extension of your team, not just a vendor." },
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className={cn(
                    "transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 80 + 200}ms` }}
                >
                  <h4 className="text-sm font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Commitment card */}
          <div 
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="group relative">
              {/* Main card */}
              <div className="relative p-10 lg:p-12 rounded-3xl border border-border/40 bg-gradient-to-br from-card/60 to-card/20 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                {/* Premium shimmer film on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-24 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-indigo-500/10 blur-2xl animate-rudra-shimmer" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-accent/[0.04]" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    <span className="text-xs text-primary font-medium tracking-wide">Our commitment</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
                    Quality over
                    <br />
                    <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent animate-rudra-shimmer">
                      quantity
                    </span>
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Every project receives our complete attention and expertise. We believe in 
                    doing fewer things exceptionally well, delivering solutions that truly matter 
                    and create lasting value.
                  </p>

                  {/* Visual element */}
                  <div className="flex gap-1.5 mt-10">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i}
                        className="h-1 rounded-full bg-gradient-to-r from-primary/60 to-primary/20"
                        style={{ width: `${100 - i * 20}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative offset border */}
              <div className="absolute -inset-px rounded-3xl border border-primary/10 -z-10 translate-x-2 translate-y-2 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:border-blue-400/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
