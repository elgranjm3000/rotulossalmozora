'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const productos = [
  {
    titulo: 'Letras Corpóreas',
    subtitulo: 'Rótulos 3D con presencia',
    descripcion: 'Letras con volumen que transforman cualquier fachada o recepción en un espacio premium. Disponibles en acrílico, aluminio y acero inoxidable, con iluminación LED frontal o efecto halo retroiluminado.',
    imagen: '/images/trabajo-4.webp',
    enlace: '/blog/rotulacion-negocios/letras-corporeas',
    enlaceTexto: 'Guía completa de letras corpóreas',
    caracteristicas: [
      'Fabricación a medida con corte CNC de precisión',
      'Iluminación LED frontal, trasera (halo) o lateral',
      'Acabados: lacado, cepillado, anodizado o espejo',
      'Para fachadas, recepciones, lobbies y oficinas',
    ],
  },
  {
    titulo: 'Banderolas Luminosas',
    subtitulo: 'Visibilidad desde todos los ángulos',
    descripcion: 'Rótulos salientes perpendiculares a la fachada que captan la atención de los peatones desde cualquier dirección. Perfectas para calles comerciales, centros urbanos y galerías.',
    imagen: '/images/trabajo-6.webp',
    enlace: '/#contacto',
    enlaceTexto: 'Solicita presupuesto',
    caracteristicas: [
      'Estructura de aluminio ligera y resistente',
      'Doble cara con iluminación LED uniforme',
      'Fijación segura a fachada con brazo reforzado',
      'Ideal para comercios, farmacias y hostelería',
    ],
  },
  {
    titulo: 'Cajas de Luz LED',
    subtitulo: 'Brilla de día y de noche',
    descripcion: 'Estructuras de aluminio con frente de metacrilato difusor e iluminación LED interior de bajo consumo. La solución más efectiva para que tu negocio sea visible las 24 horas del día.',
    imagen: '/images/trabajo-2.webp',
    enlace: '/blog/rotulacion-negocios/fabricacion-rotulos-almazora',
    enlaceTexto: 'Cómo fabricamos tus rótulos',
    caracteristicas: [
      'Módulos LED de alta eficiencia (50.000 horas)',
      'Frente de metacrilato blanco difusor sin puntos calientes',
      'Marco de aluminio lacado en cualquier color RAL',
      'Para interior y exterior con sellado estanco IP67',
    ],
  },
]

export function ProductosPremium() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el: Element, i: number) => {
              setTimeout(() => el.classList.add('active'), i * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-section bg-backgroundAlt border-t border-border/30">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
        <div className="mb-16 lg:mb-20">
          <h2 className="reveal section-label mb-4">Productos Premium</h2>
          <h3 className="reveal section-title">
            Soluciones que<br />
            marcan la diferencia
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {productos.map((prod, index) => (
            <div key={index} className="reveal flex flex-col">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden mb-6">
                <img
                  src={prod.imagen}
                  alt={`${prod.titulo} - ${prod.subtitulo} fabricados por Rótulos Almazora`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <span className="font-mono text-label-sm text-accent uppercase tracking-widest mb-2">
                  {prod.subtitulo}
                </span>
                <h4 className="font-display font-bold text-2xl lg:text-3xl text-primary uppercase leading-tight mb-4">
                  {prod.titulo}
                </h4>
                <p className="font-body text-body-sm text-secondary leading-relaxed mb-6">
                  {prod.descripcion}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8 flex-1">
                  {prod.caracteristicas.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-body-sm text-secondary">
                      <span className="mt-0.5 w-1.5 h-1.5 bg-accent flex-shrink-0" style={{ marginTop: '0.5rem' }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={prod.enlace}
                  className="inline-flex items-center gap-2 font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mt-auto"
                >
                  {prod.enlaceTexto}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
