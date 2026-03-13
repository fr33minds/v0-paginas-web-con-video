"use client"

import { useEffect, useRef, useState } from "react"

const principles = [
  { korean: "Ye-Ui", spanish: "Cortesia", description: "Respeto hacia los demas y hacia uno mismo" },
  { korean: "Yom-Chi", spanish: "Integridad", description: "Distinguir lo correcto de lo incorrecto" },
  { korean: "In-Nae", spanish: "Perseverancia", description: "Paciencia y constancia ante las dificultades" },
  { korean: "Guk-Gi", spanish: "Autocontrol", description: "Dominio de las emociones y acciones" },
  { korean: "Baekjul-Boolgool", spanish: "Espiritu Indomable", description: "Coraje ante la injusticia y la adversidad" },
]

export function DisciplinaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        setParallaxOffset(scrollProgress * 50)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="disciplina" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Los 5 Principios
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
              LA DISCIPLINA DEL <span className="text-primary">TAEKWONDO</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              El Taekwondo no es solo un arte marcial, es un camino de vida. 
              Basado en cinco principios fundamentales que moldean el caracter 
              y fortalecen el espiritu de cada practicante.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Estos principios, conocidos como los Tenets del Taekwondo, son la base 
              de nuestra ensenanza y la guia que seguimos en cada clase, cada entrenamiento 
              y cada momento de nuestras vidas.
            </p>
          </div>

          {/* Right Content - Principles */}
          <div className="space-y-4">
            {principles.map((principle, index) => (
              <div
                key={principle.korean}
                className={`group flex items-center gap-6 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 transition-all duration-500 ${
                  isVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-heading)]">
                      {principle.spanish}
                    </h3>
                    <span className="text-sm text-primary/70 italic">
                      ({principle.korean})
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
