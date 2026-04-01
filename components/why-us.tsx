"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFadeIn } from "@/hooks/use-fade-in"
import { cn } from "@/lib/utils"

const advantages = [
  {
    title: "AI-native approach",
    description: "We think in AI-first solutions, leveraging cutting-edge technology to solve complex problems intelligently.",
  },
  {
    title: "Engineering excellence",
    description: "Clean architecture, comprehensive testing, and maintainable code that scales with your business.",
  },
  {
    title: "Rapid iteration",
    description: "Agile workflows and efficient processes ensure we deliver high-quality results without delays.",
  },
  {
    title: "True partnership",
    description: "We embed with your team, fully invested in your success and available when you need us.",
  },
  {
    title: "Security-first",
    description: "Enterprise-grade security practices built into every layer of the systems we create.",
  },
  {
    title: "Continuous support",
    description: "Long-term partnership with ongoing optimization and support after launch.",
  },
]

export function WhyUs() {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <section id="why-us" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-12">
          {/* Left - Header */}
          <div 
            className={cn(
              "lg:sticky lg:top-32 lg:self-start transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="text-sm text-primary font-medium tracking-wide uppercase">
              Why Rudra Edge
            </span>
            <h2 className="text-4xl sm:text-5xl font-medium mt-4 mb-6 tracking-tight">
              The edge you need
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We engineer solutions that create real competitive advantage, not just functional software.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="gap-2 bg-foreground hover:bg-foreground/90 text-background font-medium"
            >
              <Link href="#contact">
                Work with us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Advantages grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "p-6 rounded-2xl border border-border/40 bg-card/20 hover:bg-card/40 hover:border-border/60 transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 80 + 100}ms` }}
              >
                <h3 className="text-base font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
