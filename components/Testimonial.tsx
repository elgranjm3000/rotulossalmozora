'use client'

import { useEffect, useRef } from 'react'

export function Testimonial() {
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
    <section ref={sectionRef} className="py-section px-4 sm:px-6 lg:px-16 max-w-container mx-auto text-center">
      <div className="reveal max-w-4xl mx-auto">
        <span className="material-symbols-outlined text-5xl lg:text-6xl text-border mb-8">
          format_quote
        </span>
        <p className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-primary leading-tight mb-10">
          &quot;Contactamos con Almozora para rotular toda nuestra flota de reparto y el resultado fue espectacular. Buenos materiales, rapidísimos y muy buen precio. Ahora cualquier persona que ve nuestras furgonetas sabe quiénes somos.&quot;
        </p>
        <div>
          <h4 className="font-display font-semibold text-lg text-primary uppercase">
            Carlos Méndez
          </h4>
          <p className="font-mono text-label-sm text-secondary uppercase tracking-widest">
            Gerente // Transportes Méndez
          </p>
        </div>
      </div>
    </section>
  )
}
