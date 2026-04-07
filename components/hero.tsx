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

      {/* India-themed decorative illustration (inline SVG) */}
      <div className="hidden lg:block absolute right-[-90px] top-24 w-[420px] h-[420px] z-0 pointer-events-none select-none">
        <svg viewBox="0 0 420 420" width="420" height="420" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tri-stroke" x1="120" y1="80" x2="300" y2="340" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ef4444" stopOpacity="0.85" />
              <stop offset="0.5" stopColor="#f59e0b" stopOpacity="0.85" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0.85" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer premium ring */}
          <g filter="url(#glow)">
            <circle cx="210" cy="210" r="155" fill="none" stroke="url(#tri-stroke)" strokeWidth="10" opacity="0.22" />
            <circle cx="210" cy="210" r="130" fill="none" stroke="url(#tri-stroke)" strokeWidth="2.5" opacity="0.7" strokeDasharray="6 10">
              <animate attributeName="stroke-dashoffset" from="0" to="-160" dur="8s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Ashoka Chakra-like wheel */}
          <g>
            <circle cx="210" cy="210" r="92" fill="none" stroke="#2563eb" strokeWidth="7" opacity="0.75" />
            <circle cx="210" cy="210" r="78" fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.85" />
            <g opacity="0.9">
              <line x1="210" y1="128" x2="210" y2="148" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
              <line x1="210" y1="252" x2="210" y2="272" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
              <line x1="128" y1="210" x2="148" y2="210" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
              <line x1="272" y1="210" x2="292" y2="210" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />

              <line x1="155" y1="155" x2="169" y2="169" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
              <line x1="251" y1="251" x2="265" y2="265" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
              <line x1="155" y1="265" x2="169" y2="251" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
              <line x1="251" y1="169" x2="265" y2="155" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
            </g>
            <circle cx="210" cy="210" r="18" fill="#2563eb" opacity="0.9" />

            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 210 210"
              to="360 210 210"
              dur="18s"
              repeatCount="indefinite"
            />
          </g>

          {/* Animated circuit lines */}
          <path
            d="M108 244 C 140 210, 165 205, 192 190 S 250 160, 292 170"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3"
            strokeDasharray="10 14"
            opacity="0.6"
            strokeLinecap="round"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="6s" repeatCount="indefinite" />
          </path>
          <path
            d="M132 280 C 160 255, 190 248, 220 244 S 270 235, 310 210"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeDasharray="8 12"
            opacity="0.55"
            strokeLinecap="round"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="7s" repeatCount="indefinite" />
          </path>
        </svg>
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
                  {/* India tricolor mini badge */}
                  <span className="relative inline-flex w-5 h-3 overflow-hidden rounded-sm border border-border/40 animate-pulse">
                    <svg viewBox="0 0 50 30" className="w-5 h-3" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="0" width="50" height="10" fill="#f59e0b" />
                      <rect x="0" y="10" width="50" height="10" fill="#ffffff" />
                      <rect x="0" y="20" width="50" height="10" fill="#22c55e" />
                      {/* Chakra hint */}
                      <circle cx="25" cy="15" r="4.2" fill="none" stroke="#2563eb" strokeWidth="1.2" />
                      <circle cx="25" cy="15" r="2.1" fill="#2563eb" opacity="0.9" />
                    </svg>
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
