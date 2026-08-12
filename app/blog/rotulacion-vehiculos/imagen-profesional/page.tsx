import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vehículo Rotulado: Imagen Profesional para tu Empresa',
  description: 'Llegar a tus clientes con un vehículo rotulado proyecta seriedad y profesionalidad. Generas confianza antes incluso de bajar del coche.',
  keywords: ['imagen profesional', 'vehículo rotulado', 'confianza cliente', 'rotulación corporativa flota', 'furgoneta empresa', 'rotulistas Almazora'],
  openGraph: {
    title: 'Vehículo Rotulado: Imagen Profesional para tu Empresa',
    description: 'Llegar a tus clientes con un vehículo rotulado proyecta seriedad y profesionalidad. Generas confianza antes de bajar del coche.',
  },
}

export default function BlogImagenProfesional() {
  return (
    <article className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto">
      <Link href="/blog" className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mb-8 inline-block">
        ← Volver al Blog
      </Link>
      <span className="font-mono text-label-sm text-accent uppercase tracking-widest">Rotulación de Vehículos</span>
      <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase leading-tight mt-4 mb-8">
        Vehículo Rotulado: Imagen Profesional para tu Empresa
      </h1>

      <div className="prose prose-lg max-w-none font-body text-secondary leading-relaxed space-y-6">
        <p className="text-body-lg">
          Imagina que necesitas un fontanero, un electricista o un servicio de reformas. Dos presupuestos similares. Uno llega en una furgoneta rotulada, limpia, con logo y teléfono visibles. El otro llega en un coche particular sin identificar. <strong>¿A quién le encargas el trabajo?</strong>
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">La psicología detrás del vehículo rotulado</h2>
        <p>
          El ser humano asocia inconscientemente <strong>orden = confianza</strong>. Una furgoneta rotulada comunica que te tomas tu negocio en serio. Que has invertido en tu imagen. Que no eres alguien que "hace chapuzas", sino un profesional establecido.
        </p>
        <p>
          De hecho, según varios estudios de percepción de marca, más del <strong>60% de los consumidores</strong> dicen que la apariencia de un vehículo de empresa influye en su decisión de compra o contratación.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Qué información debe llevar tu vehículo rotulado</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Logo de la empresa:</strong> Reconocible, grande. Es lo que la gente recuerda.</li>
          <li><strong>Nombre comercial:</strong> Claro y legible desde varios metros.</li>
          <li><strong>Teléfono o web:</strong> Grande y visible en laterales y trasera. Que puedan apuntarlo o hacerle una foto en un semáforo.</li>
          <li><strong>Servicio principal:</strong> "Fontanería 24h", "Reformas Integrales", "Electricidad Industrial". Que sepan qué haces en 1 segundo.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Rotulación completa vs parcial: ¿qué es más profesional?</h2>
        <p>
          Depende del presupuesto y del uso. Una rotulación parcial (puertas, capó, luneta trasera) ya comunica profesionalidad si está bien diseñada. Una rotulación completa tiene más impacto visual pero también más coste. En <strong>Rótulos Almazora</strong> te ayudamos a decidir según tu presupuesto y objetivos.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Casos donde el vehículo rotulado marca la diferencia</h2>
        <p>
          Un electricista nos contaba que antes de rotular su furgoneta, los vecinos desconfiaban cuando aparcaba frente a un portal. Tras rotularla, la misma furgoneta pasó a ser "los electricistas oficiales del barrio". La diferencia no fue el vehículo, fue la <strong>percepción</strong>.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Conclusión</h2>
        <p>
          Tu vehículo dice más de tu negocio de lo que crees. Un coche o furgoneta rotulada con calidad no es un gasto: es una declaración de intenciones. Comunica que eres profesional, serio y que te preocupas por los detalles. Y eso, para un cliente potencial, vale mucho más que cualquier descuento.
        </p>

        <div className="mt-16 p-8 bg-backgroundAlt border border-border/30">
          <p className="font-mono text-label-sm text-secondary uppercase tracking-widest mb-4">¿Quieres profesionalizar tu imagen?</p>
          <a href="https://wa.me/34620049872" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
            <span>Háblanos por WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  )
}
