"use client"

import { useState } from "react"
import { Mail, MapPin, Send, Loader2, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFadeIn } from "@/hooks/use-fade-in"
import { cn } from "@/lib/utils"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, isVisible } = useFadeIn(0.1)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 lg:py-40 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div 
            className={cn(
              "text-center mb-16 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="text-sm text-primary font-medium tracking-wide uppercase">
              Contact
            </span>
            <h2 className="text-4xl sm:text-5xl font-medium mt-4 mb-6 tracking-tight">
              Start a conversation
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Have a project in mind? Let&apos;s explore how we can help transform your vision into reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div 
              className={cn(
                "lg:col-span-2 space-y-8 transition-all duration-700 delay-150",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Email us</span>
                </div>
                <a 
                  href="mailto:hello@rudraedge.com" 
                  className="text-lg text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                >
                  hello@rudraedge.com
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Location</span>
                </div>
                <p className="text-lg text-foreground">
                  Noida, India
                </p>
              </div>

              <div className="pt-4 border-t border-border/30">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries, 
                  feel free to reach out on WhatsApp.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div 
              className={cn(
                "lg:col-span-3 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {isSubmitted ? (
                <div className="p-10 rounded-2xl border border-border/40 bg-card/20 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Message sent
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-input/30 border-border/40 focus:border-primary h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="bg-input/30 border-border/40 focus:border-primary h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="bg-input/30 border-border/40 focus:border-primary resize-none rounded-xl"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full gap-2 bg-foreground hover:bg-foreground/90 text-background font-medium h-12 rounded-xl" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
