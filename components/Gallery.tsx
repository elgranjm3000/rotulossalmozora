'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Lightbox } from './Lightbox'

export const trabajos = [
  { src: '/images/trabajo-1.webp', alt: 'Rótulo comercial fabricado e instalado por rotulistas Almazora - señalética exterior con acabado profesional' },
  { src: '/images/trabajo-2.webp', alt: 'Fabricación de rótulos corporativos Almazora - letrero de fachada para negocio con iluminación LED' },
  { src: '/images/trabajo-3.webp', alt: 'Rotulación profesional de local comercial por Rótulos Almazora - identidad visual corporativa' },
  { src: '/images/trabajo-4.webp', alt: 'Rótulo para tienda y escaparate fabricado en Almazora - diseño y montaje de letreros comerciales' },
  { src: '/images/trabajo-5.webp', alt: 'Rotulación de fachada exterior en Almazora - letreros y señalética para empresas y negocios' },
  { src: '/images/trabajo-6.webp', alt: 'Señalética corporativa y directorios fabricados por rotulistas Almazora - placas y rótulos interiores' },
  { src: '/images/trabajo-7.webp', alt: 'Rotulación de vehículos y furgonetas en Almazora - vinilos publicitarios para flotas y coches comerciales' },
  { src: '/images/trabajo-8.webp', alt: 'Letreros luminosos y cajas de luz fabricados por Rótulos Almazora - rótulos para exterior e interior' },
]

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])
  const prevImage = useCallback(() => setCurrentImage((c) => (c - 1 + trabajos.length) % trabajos.length), [])
  const nextImage = useCallback(() => setCurrentImage((c) => (c + 1) % trabajos.length), [])

  // Reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element, i: number) => {
              setTimeout(() => {
                el.classList.add('active')
              }, i * 100)
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
    <section ref={sectionRef} className="py-section px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
      <div className="mb-16 lg:mb-20">
        <h2 className="reveal section-label mb-4">Trabajos Realizados</h2>
        <h3 className="reveal section-title">Nuestros Proyectos</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {trabajos.map((trabajo, index) => (
          <div key={index} className="reveal group overflow-hidden bg-backgroundAlt">
            <div
              className="relative aspect-video overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(index) }}
              aria-label={`Ampliar imagen: ${trabajo.alt}`}
            >
              <img
                src={trabajo.src}
                alt={trabajo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Magnifier icon on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  zoom_in
                </span>
              </div>
              {/* Corner markings */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white/0 group-hover:border-white/70 transition-all duration-500" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white/0 group-hover:border-white/70 transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={trabajos}
          currentIndex={currentImage}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
