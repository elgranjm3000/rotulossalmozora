'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Lightbox } from './Lightbox'

const categorias = [
  {
    src: '/images/trabajo-1.webp',
    titulo: 'Fabricación de Rótulos',
    alt: 'Fabricación de rótulos a medida por rotulistas Almazora - letrero comercial con acabado profesional',
  },
  {
    src: '/images/trabajo-2.webp',
    titulo: 'Rótulos Luminosos',
    alt: 'Rótulos luminosos y cajas de luz LED fabricados por Rótulos Almazora - iluminación para fachadas',
  },
  {
    src: '/images/trabajo-3.webp',
    titulo: 'Rotulación de Fachadas',
    alt: 'Rotulación de fachadas comerciales en Almazora - letreros y señalética para negocios y empresas',
  },
  {
    src: '/images/trabajo-4.webp',
    titulo: 'Letras Corpóreas 3D',
    alt: 'Letras corpóreas 3D fabricadas en Almazora - rótulos con volumen para fachadas e interiores',
  },
  {
    src: '/images/trabajo-5.webp',
    titulo: 'Rotulación de Vehículos',
    alt: 'Rotulación de vehículos y furgonetas en Almazora - vinilos publicitarios para flotas y coches de empresa',
  },
  {
    src: '/images/trabajo-6.webp',
    titulo: 'Señalética Corporativa',
    alt: 'Señalética corporativa fabricada en Almazora - placas de despacho y directorios para oficinas',
  },
  {
    src: '/images/trabajo-7.webp',
    titulo: 'Impresión Digital y Lonas',
    alt: 'Impresión digital y lonas publicitarias en Almazora - pancartas y displays de gran formato',
  },
  {
    src: '/images/trabajo-8.webp',
    titulo: 'Tótems y Banderolas',
    alt: 'Tótems publicitarios y banderolas fabricados por Rótulos Almazora - señalización exterior',
  },
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
  const prevImage = useCallback(() => setCurrentImage((c) => (c - 1 + categorias.length) % categorias.length), [])
  const nextImage = useCallback(() => setCurrentImage((c) => (c + 1) % categorias.length), [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element, i: number) => {
              setTimeout(() => el.classList.add('active'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-section px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
      <div className="mb-12 lg:mb-16">
        <h2 className="reveal section-label mb-4">Trabajos que Realizamos</h2>
        <h3 className="reveal section-title">
          Realizamos todo tipo<br />
          de trabajos
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {categorias.map((cat, index) => (
          <div key={index} className="reveal group overflow-hidden bg-backgroundAlt">
            <div
              className="relative aspect-video overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(index) }}
              aria-label={`Ampliar: ${cat.titulo}`}
            >
              <img
                src={cat.src}
                alt={cat.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover: magnifier */}
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

      {lightboxOpen && (
        <Lightbox
          images={categorias.map(c => ({ src: c.src, alt: c.alt }))}
          currentIndex={currentImage}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
