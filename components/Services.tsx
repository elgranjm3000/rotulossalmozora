'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: 'checkroom',
    title: 'Rótulos Comerciales',
    description: 'Letreros para fachadas, rótulos luminosos, cajas de luz y tótems. Diseños que captan clientes.',
  },
  {
    icon: 'directions_car',
    title: 'Rotulación de Vehículos',
    description: 'Vinilos de alta resistencia para coches, furgonetas y flotas. Tu negocio rodando por la ciudad.',
  },
  {
    icon: 'print',
    title: 'Impresión Gran Formato',
    description: 'Lonas, vinilos, pancartas y displays publicitarios con tintas de larga duración y colores vibrantes.',
  },
  {
    icon: 'format_paint',
    title: 'Señalética Corporativa',
    description: 'Placas, directorios y señalización interior para oficinas, comercios y espacios públicos.',
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
        <h2 className="reveal section-label mb-4">¿Qué hacemos?</h2>
        <h3 className="reveal section-title">Servicios de Rotulación</h3>
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
