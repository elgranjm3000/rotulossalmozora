import { Logo } from './Logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-backgroundAlt border-t border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-16 py-16 lg:py-24 max-w-container mx-auto">
        <div className="lg:col-span-4">
          <Logo className="mb-6" />
          <h2 className="font-display font-semibold text-xl text-primary mb-4">
            Rótulos Salmozora
          </h2>
          <p className="font-mono text-body-sm text-secondary leading-relaxed max-w-xs">
            Precisión arquitectónica en cada corte. Especialistas en soluciones de identidad visual para entornos de alta gama desde 1994.
          </p>
        </div>

        <div className="sm:col-start-1 lg:col-start-6 lg:col-span-2">
          <h3 className="font-mono text-label-md uppercase tracking-widest text-primary mb-6">
            Explorar
          </h3>
          <ul className="space-y-3">
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="#portafolio">
                Portafolio
              </Link>
            </li>
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="#servicios">
                Servicios
              </Link>
            </li>
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="#proceso">
                Proceso
              </Link>
            </li>
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="#contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-mono text-label-md uppercase tracking-widest text-primary mb-6">
            Legal
          </h3>
          <ul className="space-y-3">
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="#">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="#">
                Términos de Servicio
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-mono text-label-md uppercase tracking-widest text-primary mb-6">
            Contacto
          </h3>
          <ul className="space-y-3">
            <li>
              <a className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="mailto:info@rotulossalmozora.com">
                Email
              </a>
            </li>
            <li>
              <a className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="#">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="#">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-16 py-6 lg:py-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-container mx-auto">
        <span className="font-mono text-label-sm text-secondary">
          © 2024 Rótulos Salmozora. Architectural Precision.
        </span>
        <div className="flex gap-3">
          <div className="w-2 h-2 bg-primary" />
          <div className="w-2 h-2 bg-border" />
          <div className="w-2 h-2 bg-accent" />
        </div>
      </div>
    </footer>
  )
}
