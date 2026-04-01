"use client"

import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFadeIn } from "@/hooks/use-fade-in"
import { cn } from "@/lib/utils"

export function Hero() {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/[0.08] to-transparent rounded-full blur-[100px]" />

      <div ref={ref} className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <div 
            className={cn(
              "flex items-center justify-center mb-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="tracking-wide">Building the future of intelligent systems</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 
            className={cn(
              "text-center transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] text-balance">
              AI solutions that
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] text-muted-foreground/70 mt-1">
              drive real impact
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={cn(
              "text-center text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mt-8 leading-relaxed transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            We engineer intelligent automation, machine learning systems, and enterprise 
            software for companies ready to lead.
          </p>

          {/* CTAs */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <Button 
              asChild 
              size="lg" 
              className="gap-2 px-8 h-12 bg-foreground hover:bg-foreground/90 text-background font-medium text-base"
            >
              <Link href="#contact">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg" 
              className="px-8 h-12 text-muted-foreground hover:text-foreground font-medium text-base"
            >
              <Link href="#services">
                View services
              </Link>
            </Button>
          </div>

          {/* Capabilities */}
          <div 
            className={cn(
              "flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-24 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {["Machine Learning", "Intelligent Automation", "Cloud Systems", "Enterprise Software"].map((item) => (
              <span key={item} className="text-sm text-muted-foreground/60 tracking-wide">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={cn(
          "absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <Link 
          href="#services" 
          className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
