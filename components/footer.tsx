import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 font-[family-name:var(--font-heading)]">
              ACADEMIAS <span className="text-primary">URIEL ADRIANO</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Formando campeones con disciplina, respeto y excelencia desde hace mas de 20 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Enlaces Rapidos
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Objetivo", "Disciplina", "Programas", "Contacto"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Programas
            </h4>
            <ul className="space-y-2">
              {["Ninos (4-12 anos)", "Avanzados / Competidores", "Adultos (13+ anos)"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#programas"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Academias Uriel Adriano. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacidad
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
