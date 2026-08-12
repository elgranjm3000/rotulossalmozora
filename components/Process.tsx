'use client'

import { useEffect, useRef } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

const steps = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description: 'Te asesoramos sobre materiales, tamaños y diseño. Te ayudamos a elegir la mejor opción para tu presupuesto.',
  },
  {
    number: '02',
    title: 'Diseñamos y Fabricamos',
    description: 'Creamos el diseño que necesitas y lo fabricamos con materiales de primera calidad en nuestro taller.',
  },
  {
    number: '03',
    title: 'Instalamos y Listo',
    description: 'Montaje profesional en tu local o vehículo. Rápido, limpio y con garantía en todos nuestros trabajos.',
  },
]

export function Process() {
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
    <section id="proceso" ref={sectionRef} className="py-section bg-backgroundAlt">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="reveal section-label mb-4">Cómo trabajamos</h2>
            <h3 className="reveal section-title mb-6">
              De la idea al resultado
            </h3>
            <p className="reveal font-body text-body-lg text-secondary mb-10 leading-relaxed max-w-md">
              Un proceso sencillo y directo. Sin complicaciones, sin vueltas. Tú nos cuentas lo que necesitas y nosotros lo hacemos realidad.
            </p>
            <a
              href="https://wa.me/34620049872"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal btn-primary inline-flex items-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Pide tu presupuesto</span>
            </a>
          </div>

          <div className="lg:col-start-7 lg:col-span-6 space-y-10 lg:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="reveal flex gap-6 lg:gap-8 items-start">
                <span className="font-display font-display-lg text-headline-lg lg:text-display-lg text-border leading-none">
                  {step.number}
                </span>
                <div>
                  <h4 className="font-display font-semibold text-xl text-primary uppercase mb-2">
                    {step.title}
                  </h4>
                  <p className="font-body text-body-sm text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
