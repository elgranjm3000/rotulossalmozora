'use client'

import { useEffect, useRef } from 'react'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element) => {
              el.classList.add('active')
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
    <section id="contacto" ref={sectionRef} className="py-section px-4 sm:px-6 lg:px-16 max-w-container mx-auto text-center border-t border-border/30">
      <div className="reveal py-12 lg:py-20">
        <h2 className="font-display font-display-lg text-headline-xl sm:text-headline-lg lg:text-display-xl text-primary mb-8 uppercase leading-tight tracking-tight">
          ¿Listo para elevar<br />
          <span className="text-accent">su marca?</span>
        </h2>
        <p className="font-body text-body-lg text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          Inicie hoy la transformación de su presencia física. Nuestro equipo técnico responderá a su solicitud en menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:info@rotulossalmozora.com" className="btn-primary">
            Contactar Ahora
          </a>
          <a href="#" className="btn-secondary">
            Solicitar Dossier
          </a>
        </div>
      </div>
    </section>
  )
}
