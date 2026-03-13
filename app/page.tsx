import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ObjetivoSection } from "@/components/objetivo-section"
import { DisciplinaSection } from "@/components/disciplina-section"
import { ProgramasSection } from "@/components/programas-section"
import { ContactoSection } from "@/components/contacto-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ObjetivoSection />
      <DisciplinaSection />
      <ProgramasSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}
