'use client'

import { useEffect, useRef } from 'react'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  // Reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element, i: number) => {
              setTimeout(() => el.classList.add('active'), i * 150)
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-32 lg:pt-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* SEO img tag */}
        <img
          src="/images/hero-banner.webp"
          alt="Fabricación de rótulos Almazora - letras corpóreas y señalética profesional"
          className="sr-only"
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-banner.webp')" }}
        />
        {/* Strong gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 max-w-container mx-auto w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="reveal inline-block font-mono text-label-lg uppercase tracking-widest bg-accent text-white px-4 py-2 mb-8">
            Rotulistas en Almazora
          </span>

          {/* Headline */}
          <h1 className="reveal font-display font-bold text-4xl sm:text-5xl lg:text-7xl xl:text-[80px] text-primary mb-8 uppercase leading-[0.9] tracking-tight">
            Dale identidad<br />
            <span className="text-accent">a tu negocio</span> con<br />
            rótulos que se ven
          </h1>

          {/* Subheadline */}
          <p className="reveal font-body text-body-lg text-secondary mb-10 max-w-2xl leading-relaxed">
            Rotulistas en Almazora especializados en fabricación de rótulos y rotulación. Hacemos rótulos para fachadas, rotulación de vehículos, letreros corporativos y señalética. Materiales de calidad y presupuesto sin compromiso.
          </p>

          {/* CTA */}
          <div className="reveal">
            <a href="/#servicios" className="btn-secondary text-center inline-block">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Technical Marking */}
      <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 hidden md:block z-10">
        <div className="border-l border-b border-primary/20 w-24 h-24 flex items-end p-3">
          <span className="font-mono text-label-sm text-secondary uppercase tracking-wider">
            Rotulación Profesional
          </span>
        </div>
      </div>
    </section>
  )
}
