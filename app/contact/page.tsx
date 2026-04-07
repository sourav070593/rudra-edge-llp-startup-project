import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

