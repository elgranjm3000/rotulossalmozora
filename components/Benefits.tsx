'use client'

import { useEffect, useRef } from 'react'

const businessBenefits = [
  {
    title: 'Atrae más clientes',
    description: 'Un rótulo bien diseñado es tu vendedor silencioso 24/7. Capta la atención de quienes pasan y convierte curiosos en clientes.',
  },
  {
    title: 'Refuerza tu marca',
    description: 'La rotulación profesional comunica calidad, seriedad y confianza. Tu imagen lo es todo en la primera impresión.',
  },
  {
    title: 'Inversión que se paga sola',
    description: 'A diferencia de la publicidad digital, un rótulo físico trabaja para ti durante años sin costes recurrentes.',
  },
]

const vehicleBenefits = [
  {
    title: 'Publicidad móvil sin límites',
    description: 'Tu furgoneta o coche rotulado es un anuncio en movimiento. Miles de impresiones diarias sin pagar un céntimo extra.',
  },
  {
    title: 'Protege la pintura',
    description: 'El vinilo de rotulación protege la carrocería original de rayos UV, arañazos y desgaste. Al retirarlo, la pintura está como nueva.',
  },
  {
    title: 'Imagen profesional',
    description: 'Llegar a tus clientes con un vehículo rotulado proyecta seriedad y profesionalidad. Generas confianza antes de bajar del coche.',
  },
]

export function Benefits() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element, i: number) => {
              setTimeout(() => {
                el.classList.add('active')
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="beneficios" ref={sectionRef} className="py-section bg-backgroundAlt border-t border-border/30">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
        <div className="mb-16 lg:mb-20">
          <h2 className="reveal section-label mb-4">¿Por qué rotular?</h2>
          <h3 className="reveal section-title">Beneficios de la rotulación</h3>
        </div>

        {/* Business Benefits */}
        <div className="mb-20 lg:mb-32">
          <h4 className="reveal font-mono text-label-md uppercase tracking-widest text-accent mb-10">
            — Para tu negocio
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="reveal flex flex-col items-start">
                <span className="font-display font-display-lg text-6xl lg:text-7xl text-border leading-none mb-4">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h5 className="font-display font-semibold text-xl text-primary uppercase mb-3">
                  {benefit.title}
                </h5>
                <p className="font-body text-body-sm text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Benefits */}
        <div>
          <h4 className="reveal font-mono text-label-md uppercase tracking-widest text-accent mb-10">
            — Para tu vehículo
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {vehicleBenefits.map((benefit, index) => (
              <div key={index} className="reveal flex flex-col items-start">
                <span className="font-display font-display-lg text-6xl lg:text-7xl text-border leading-none mb-4">
                  {(index + 4).toString().padStart(2, '0')}
                </span>
                <h5 className="font-display font-semibold text-xl text-primary uppercase mb-3">
                  {benefit.title}
                </h5>
                <p className="font-body text-body-sm text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA inside benefits */}
        <div className="reveal text-center mt-20 lg:mt-32 pt-16 border-t border-border/30">
          <p className="font-body text-body-lg text-secondary max-w-xl mx-auto mb-8">
            ¿Quieres que tu negocio o vehículo destaque? Háblanos sin compromiso.
          </p>
          <a
            href="https://wa.me/34XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 justify-center"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            <span>Te asesoramos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
