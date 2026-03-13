"use client"

import { useEffect, useRef, useState } from "react"
import { Baby, Zap, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    icon: Baby,
    title: "Ninos",
    age: "4 - 12 anos",
    color: "from-blue-600 to-blue-800",
    features: [
      "Desarrollo de coordinacion motriz",
      "Mejora de la concentracion",
      "Valores y respeto",
      "Actividad fisica saludable",
      "Confianza y autoestima",
      "Trabajo en equipo"
    ],
    description: "Programa disenado especialmente para los mas pequenos, enfocado en el desarrollo integral a traves del juego y la disciplina marcial."
  },
  {
    icon: Zap,
    title: "Avanzados",
    age: "Competidores",
    color: "from-primary to-red-800",
    features: [
      "Entrenamiento de alta intensidad",
      "Tecnicas avanzadas de combate",
      "Preparacion para torneos",
      "Acondicionamiento fisico",
      "Estrategia y tactica",
      "Mentalidad competitiva"
    ],
    description: "Para quienes buscan llevar su practica al siguiente nivel y competir en torneos regionales, nacionales e internacionales.",
    featured: true
  },
  {
    icon: User,
    title: "Adultos",
    age: "13+ anos",
    color: "from-accent to-blue-900",
    features: [
      "Defensa personal efectiva",
      "Acondicionamiento completo",
      "Reduccion de estres",
      "Flexibilidad y fuerza",
      "Tecnica tradicional",
      "Comunidad de apoyo"
    ],
    description: "Nunca es tarde para comenzar. Nuestro programa para adultos combina tradicion, fitness y defensa personal."
  }
]

export function ProgramasSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section 
      ref={sectionRef}
      id="programas" 
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Elige tu Camino
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
            NUESTROS PROGRAMAS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Tenemos un programa para cada etapa de tu vida. Desde los mas pequenos hasta 
            los competidores de elite, todos encuentran su lugar en nuestra academia.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group relative bg-card border rounded-xl overflow-hidden transition-all duration-500 ${
                program.featured 
                  ? "border-primary lg:scale-105 lg:-my-4" 
                  : "border-border hover:border-primary/50"
              } ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {program.featured && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold tracking-wider">
                  MAS POPULAR
                </div>
              )}

              <div className={`p-8 ${program.featured ? "pt-14" : ""}`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Age */}
                <h3 className="text-2xl font-bold text-foreground mb-1 font-[family-name:var(--font-heading)]">
                  {program.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {program.age}
                </p>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full group/btn ${
                    program.featured 
                      ? "bg-primary hover:bg-primary/90" 
                      : "bg-secondary hover:bg-secondary/80"
                  } text-foreground`}
                >
                  Mas Informacion
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
