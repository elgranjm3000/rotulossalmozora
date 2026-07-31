'use client'

import { useState, useEffect, useRef } from 'react'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: '',
  })

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

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Hola, soy ${formData.nombre || 'un cliente interesado'}.\n\n${formData.mensaje || 'Quisiera información sobre sus servicios de rotulación.'}\n\nTeléfono: ${formData.telefono || 'No indicado'}`
    )
    window.open(`https://wa.me/34XXXXXXXXX?text=${message}`, '_blank')
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-section border-t border-border/30">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left side - WhatsApp CTA */}
          <div className="lg:col-span-5">
            <h2 className="reveal font-display font-display-lg text-headline-xl sm:text-headline-lg lg:text-display-xl text-primary mb-6 uppercase leading-tight tracking-tight">
              Hablemos por<br />
              <span className="text-accent">WhatsApp</span>
            </h2>
            <p className="reveal font-body text-body-lg text-secondary mb-8 leading-relaxed max-w-md">
              Es la forma más rápida de contactarnos. Te respondemos al momento, te asesoramos y te damos presupuesto sin compromiso.
            </p>

            <div className="reveal mb-10">
              <a
                href="https://wa.me/34XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-4 text-lg px-12 py-6"
              >
                <span className="material-symbols-outlined text-2xl">chat</span>
                <span>Abrir WhatsApp</span>
              </a>
            </div>

            <div className="reveal space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">schedule</span>
                <span className="font-body text-body-sm text-secondary">Respuesta rápida, normalmente en minutos</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">description</span>
                <span className="font-body text-body-sm text-secondary">Presupuesto gratuito y sin compromiso</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">verified</span>
                <span className="font-body text-body-sm text-secondary">Más de 30 años de experiencia en rotulación</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:col-start-7 lg:col-span-6">
            <div className="reveal bg-backgroundAlt border border-border/30 p-8 lg:p-12">
              <h3 className="font-mono text-label-md uppercase tracking-widest text-accent mb-2">
                — Escríbenos
              </h3>
              <p className="font-display font-semibold text-2xl lg:text-3xl text-primary uppercase mb-8">
                También puedes dejarnos tu mensaje
              </p>

              <form onSubmit={handleWhatsApp} className="space-y-6">
                <div>
                  <label className="block font-mono text-label-sm uppercase tracking-widest text-primary mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="¿Cómo te llamas?"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full bg-white border-b-2 border-primary/20 px-0 py-3 font-body text-body-md text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-label-sm uppercase tracking-widest text-primary mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="Déjanos tu número"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full bg-white border-b-2 border-primary/20 px-0 py-3 font-body text-body-md text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-label-sm uppercase tracking-widest text-primary mb-2">
                    ¿Qué necesitas?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos qué tipo de rótulo o rotulación te interesa..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full bg-white border-b-2 border-primary/20 px-0 py-3 font-body text-body-md text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center gap-3 justify-center text-center py-4"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span>Enviar por WhatsApp</span>
                </button>
                <p className="font-mono text-label-sm text-secondary text-center">
                  Al enviar, abriremos WhatsApp con tu mensaje listo
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
