"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* 
          INSTRUCCIONES PARA TU VIDEO:
          1. Coloca tu video en la carpeta /public/videos/
          2. Nombra el archivo como: hero-video.mp4
          3. El video se reproducira automaticamente en loop
          
          Mientras tanto, se muestra un fondo oscuro con gradiente
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent -z-10" />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 border border-primary/50 rounded-full">
            <span className="text-sm text-primary font-medium tracking-widest uppercase">
              Arte Marcial Coreano
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-shadow-lg font-[family-name:var(--font-heading)] leading-tight">
            ACADEMIAS{" "}
            <span className="text-primary">URIEL ADRIANO</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-shadow font-[family-name:var(--font-heading)] tracking-wide">
            TAEKWONDO
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Formamos campeones con disciplina, respeto y excelencia. 
            Mas de 20 anos transformando vidas a traves del arte marcial.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 tracking-wide"
            >
              Comienza Hoy
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold text-lg px-8 py-6 tracking-wide"
            >
              Conoce Mas
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
