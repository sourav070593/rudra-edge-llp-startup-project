import Link from "next/link"
import Image from "next/image"
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

// Brand Logo using the official image asset
function Logo() {
  return (
    <Image
      src="/rudraedge-logo.png?v=6"
      alt="Rudra Edge"
      width={180}
      height={48}
      className="h-10 w-auto object-contain brightness-110 dark:brightness-100 transition-all duration-500 hover:scale-105"
    />
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
