import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog',
  },
  title: 'Blog de Rotulación',
  description: 'Artículos sobre rotulación para negocios y vehículos. Aprende cómo los rótulos pueden mejorar tu imagen, atraer clientes y aumentar tus ventas.',
  keywords: ['blog rotulación', 'artículos rótulos', 'consejos rotulación', 'información letreros', 'guía señalética', 'rotulistas Almazora'],
}

const articulos = [
  {
    title: 'Cómo un Buen Rótulo Atrae Más Clientes a tu Negocio',
    desc: 'Descubre por qué un rótulo profesional es tu mejor vendedor 24/7 y cómo puede aumentar tus ingresos hasta un 15%.',
    href: '/blog/rotulacion-negocios/atrae-mas-clientes',
    category: 'Rotulación para Negocios',
    keywords: 'rótulo atrae clientes, letrero comercial, atraer clientes negocio',
  },
  {
    title: 'Rotulación Corporativa: Cómo Refuerza la Imagen de tu Marca',
    desc: 'La primera impresión cuenta. Aprende cómo unos rótulos de calidad construyen una marca sólida y profesional.',
    href: '/blog/rotulacion-negocios/refuerza-tu-marca',
    category: 'Rotulación para Negocios',
    keywords: 'rotulación corporativa, branding negocio, imagen de marca',
  },
  {
    title: 'Rotular tu Negocio: Una Inversión que se Paga Sola',
    desc: 'Comparativa real de costes: rótulo físico vs publicidad digital. Descubre por qué 0,33€ al día es imbatible.',
    href: '/blog/rotulacion-negocios/inversion-que-se-paga-sola',
    category: 'Rotulación para Negocios',
    keywords: 'inversión rótulo, coste letrero, rentabilidad rotulación',
  },
  {
    title: 'Fabricación de Rótulos a Medida: Así Trabajamos en Almazora',
    desc: 'Conoce nuestro taller y proceso de fabricación: diseño, materiales, corte CNC, iluminación LED e instalación. Todo hecho en casa.',
    href: '/blog/rotulacion-negocios/fabricacion-rotulos-almazora',
    category: 'Rotulación para Negocios',
    keywords: 'fabricación de rótulos Almazora, taller de rotulación, rótulos a medida, fabricación letreros',
  },
  {
    title: 'Fabricación de Rótulos: Proceso, Materiales y Calidad',
    desc: 'Cómo se fabrica un rótulo profesional: diseño, materiales, técnicas de corte, iluminación LED e instalación.',
    href: '/blog/rotulacion-negocios/fabricacion-de-rotulos',
    category: 'Rotulación para Negocios',
    keywords: 'fabricación de rótulos, materiales para rótulos, cómo se hacen los rótulos, rótulos a medida',
  },
  {
    title: 'Letras Corpóreas: La Guía Definitiva para Letreros 3D',
    desc: 'Todo sobre letras corpóreas: materiales, iluminación LED, acabados, proceso de fabricación y precios orientativos.',
    href: '/blog/rotulacion-negocios/letras-corporeas',
    category: 'Rotulación para Negocios',
    keywords: 'letras corpóreas, letras 3D, letras corpóreas iluminadas, letras corpóreas fachada, rótulos con volumen',
  },
  {
    title: 'Rotulación de Vehículos: Publicidad Móvil sin Límites',
    desc: 'Convierte tu coche o furgoneta en un anuncio en movimiento. Más de 2 millones de impactos al mes sin costes extra.',
    href: '/blog/rotulacion-vehiculos/publicidad-movil-sin-limites',
    category: 'Rotulación de Vehículos',
    keywords: 'rotulación vehículos, publicidad móvil, vinilos coche',
  },
  {
    title: 'Protege la Pintura de tu Vehículo con Rotulación de Vinilo',
    desc: 'El vinilo de rotulación no solo decora: protege la pintura de rayos UV, arañazos y desgaste durante años.',
    href: '/blog/rotulacion-vehiculos/protege-la-pintura',
    category: 'Rotulación de Vehículos',
    keywords: 'proteger pintura coche, vinilo protección, car wrapping',
  },
  {
    title: 'Vehículo Rotulado: Imagen Profesional para tu Empresa',
    desc: 'Llegar en un vehículo identificado genera confianza inmediata. La psicología detrás de la rotulación profesional.',
    href: '/blog/rotulacion-vehiculos/imagen-profesional',
    category: 'Rotulación de Vehículos',
    keywords: 'imagen profesional, furgoneta rotulada, confianza cliente',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-container mx-auto">
      <div className="mb-16 lg:mb-20">
        <span className="font-mono text-label-sm text-accent uppercase tracking-widest">Blog</span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase leading-tight mt-4">
          Artículos de Rotulación
        </h1>
        <p className="font-body text-body-lg text-secondary max-w-2xl mt-6 leading-relaxed">
          Información práctica sobre rótulos, señalética y rotulación. Aprende cómo sacar el máximo partido a la imagen de tu negocio y vehículo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {articulos.map((articulo) => (
          <Link
            key={articulo.href}
            href={articulo.href}
            className="group border border-border/30 hover:border-border hover:bg-backgroundAlt transition-all p-6 lg:p-8 flex flex-col"
          >
            <span className="font-mono text-label-sm text-accent uppercase tracking-widest mb-4">
              {articulo.category}
            </span>
            <h2 className="font-display font-semibold text-lg text-primary uppercase mb-3 group-hover:text-accent transition-colors leading-tight">
              {articulo.title}
            </h2>
            <p className="font-body text-body-sm text-secondary leading-relaxed mb-6 flex-1">
              {articulo.desc}
            </p>
            <span className="font-mono text-label-sm text-primary uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              Leer artículo
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  )
}
