'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function ServiciosDestacados() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element, i: number) => {
              setTimeout(() => el.classList.add('active'), i * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-section px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
      <div className="mb-16 lg:mb-20">
        <h2 className="reveal section-label mb-4">Servicios Destacados</h2>
        <h3 className="reveal section-title">
          Lo que tu negocio<br />
          necesita
        </h3>
      </div>

      {/* Rotulación de Fachadas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-20 lg:mb-32">
        <div className="reveal lg:col-span-5 lg:col-start-1">
          <span className="font-mono text-label-sm text-accent uppercase tracking-widest">
            Rotulación de Fachadas
          </span>
          <h4 className="font-display font-bold text-3xl sm:text-4xl text-primary uppercase leading-tight mt-4 mb-6">
            Tu fachada es<br />
            <span className="text-accent">tu primer cliente</span>
          </h4>
          <div className="space-y-4 text-secondary font-body text-body-md leading-relaxed max-w-lg">
            <p>
              Antes de que un cliente cruce tu puerta, ya te ha juzgado por lo que ve desde fuera. Una fachada sin rotular es un local invisible. Una fachada bien rotulada es un <strong>imán de clientes</strong>.
            </p>
            <p>
              En <strong>Rótulos Almazora</strong> fabricamos e instalamos rótulos para fachadas de todo tipo: letras corpóreas con iluminación LED, cajas de luz, paneles de aluminio compuesto, banderolas y vinilos para escaparates.
            </p>
            <ul className="list-disc pl-5 space-y-2 pt-2">
              <li>Materiales resistentes a la intemperie (sol, lluvia, viento)</li>
              <li>Iluminación LED de bajo consumo para visibilidad nocturna</li>
              <li>Instalación profesional en cualquier tipo de superficie</li>
              <li>Asesoramiento sobre normativa municipal y de comunidad</li>
            </ul>
          </div>
          <Link
            href="/blog/rotulacion-negocios/atrae-mas-clientes"
            className="inline-flex items-center gap-2 mt-8 font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors"
          >
            Por qué rotular tu fachada
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="reveal lg:col-span-7 lg:col-start-7 relative aspect-[16/10] overflow-hidden">
          <img
            src="/images/trabajo-1.webp"
            alt="Rotulación de fachadas en Almazora - letreros corpóreos, cajas de luz y señalética exterior con iluminación LED profesional"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Rotulación de Vehículos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="reveal lg:col-span-7 lg:col-start-1 relative aspect-[16/10] overflow-hidden order-2 lg:order-1">
          <img
            src="/images/trabajo-2.webp"
            alt="Rotulación de vehículos y furgonetas comerciales en Almazora - vinilos de corte premium, impresión digital y protección de pintura para flotas"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="reveal lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
          <span className="font-mono text-label-sm text-accent uppercase tracking-widest">
            Rotulación de Vehículos
          </span>
          <h4 className="font-display font-bold text-3xl sm:text-4xl text-primary uppercase leading-tight mt-4 mb-6">
            Convierte tu coche<br />
            <span className="text-accent">en un anuncio</span>
          </h4>
          <div className="space-y-4 text-secondary font-body text-body-md leading-relaxed max-w-lg">
            <p>
              ¿Cuánto gastas al mes en publicidad? Rotular tu vehículo cuesta lo mismo que una pequeña campaña de anuncios... pero dura años. Miles de personas ven tu marca cada día <strong>sin pagar un céntimo extra</strong>.
            </p>
            <p>
              Rotulamos coches, furgonetas, camiones y flotas completas con vinilos de alta resistencia. Rotulación parcial o completa, con laminado de protección UV que además <strong>protege la pintura original</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-2 pt-2">
              <li>Vinilo fundido premium que no encoge ni se cuartea</li>
              <li>Impresión digital de alta resolución con colores vivos</li>
              <li>Protege la pintura original de rayos UV y arañazos</li>
              <li>Se retira limpiamente sin dañar la carrocería</li>
            </ul>
          </div>
          <Link
            href="/blog/rotulacion-vehiculos/publicidad-movil-sin-limites"
            className="inline-flex items-center gap-2 mt-8 font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors"
          >
            Ventajas de rotular tu vehículo
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
