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

      {/* Independent floating entities (left + right) with hover "advanced state" */}
      <div className="hidden lg:block absolute inset-0 z-0 select-none">
        {/* Cloud - left */}
        <div className="group absolute left-10 top-28 w-36 h-24 pointer-events-auto animate-rudra-float transition-transform duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-2xl border border-border/30 bg-card/10 backdrop-blur-sm transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-card/20 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]" />
          <svg viewBox="0 0 220 140" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cStroke" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#93c5fd" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="cStroke2" x1="1" y1="0" x2="0" y2="1">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <path
              d="M72 92c-18 0-33-15-33-33 0-14 10-27 25-31 6-18 23-32 43-32 22 0 41 16 46 38 16 2 29 16 29 33 0 18-15 33-33 33H72Z"
              fill="rgba(37,99,235,0.06)"
              stroke="url(#cStroke)"
              strokeWidth="4.5"
              opacity="0.9"
              className="transition-all duration-500 group-hover:opacity-0"
            />
            {/* Advanced state */}
            <path
              d="M72 92c-18 0-33-15-33-33 0-14 10-27 25-31 6-18 23-32 43-32 22 0 41 16 46 38 16 2 29 16 29 33 0 18-15 33-33 33H72Z"
              fill="rgba(52,211,153,0.06)"
              stroke="url(#cStroke2)"
              strokeWidth="5.5"
              opacity="0"
              className="transition-all duration-500 group-hover:opacity-100"
            />
            <path
              d="M56 102c18 10 68 10 86 0"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              opacity="0"
              strokeLinecap="round"
              className="transition-all duration-500 group-hover:opacity-55"
              strokeDasharray="10 12"
            />
          </svg>
        </div>

        {/* Telecom tower - right */}
        <div className="group absolute right-10 top-36 w-28 h-44 pointer-events-auto animate-rudra-float-soft transition-transform duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-2xl border border-border/30 bg-card/10 backdrop-blur-sm transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-card/20 group-hover:shadow-[0_0_40px_rgba(167,139,250,0.12)]" />
          <svg viewBox="0 0 140 220" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tStroke" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#93c5fd" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="tStroke2" x1="0" y1="1" x2="1" y2="0">
                <stop stopColor="#a78bfa" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <path d="M28 202 L70 18 L112 202 Z" fill="none" stroke="url(#tStroke)" strokeWidth="4.2" opacity="0.9" className="transition-all duration-500 group-hover:opacity-0" />
            <path d="M28 202 L70 18 L112 202 Z" fill="none" stroke="url(#tStroke2)" strokeWidth="5.2" opacity="0" className="transition-all duration-500 group-hover:opacity-100" />
            <path d="M44 160h52M40 126h60M36 92h68" stroke="#93c5fd" strokeWidth="4" opacity="0.55" strokeLinecap="round" />
            <circle cx="70" cy="12" r="7" fill="#60a5fa" opacity="0.9" />
            <path d="M70 12c30 12 50 36 50 66" fill="none" stroke="#60a5fa" strokeWidth="3.2" opacity="0.12" className="transition-all duration-500 group-hover:opacity-0.45" />
            <path d="M70 12c-30 12-50 36-50 66" fill="none" stroke="#60a5fa" strokeWidth="3.2" opacity="0.25" className="transition-all duration-500 group-hover:opacity-0.55" />
            {/* Advanced ping ring */}
            <circle cx="70" cy="12" r="20" fill="none" stroke="#a78bfa" strokeWidth="2.5" opacity="0" className="transition-all duration-500 group-hover:opacity-35" />
          </svg>
        </div>

        {/* Agent / robot - left bottom */}
        <div className="group absolute left-16 bottom-28 w-32 h-28 pointer-events-auto animate-rudra-float-soft transition-transform duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-2xl border border-border/30 bg-card/10 backdrop-blur-sm transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-card/20 group-hover:shadow-[0_0_40px_rgba(52,211,153,0.12)]" />
          <svg viewBox="0 0 220 160" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aStroke" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#93c5fd" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="aStroke2" x1="0" y1="1" x2="1" y2="0">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <rect x="40" y="34" width="140" height="110" rx="34" fill="rgba(37,99,235,0.06)" stroke="url(#aStroke)" strokeWidth="4.2" opacity="0.95" className="transition-all duration-500 group-hover:opacity-0" />
            <rect x="40" y="34" width="140" height="110" rx="34" fill="rgba(52,211,153,0.06)" stroke="url(#aStroke2)" strokeWidth="5.2" opacity="0" className="transition-all duration-500 group-hover:opacity-100" />
            <rect x="68" y="62" width="84" height="38" rx="16" fill="#0b1220" opacity="0.55" stroke="#60a5fa" strokeWidth="2.8" />
            <circle cx="92" cy="81" r="7" fill="#60a5fa" />
            <circle cx="128" cy="81" r="7" fill="#60a5fa" />
            <path d="M92 114c14 16 30 16 44 0" fill="none" stroke="#93c5fd" strokeWidth="3.2" opacity="0.7" strokeLinecap="round" />
            <path d="M110 34v-18" stroke="#60a5fa" strokeWidth="3.2" strokeLinecap="round" opacity="0.7" />
            <circle cx="110" cy="10" r="6" fill="#a78bfa" opacity="0" className="transition-all duration-500 group-hover:opacity-85" />
          </svg>
        </div>

        {/* Laptop - right bottom */}
        <div className="group absolute right-20 bottom-24 w-36 h-26 pointer-events-auto animate-rudra-float transition-transform duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-2xl border border-border/30 bg-card/10 backdrop-blur-sm transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-card/20 group-hover:shadow-[0_0_40px_rgba(96,165,250,0.12)]" />
          <svg viewBox="0 0 260 120" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lStroke" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#93c5fd" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="lStroke2" x1="1" y1="0" x2="0" y2="1">
                <stop stopColor="#a78bfa" />
                <stop offset="1" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <rect x="32" y="18" width="170" height="70" rx="16" fill="rgba(37,99,235,0.06)" stroke="url(#lStroke)" strokeWidth="4.2" opacity="0.95" className="transition-all duration-500 group-hover:opacity-0" />
            <rect x="32" y="18" width="170" height="70" rx="16" fill="rgba(167,139,250,0.06)" stroke="url(#lStroke2)" strokeWidth="5.2" opacity="0" className="transition-all duration-500 group-hover:opacity-100" />
            <rect x="52" y="32" width="130" height="42" rx="10" fill="#0b1220" opacity="0.55" stroke="#60a5fa" strokeWidth="2.5" />
            <path d="M12 96h210" stroke="url(#lStroke)" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
            <path d="M46 96c18 14 102 14 120 0" fill="none" stroke="#93c5fd" strokeWidth="3" opacity="0.25" />
            {/* Advanced scan line */}
            <path d="M58 52h118" stroke="#34d399" strokeWidth="3" opacity="0" className="transition-all duration-500 group-hover:opacity-0.55" strokeDasharray="12 10" />
          </svg>
        </div>

        {/* Mobile apps - mid right */}
        <div className="group absolute right-44 top-44 w-20 h-36 pointer-events-auto animate-rudra-float transition-transform duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-2xl border border-border/30 bg-card/10 backdrop-blur-sm transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-card/20 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]" />
          <svg viewBox="0 0 140 240" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mStroke" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#93c5fd" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="mStroke2" x1="0" y1="1" x2="1" y2="0">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <rect x="24" y="18" width="92" height="190" rx="22" fill="rgba(37,99,235,0.06)" stroke="url(#mStroke)" strokeWidth="4.2" opacity="0.95" className="transition-all duration-500 group-hover:opacity-0" />
            <rect x="24" y="18" width="92" height="190" rx="22" fill="rgba(52,211,153,0.06)" stroke="url(#mStroke2)" strokeWidth="5.2" opacity="0" className="transition-all duration-500 group-hover:opacity-100" />
            <rect x="36" y="42" width="68" height="120" rx="16" fill="#0b1220" opacity="0.55" stroke="#60a5fa" strokeWidth="2.6" />
            <circle cx="70" cy="182" r="7" fill="#93c5fd" opacity="0.75" />
            <path d="M46 70h48" stroke="#93c5fd" strokeWidth="3" opacity="0.3" strokeLinecap="round" />
            <path d="M46 90h30" stroke="#93c5fd" strokeWidth="3" opacity="0.25" strokeLinecap="round" />
            <path d="M46 112h44" stroke="#34d399" strokeWidth="3" opacity="0" className="transition-all duration-500 group-hover:opacity-0.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

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
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] mt-1">
              <span className="inline-block bg-gradient-to-r from-primary/90 via-blue-500/85 to-accent/90 bg-clip-text text-transparent animate-rudra-text-drift-subtle">
                drive real impact
              </span>
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
