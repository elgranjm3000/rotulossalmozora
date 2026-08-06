'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

const slides = [
  '/images/hero-banner.webp',
  '/images/trabajo-1.webp',
  '/images/trabajo-2.webp',
  '/images/trabajo-3.webp',
]

const INTERVAL = 5000

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((next: number) => {
    setPrev(current)
    setCurrent(next)
  }, [current])

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        setPrev(c)
        return (c + 1) % slides.length
      })
    }, INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

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
      {/* Cinemagraph Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2s] ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: i === current ? 1 : i === prev ? 0 : 0,
              transform: 'scale(1.05)',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/40 to-white/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 max-w-container mx-auto w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="reveal inline-block font-mono text-label-lg uppercase tracking-widest bg-accent text-white px-4 py-2 mb-8">
            Rotulistas en Almazora // Desde 1994
          </span>

          {/* Headline */}
          <h1 className="reveal font-display font-display-xl text-4xl sm:text-5xl lg:text-display-xl text-primary mb-8 uppercase leading-[0.9] tracking-tight">
            Dale identidad<br />
            <span className="text-accent">a tu negocio</span> con<br />
            rótulos que se ven
          </h1>

          {/* Subheadline */}
          <p className="reveal font-body text-body-lg text-secondary mb-10 max-w-2xl leading-relaxed">
            Rotulistas en Almazora especializados en fabricación de rótulos y rotulación. Hacemos rótulos para fachadas, rotulación de vehículos, letreros corporativos y señalética. Materiales de calidad y presupuesto sin compromiso.
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 justify-center text-center"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Consúltanos por WhatsApp</span>
            </a>
            <a href="#servicios" className="btn-secondary text-center">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-12 h-[2px] transition-all duration-700 ${
              i === current ? 'bg-accent w-16' : 'bg-primary/20 hover:bg-primary/40'
            }`}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Technical Marking */}
      <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 hidden md:block z-10">
        <div className="border-l border-b border-primary/20 w-24 h-24 flex items-end p-3">
          <span className="font-mono text-label-sm text-secondary uppercase tracking-wider">
            Rotulación Profesional // EST.1994
          </span>
        </div>
      </div>
    </section>
  )
}
