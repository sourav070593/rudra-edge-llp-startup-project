import { Header } from "@/components/header"
import { Process } from "@/components/process"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Process />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

