'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function FabricacionBanner() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element) => el.classList.add('active'))
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-section bg-backgroundAlt border-t border-border/30">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="reveal lg:col-span-7 relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/fabricacion-rotulos.webp"
              alt="Fabricación de rótulos a medida en el taller de Rótulos Almazora - proceso artesanal con maquinaria de precisión"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Texto */}
          <div className="reveal lg:col-span-5">
            <span className="font-mono text-label-sm text-accent uppercase tracking-widest">
              Fabricación Propia
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase leading-tight mt-4 mb-6">
              No compramos<br />
              rótulos.<br />
              <span className="text-accent">Los fabricamos.</span>
            </h2>
            <p className="font-body text-body-lg text-secondary mb-8 leading-relaxed max-w-md">
              Cada rótulo que sale de nuestro taller está diseñado, cortado, pintado y ensamblado por nosotros. Sin intermediarios. Sin piezas prefabricadas. Control total de calidad desde el primer trazo hasta el último tornillo.
            </p>
            <Link
              href="/blog/rotulacion-negocios/fabricacion-rotulos-almazora"
              className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2"
            >
              Conoce nuestro taller
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
