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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Consulta de ${formData.nombre || 'un cliente'}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre || 'No indicado'}\nTeléfono: ${formData.telefono || 'No indicado'}\n\nMensaje:\n${formData.mensaje || 'Quisiera información sobre sus servicios de rotulación.'}`
    )
    window.location.href = `mailto:contacto@rotulosalmazora.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-section border-t border-border/30">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="reveal text-center mb-12">
            <h2 className="font-display font-display-lg text-headline-xl sm:text-headline-lg lg:text-display-xl text-primary mb-6 uppercase leading-tight tracking-tight">
              ¿Listo para elevar<br />
              <span className="text-accent">tu marca?</span>
            </h2>
            <p className="font-body text-body-lg text-secondary max-w-xl mx-auto leading-relaxed">
              Déjanos tu mensaje y te responderemos lo antes posible con un presupuesto sin compromiso.
            </p>
          </div>

          {/* Contact Form */}
          <div className="reveal bg-backgroundAlt border border-border/30 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full btn-primary text-center py-4"
              >
                <span>Enviar mensaje</span>
              </button>
              <p className="font-mono text-label-sm text-secondary text-center">
                Te responderemos a la mayor brevedad posible
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
