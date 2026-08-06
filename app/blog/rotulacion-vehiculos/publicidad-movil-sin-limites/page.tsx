import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rotulación de Vehículos: Publicidad Móvil sin Límites',
  description: 'Convierte tu coche o furgoneta en un anuncio en movimiento. La rotulación de vehículos genera miles de impresiones diarias sin costes publicitarios recurrentes.',
  keywords: ['rotulación de vehículos', 'publicidad móvil', 'vinilos para coches', 'rotular furgoneta', 'publicidad en vehículos', 'flota rotulada', 'rotulistas Almazora'],
  openGraph: {
    title: 'Rotulación de Vehículos: Publicidad Móvil sin Límites',
    description: 'Convierte tu coche o furgoneta en un anuncio en movimiento. Miles de impresiones diarias sin pagar un céntimo extra.',
  },
}

export default function BlogPublicidadMovil() {
  return (
    <article className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto">
      <Link href="/blog" className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mb-8 inline-block">
        ← Volver al Blog
      </Link>
      <span className="font-mono text-label-sm text-accent uppercase tracking-widest">Rotulación de Vehículos</span>
      <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase leading-tight mt-4 mb-8">
        Rotulación de Vehículos: Publicidad Móvil sin Límites
      </h1>

      <div className="prose prose-lg max-w-none font-body text-secondary leading-relaxed space-y-6">
        <p className="text-body-lg">
          ¿Cuánto pagas al mes en publicidad digital? ¿Y si te dijéramos que por el precio de rotular tu vehículo una sola vez, tienes publicidad <strong>todos los días durante años</strong> sin pagar un céntimo más? Así funciona la rotulación de vehículos.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">¿Cuántas impresiones genera tu coche al día?</h2>
        <p>
          Según la <em>Outdoor Advertising Association</em>, un solo vehículo rotulado genera entre <strong>30.000 y 70.000 impresiones visuales al día</strong> en entornos urbanos. Cada persona que te ve en un semáforo, en un atasco o al aparcar está viendo tu marca.
        </p>
        <p>
          En un mes, eso son más de <strong>2 millones de impactos publicitarios</strong>. Compáralo con una campaña de Facebook Ads que, por el mismo presupuesto, te da 50.000 impresiones... y solo durante el mes que pagas.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">No solo para grandes empresas</h2>
        <p>
          Antes la rotulación de vehículos era cosa de grandes flotas. Hoy, cualquier autónomo o pequeño negocio puede rotular su furgoneta o coche por un precio muy razonable. De hecho, es <strong>la forma más rentable de publicidad para PYMES y autónomos</strong>.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Tipos de rotulación de vehículos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Rotulación parcial:</strong> Solo puertas, capó o laterales con vinilo de corte. La opción más económica.</li>
          <li><strong>Rotulación completa:</strong> Todo el vehículo cubierto con vinilo impreso. Máximo impacto visual.</li>
          <li><strong>Rotulación de lunetas:</strong> Vinilo microperforado en la luna trasera. Se ve desde fuera pero desde dentro no quita visibilidad.</li>
          <li><strong>Lettering corporativo:</strong> Solo texto y logo. Limpio, elegante y profesional.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Conclusión</h2>
        <p>
          Rotular tu vehículo es convertir cada trayecto en una oportunidad de negocio. No hay otra forma de publicidad que te dé tantas impresiones por tan poco dinero. En <strong>Rótulos Almazora</strong> te asesoramos sobre qué tipo de rotulación se adapta mejor a tu presupuesto.
        </p>

        <div className="mt-16 p-8 bg-backgroundAlt border border-border/30">
          <p className="font-mono text-label-sm text-secondary uppercase tracking-widest mb-4">¿Quieres rotular tu vehículo?</p>
          <a href="https://wa.me/34XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
            <span>Pide presupuesto por WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  )
}
