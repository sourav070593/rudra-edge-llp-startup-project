"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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

// Official Rudra Edge brand logo
function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <Image
        src="/rudraedge-logo.png?v=6"
        alt="Rudra Edge"
        width={240}
        height={64}
        className="h-14 w-auto object-contain drop-shadow-sm transition-transform duration-300"
        priority
      />
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
