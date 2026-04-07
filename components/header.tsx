"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { GlobeEyeMark } from "@/components/globe-eye"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

// Premium Logo with hexagonal R mark and RudraEdge branding
function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group flex items-center gap-2.5 transition-transform duration-500 hover:scale-105",
        className
      )}
    >
      {/* Geometric hexagon mark with R */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hex-border" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60a5fa" stopOpacity="0.95" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path 
            d="M20 3L35 12V28L20 37L5 28V12L20 3Z" 
            className="fill-primary/15 stroke-primary" 
            strokeWidth="1.5"
          />
          {/* Premium outer ring */}
          <path
            d="M20 3L35 12V28L20 37L5 28V12L20 3Z"
            fill="none"
            stroke="url(#hex-border)"
            strokeOpacity="0.55"
            strokeWidth="2.2"
            className="animate-pulse"
          />
          <path
            d="M20 3L35 12V28L20 37L5 28V12L20 3Z"
            fill="none"
            stroke="url(#hex-border)"
            strokeOpacity="0.18"
            strokeWidth="3.6"
          />
          {/* Inner mark: R -> eye morph (no empty fade) */}
          <g className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-95" style={{ transformOrigin: "20px 20px" }}>
            <path 
              d="M14 13H22C24.2 13 26 14.8 26 17C26 19.2 24.2 21 22 21H18V27H14V13ZM18 17.5H21.5C22.1 17.5 22.5 17.1 22.5 16.5C22.5 15.9 22.1 15.5 21.5 15.5H18V17.5Z" 
              className="fill-primary"
            />
            <path
              d="M14 13H22C24.2 13 26 14.8 26 17C26 19.2 24.2 21 22 21H18V27H14V13ZM18 17.5H21.5C22.1 17.5 22.5 17.1 22.5 16.5C22.5 15.9 22.1 15.5 21.5 15.5H18V17.5Z"
              fill="none"
              stroke="url(#hex-border)"
              strokeWidth="1.4"
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity="0.95"
            />
            <path 
              d="M20 21L26 27" 
              className="stroke-primary" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            <path
              d="M20 21L26 27"
              fill="none"
              stroke="url(#hex-border)"
              strokeWidth="1.7"
              strokeLinecap="round"
              opacity="0.95"
            />
          </g>
          <g className="opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" style={{ transformOrigin: "20px 20px" }}>
            <defs>
              <linearGradient id="eyeStrokeRed" x1="10" y1="14" x2="30" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#93c5fd" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
              <radialGradient id="eyeGlowRed" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(16)">
                <stop stopColor="#60a5fa" stopOpacity="0.22" />
                <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="20" cy="20" r="14" fill="url(#eyeGlowRed)" />
            <path
              d="M9.5 20c4.2-5.7 8.9-8.5 10.5-8.5s6.3 2.8 10.5 8.5c-4.2 5.7-8.9 8.5-10.5 8.5S13.7 25.7 9.5 20Z"
              stroke="url(#eyeStrokeRed)"
              strokeWidth="2.4"
              opacity="0.95"
            />
            <circle cx="20" cy="20" r="4.6" fill="#2563eb" opacity="0.95" />
            <circle cx="20" cy="20" r="8.4" stroke="#60a5fa" strokeWidth="1.4" opacity="0.28" />
          </g>
        </svg>

      </div>
      {/* Wordmark */}
      <span className="text-xl font-semibold tracking-tight text-foreground transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-1 group-hover:blur-[1px]">
        RudraEdge
      </span>
    </div>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/30"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10" aria-label="Rudra Edge Home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <GlobeEyeMark />
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="gap-2 bg-foreground hover:bg-foreground/90 text-background font-medium px-5"
            >
              <Link href="#contact">
                Start a project
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-2xl transition-all duration-300 z-40",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="container px-6 py-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-2xl font-medium text-muted-foreground hover:text-foreground transition-all duration-300 py-4 border-b border-border/30",
                    isMobileMenuOpen && "animate-in fade-in slide-in-from-bottom-4"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild 
                size="lg" 
                className="w-full mt-8 gap-2 bg-foreground hover:bg-foreground/90 text-background font-medium"
              >
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Start a project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
