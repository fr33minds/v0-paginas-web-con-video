"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Users, Award, Heart } from "lucide-react"

const objectives = [
  {
    icon: Target,
    title: "Mision",
    description: "Formar atletas integrales que destaquen no solo en el tatami, sino en todos los aspectos de su vida, inculcando valores que trascienden el deporte."
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Crear un ambiente de aprendizaje donde cada estudiante se sienta parte de una familia, apoyandose mutuamente en su camino hacia la excelencia."
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscar constantemente la mejora continua, estableciendo estandares altos y trabajando dia a dia para alcanzar y superar nuestras metas."
  },
  {
    icon: Heart,
    title: "Pasion",
    description: "Transmitir el amor por el Taekwondo, inspirando a cada estudiante a descubrir su potencial y a desarrollar una pasion duradera por las artes marciales."
  }
]

export function ObjetivoSection() {
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
      id="objetivo" 
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Parallax background element */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Nuestro Proposito
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
            OBJETIVO DE LA ACADEMIA
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            En Academias Uriel Adriano, nuestro objetivo va mas alla de ensenar tecnicas de combate. 
            Buscamos formar seres humanos completos, con caracter, disciplina y valores solidos.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((item, index) => (
            <div
              key={item.title}
              className={`group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 font-[family-name:var(--font-heading)]">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
