'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Corporativo Vértice',
    category: 'Señalética High-End // 2023',
    material: 'Acero Inoxidable',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
  },
  {
    title: 'Plaza Monolito',
    category: 'Retail Exterior // 2024',
    material: 'Iluminación LED',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029',
  },
  {
    title: 'Galería Estructura',
    category: 'Sistemas Wayfinding // 2023',
    material: 'Aluminio Mate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
  },
]

export function Portfolio() {
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
    <section id="portafolio" ref={sectionRef} className="py-section bg-backgroundAlt border-t border-border/30">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto mb-12 lg:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <h2 className="reveal section-label mb-4">03 — Portafolio Selecto</h2>
          <h3 className="reveal section-title">Proyectos Destacados</h3>
        </div>
        <a className="reveal hidden sm:flex items-center gap-2 font-mono text-label-md uppercase tracking-widest text-primary hover:text-accent transition-colors" href="#contacto">
          EXPLORAR TODOS
          <span className="material-symbols-outlined text-sm">north_east</span>
        </a>
      </div>

      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`reveal project-card ${index === 1 ? 'sm:mt-0 lg:mt-16' : ''}`}
          >
            <div className="project-card-image group">
              <Image
                alt={project.title}
                src={project.image}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="project-tag">{project.material}</div>
            </div>
            <h4 className="font-display font-semibold text-lg lg:text-xl text-primary uppercase mb-2">
              {project.title}
            </h4>
            <p className="font-mono text-label-sm text-secondary uppercase tracking-widest">
              {project.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
