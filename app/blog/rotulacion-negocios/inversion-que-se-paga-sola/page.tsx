import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rotular tu Negocio: Una Inversión que se Paga Sola',
  description: 'Comparativa de costes entre rotulación física y publicidad digital. Descubre por qué un rótulo es la inversión con mejor retorno para tu negocio.',
  keywords: ['inversión en rótulos', 'retorno inversión rotulación', 'coste rótulo negocio', 'publicidad exterior', 'rentabilidad letreros', 'rotulistas Almazora'],
  alternates: {
    canonical: '/blog/rotulacion-negocios/inversion-que-se-paga-sola',
  },
  openGraph: {
    title: 'Rotular tu Negocio: Una Inversión que se Paga Sola',
    description: 'Comparativa de costes entre rotulación física y publicidad digital. Descubre por qué un rótulo es la inversión con mejor retorno.',
  },
}

export default function BlogInversion() {
  return (
    <article className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto">
      <Link href="/blog" className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mb-8 inline-block">
        ← Volver al Blog
      </Link>
      <span className="font-mono text-label-sm text-accent uppercase tracking-widest">Rotulación para Negocios</span>
      <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase leading-tight mt-4 mb-8">
        Rotular tu Negocio: Una Inversión que se Paga Sola
      </h1>

      <div className="prose prose-lg max-w-none font-body text-secondary leading-relaxed space-y-6">
        <p className="text-body-lg">
          Muchos comerciantes dudan antes de encargar un rótulo: "¿cuánto cuesta?", "¿merece la pena?". La respuesta corta es <strong>sí, y mucho</strong>. Vamos a ver por qué con números reales.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">El coste real de un rótulo vs otras formas de publicidad</h2>
        <p>
          Imagina que inviertes <strong>600€</strong> en un rótulo para tu fachada. Ese letrero dura, como mínimo, <strong>5 años</strong>. Eso son 120€ al año. O lo que es lo mismo: <strong>0,33€ al día</strong>.
        </p>
        <p>
          Compáralo con otras formas de publicidad:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Anuncio en Instagram/Facebook:</strong> desde 5€ al día = 1.825€ al año, y solo lo ven mientras pagas.</li>
          <li><strong>Google Ads para negocio local:</strong> desde 10€ al día = 3.650€ al año.</li>
          <li><strong>Buzoneo de folletos:</strong> unos 200€ por tirada, cubriendo una zona limitada, y la mayoría acaban en la basura.</li>
          <li><strong>Un rótulo profesional:</strong> 0,33€ al día durante 5 años, visible para <strong>todo el que pase por tu calle</strong>.</li>
        </ul>
        <p>
          La diferencia es abismal. La publicidad física —tu rótulo— no tiene costes recurrentes: la pagas una vez y trabaja para ti durante años.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">El cálculo del retorno</h2>
        <p>
          Supongamos que un rótulo de 600€ te trae <strong>un solo cliente nuevo a la semana</strong> gracias a que te ve al pasar. Si ese cliente gasta 20€ de media, en un año son 1.040€ adicionales. Has recuperado la inversión en menos de 7 meses. El resto es beneficio puro.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Lo barato sale caro</h2>
        <p>
          Un rótulo de vinilo barato puede durar 1-2 años antes de decolorarse o despegarse. Uno de aluminio o acrílico con protección UV dura <strong>más de 10 años</strong> manteniendo su aspecto. A largo plazo, los materiales de calidad son más rentables.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Conclusión</h2>
        <p>
          Desde el punto de vista económico, <strong>no rotular tu negocio te cuesta más que hacerlo</strong>. Cada día sin un letrero visible es un día que potenciales clientes pasan de largo. En Rótulos Almazora te asesoramos sobre la mejor relación calidad-precio para tu caso.
        </p>

        <div className="mt-16 p-8 bg-backgroundAlt border border-border/30">
          <p className="font-mono text-label-sm text-secondary uppercase tracking-widest mb-4">Pide presupuesto sin compromiso</p>
          <a href="https://wa.me/34620049872" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
            <span>Solicitar presupuesto por WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  )
}
