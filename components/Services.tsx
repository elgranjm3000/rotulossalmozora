'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: 'precision_manufacturing',
    title: 'Precisión Extrema',
    description: 'Corte láser y fresado CNC con tolerancias de micras para acabados perfectos.',
  },
  {
    icon: 'shield',
    title: 'Máxima Durabilidad',
    description: 'Tratamientos anticorrosivos y materiales certificados para exteriores hostiles.',
  },
  {
    icon: 'diamond',
    title: 'Materiales Premium',
    description: 'Aluminio cepillado, acero 316 y acrílicos de alta densidad óptica.',
  },
  {
    icon: 'engineering',
    title: 'Instalación Experta',
    description: 'Equipo propio cualificado para montajes complejos en cualquier estructura.',
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element) => {
              setTimeout(() => {
                el.classList.add('active')
              }, (Array.from(entry.target.querySelectorAll('.reveal')).indexOf(el) as number) * 100)
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
    <section id="servicios" ref={sectionRef} className="py-section px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
      <div className="mb-16 lg:mb-20">
        <h2 className="reveal section-label mb-4">01 — El Estándar Salmozora</h2>
        <h3 className="reveal section-title">Excelencia en cada detalle</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="reveal card-tech group">
            <span className="material-symbols-outlined text-4xl lg:text-5xl text-accent mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </span>
            <h4 className="font-display font-semibold text-lg uppercase mb-3">{service.title}</h4>
            <p className="font-body text-body-sm text-secondary leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
