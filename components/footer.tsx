import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

const footerLinks = {
  services: [
    { label: "AI & Machine Learning", href: "#services" },
    { label: "Intelligent Automation", href: "#services" },
    { label: "Cloud Architecture", href: "#services" },
    { label: "Enterprise Software", href: "#services" },
    { label: "Android Development", href: "#services" },
    { label: "IT Services", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

// Premium Logo with hexagonal R mark and RudraEdge branding
function Logo() {
  return (
    <div className="group flex items-center gap-2 transition-transform duration-500 hover:scale-105">
      {/* Geometric hexagon mark with R */}
      <div className="relative w-8 h-8 flex items-center justify-center">
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
          {/* Inner mark: R -> eye morph */}
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
      <span className="text-lg font-semibold tracking-tight text-foreground transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-1 group-hover:blur-[1px]">
        RudraEdge
      </span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mb-6">
              AI-first technology partner for companies ready to lead.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-xl bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-5">Get in touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@rudraedge.com" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@rudraedge.com
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Noida, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RudraEdge LLP. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
