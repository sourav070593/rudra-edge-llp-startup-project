import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Services />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

