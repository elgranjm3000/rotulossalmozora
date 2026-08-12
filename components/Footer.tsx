import { Logo } from './Logo'
import { WhatsAppIcon } from './WhatsAppIcon'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-backgroundAlt border-t border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-16 py-16 lg:py-24 max-w-container mx-auto">
        <div className="lg:col-span-4">
          <Logo className="mb-6" />
          <h2 className="font-display font-semibold text-xl text-primary mb-4">
            Rótulos Almazora
          </h2>
          <p className="font-mono text-body-sm text-secondary leading-relaxed max-w-xs">
            Especialistas en fabricación de rótulos, letreros corporativos, rotulación de fachadas y vehículos. Materiales de primera calidad e instalación profesional garantizada.
          </p>
        </div>

        <div className="sm:col-start-1 lg:col-start-6 lg:col-span-2">
          <h3 className="font-mono text-label-md uppercase tracking-widest text-primary mb-6">
            Servicios
          </h3>
          <ul className="space-y-3">
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="/#servicios">
                Rótulos Comerciales
              </Link>
            </li>
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="/#servicios">
                Rotulación Vehículos
              </Link>
            </li>
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="/#servicios">
                Impresión Gran Formato
              </Link>
            </li>
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="/#beneficios">
                Beneficios
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
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="/privacidad">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="/cookies">
                Política de Cookies
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
              <a className="font-mono text-body-sm text-secondary hover:text-accent transition-colors flex items-center gap-2" href="https://wa.me/34620049872" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a className="font-mono text-body-sm text-secondary hover:text-primary transition-colors" href="mailto:contacto@rotulosalmazora.com">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-16 py-6 lg:py-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-container mx-auto">
        <span className="font-mono text-label-sm text-secondary">
          © 2024 Rótulos Almazora. Todos los derechos reservados.
        </span>
        <div className="flex gap-3">
          <div className="w-2 h-2 bg-primary" />
          <div className="w-2 h-2 bg-border" />
          <div className="w-2 h-2 bg-accent" />
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {/* Tooltip bubble */}
        <a
          href="https://wa.me/34620049872"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary shadow-xl border border-border/50 px-5 py-3 font-body text-body-sm leading-relaxed text-right max-w-[220px] hover:bg-backgroundAlt transition-colors animate-pulse"
          style={{ animationDuration: '4s' }}
        >
          ¿Hablamos por WhatsApp?<br />
          <span className="text-accent font-semibold">Respuesta rápida</span>
        </a>
        {/* Main button */}
        <a
          href="https://wa.me/34620049872"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:bg-[#1fbd5a] hover:scale-105 active:scale-95 transition-all group"
          aria-label="Contactar por WhatsApp para respuesta rápida"
          style={{
            boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)',
          }}
        >
          <WhatsAppIcon className="w-9 h-9 group-hover:scale-110 transition-transform" />
          <div className="text-left hidden sm:block">
            <span className="block font-display font-semibold text-base leading-tight">
              Contacta por WhatsApp
            </span>
            <span className="block font-body text-xs text-white/80 leading-tight">
              Respuesta rápida · Presupuesto gratis
            </span>
          </div>
        </a>
      </div>
    </footer>
  )
}
