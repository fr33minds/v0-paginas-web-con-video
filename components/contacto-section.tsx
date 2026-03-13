"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicacion",
    details: ["Tu direccion aqui", "Ciudad, Estado, CP"]
  },
  {
    icon: Phone,
    title: "Telefono",
    details: ["+52 (XXX) XXX-XXXX"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@academiasurieladriano.com"]
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun - Vie: 4:00 PM - 9:00 PM", "Sab: 9:00 AM - 2:00 PM"]
  }
]

export function ContactoSection() {
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
      id="contacto" 
      className="relative py-24 md:py-32 bg-secondary"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Contactanos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
            COMIENZA TU CAMINO
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Da el primer paso hacia una vida mas disciplinada y saludable. 
            Contactanos para agendar tu clase de prueba gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className={`bg-card border border-border rounded-xl p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
              Envia un Mensaje
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Tu telefono"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Programa de Interes
                </label>
                <select className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
                  <option value="">Selecciona un programa</option>
                  <option value="ninos">Ninos (4-12 anos)</option>
                  <option value="avanzados">Avanzados / Competidores</option>
                  <option value="adultos">Adultos (13+ anos)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Cuentanos sobre ti o tus preguntas..."
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
              Informacion de Contacto
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div 
                  key={info.title}
                  className="flex items-start gap-4 p-4 bg-card/50 border border-border rounded-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media / Additional CTA */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                Clase de Prueba GRATIS
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Ven a conocernos sin compromiso. Tu primera clase es completamente gratuita.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Agenda tu Clase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
