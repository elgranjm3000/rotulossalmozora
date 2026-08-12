'use client'

import { useState, useEffect, useRef } from 'react'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

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

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setStatusMessage('')

    try {
      const res = await fetch('/sendmail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('ok')
        setStatusMessage(data.message)
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
      } else {
        setStatus('error')
        setStatusMessage(data.message)
      }
    } catch {
      setStatus('error')
      setStatusMessage('Error de conexión. Contáctanos directamente por WhatsApp para una respuesta inmediata.')
    }
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-section border-t border-border/30">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="reveal text-center mb-12">
            <div className="mb-10 max-w-md mx-auto">
              <p className="font-body text-body-md text-secondary mb-4">
                ¿Prefieres una respuesta más rápida? Contáctanos directamente por WhatsApp y te respondemos en minutos.
              </p>
              <a
                href="https://wa.me/34620049872"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-8 py-5 bg-[#25D366] text-white hover:bg-[#1fbd5a] transition-all hover:scale-[1.02] active:scale-95"
                style={{
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35)',
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <div className="text-left">
                  <span className="block font-display font-semibold text-lg leading-tight">
                    Contacta por WhatsApp
                  </span>
                  <span className="block font-body text-sm text-white/80 leading-tight">
                    Respuesta rápida · Presupuesto gratis
                  </span>
                </div>
              </a>
            </div>
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
                  required
                  className="w-full bg-white border-b-2 border-primary/20 px-0 py-3 font-body text-body-md text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-label-sm uppercase tracking-widest text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  required
                  className="w-full bg-white border-b-2 border-primary/20 px-0 py-3 font-body text-body-md text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary text-center py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}</span>
              </button>
              {status === 'ok' && (
                <p className="font-body text-body-sm text-center" style={{ color: '#25D366' }}>
                  {statusMessage}
                </p>
              )}
              {status === 'error' && (
                <div className="text-center">
                  <p className="font-body text-body-sm text-accent mb-3">{statusMessage}</p>
                  <a
                    href="https://wa.me/34620049872"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white font-mono text-label-sm uppercase tracking-widest hover:bg-[#1fbd5a] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    Abrir WhatsApp
                  </a>
                </div>
              )}
              {status !== 'error' && (
                <p className="font-mono text-label-sm text-secondary text-center">
                  Te responderemos lo antes posible
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
