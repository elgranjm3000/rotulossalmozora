'use client'

import { useEffect, useRef } from 'react'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element) => {
              setTimeout(() => {
                el.classList.add('active')
              }, (Array.from(entry.target.querySelectorAll('.reveal')).indexOf(el) as number) * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 max-w-container mx-auto w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="reveal inline-block font-mono text-label-lg uppercase tracking-widest bg-accent text-white px-4 py-2 mb-8">
            Señalética de Alta Gama // Est. 1994
          </span>

          {/* Headline */}
          <h1 className="reveal font-display font-display-xl text-headline-xl sm:text-headline-lg lg:text-display-xl text-primary mb-8 uppercase leading-[0.9] tracking-tight">
            Transformamos su<br />
            <span className="text-accent">Identidad</span> en<br />
            Puntos de Referencia
          </h1>

          {/* Subheadline */}
          <p className="reveal font-body text-body-lg text-secondary mb-10 max-w-2xl leading-relaxed">
            Precisión arquitectónica en cada corte. Especialistas en soluciones de identidad visual para entornos exclusivos, corporativos y retail de alta gama.
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="btn-primary text-center">
              Inicia Tu Proyecto
            </a>
            <a href="#portafolio" className="btn-secondary text-center">
              Ver Portafolio
            </a>
          </div>
        </div>
      </div>

      {/* Technical Marking */}
      <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 hidden md:block">
        <div className="border-l border-b border-primary/20 w-24 h-24 flex items-end p-3">
          <span className="font-mono text-label-sm text-secondary uppercase tracking-wider">
            Architectural Precision // GRID_REF_SAL
          </span>
        </div>
      </div>
    </section>
  )
}
