import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

