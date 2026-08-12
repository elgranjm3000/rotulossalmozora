import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fabricación de Rótulos: Proceso, Materiales y Calidad',
  description: 'Descubre cómo se fabrican los rótulos profesionales: desde el diseño hasta la instalación. Materiales, técnicas de corte, iluminación LED y acabados de calidad.',
  keywords: ['fabricación de rótulos', 'cómo se hacen los rótulos', 'materiales para rótulos', 'fabricación letreros', 'corte CNC rótulos', 'rótulos a medida', 'fabricación rótulos Almazora', 'rotulistas Almazora'],
  alternates: {
    canonical: '/blog/rotulacion-negocios/fabricacion-de-rotulos',
  },
  openGraph: {
    title: 'Fabricación de Rótulos: Proceso, Materiales y Calidad',
    description: 'Descubre cómo se fabrican los rótulos profesionales: desde el diseño hasta la instalación. Materiales, técnicas y acabados.',
  },
}

export default function BlogFabricacionRotulos() {
  return (
    <article className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto">
      <Link href="/blog" className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mb-8 inline-block">
        ← Volver al Blog
      </Link>
      <span className="font-mono text-label-sm text-accent uppercase tracking-widest">Rotulación para Negocios</span>
      <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase leading-tight mt-4 mb-8">
        Fabricación de Rótulos: Proceso, Materiales y Calidad
      </h1>

      <div className="prose prose-lg max-w-none font-body text-secondary leading-relaxed space-y-6">
        <p className="text-body-lg">
          Detrás de cada rótulo hay un proceso de fabricación que combina diseño, tecnología y artesanía. En este artículo te explicamos <strong>cómo fabricamos los rótulos en Almazora</strong>, qué materiales usamos y por qué la calidad marca la diferencia.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">1. Diseño y Conceptualización</h2>
        <p>
          Todo empieza con una idea. Ya sea que traigas tu logo y diseño, o necesites que te ayudemos a crearlo desde cero, nuestro equipo te asesora sobre:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Tipografía:</strong> Letras legibles desde la distancia, con el estilo adecuado para tu marca.</li>
          <li><strong>Colores:</strong> Tintas y vinilos con alta resistencia a la intemperie y fidelidad cromática.</li>
          <li><strong>Tamaño y proporción:</strong> Adaptado a tu fachada, vehículo o espacio disponible.</li>
          <li><strong>Normativa:</strong> Si tu local está en una comunidad de propietarios o zona regulada, te orientamos sobre los requisitos.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">2. Materiales de Fabricación</h2>
        <p>
          No todos los rótulos son iguales. La elección del material determina la durabilidad, la estética y el precio. Estos son los principales materiales con los que trabajamos:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Aluminio compuesto (Dibond):</strong> Ligero, resistente a la corrosión y con acabado impecable. Es el más usado para rótulos de fachada exterior. No se deforma con el calor ni se oxida con la lluvia.
          </li>
          <li>
            <strong>PVC espumado (Forex):</strong> Ideal para interiores y rótulos ligeros. Superficie lisa y uniforme, perfecta para impresión digital directa o vinilo de corte. Muy utilizado en ferias, stands y decoración de escaparates.
          </li>
          <li>
            <strong>Acrílico o metacrilato:</strong> Transparencia y brillo que imita al vidrio pero sin su fragilidad. Se usa para letras corpóreas, cajas de luz y rótulos con retroiluminación LED. Disponible en múltiples colores y espesores.
          </li>
          <li>
            <strong>Vinilo de corte:</strong> Láminas adhesivas de alta precisión recortadas con plotter. Se aplican sobre superficies lisas como cristales, vehículos o paneles. Gran variedad de colores, texturas y acabados (mate, brillo, metalizado).
          </li>
          <li>
            <strong>Lona PVC (lona publicitaria):</strong> Resistente y económica, ideal para grandes formatos. Se usa en vallas, lonas de fachada y pancartas publicitarias. Impresa con tintas UV de larga duración.
          </li>
          <li>
            <strong>Acero inoxidable y aluminio macizo:</strong> Para rótulos premium. Letras corpóreas con acabados cepillados, espejo o lacados. La máxima calidad para imagen corporativa de alto nivel.
          </li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">3. Técnicas de Corte y Fabricación</h2>
        <p>
          La precisión en el corte es lo que diferencia un rótulo profesional de uno amateur. En nuestro taller utilizamos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Fresadora CNC:</strong> Para cortar paneles de aluminio, acrílico y PVC con precisión milimétrica. Ideal para letras corpóreas y formas complejas.</li>
          <li><strong>Plotter de corte:</strong> Recorta vinilos con una precisión de décimas de milímetro. Perfecto para tipografías delicadas y logotipos con detalles finos.</li>
          <li><strong>Corte y grabado láser:</strong> Para trabajos de altísima precisión en acrílico y metales finos. Acabados impecables sin rebabas.</li>
          <li><strong>Impresión digital UV:</strong> Imprimimos directamente sobre casi cualquier superficie (aluminio, PVC, metacrilato, madera) con tintas curadas por luz ultravioleta. Colores vibrantes que resisten años al sol sin perder intensidad.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">4. Iluminación: Rótulos que Brillan de Noche</h2>
        <p>
          Un rótulo luminoso duplica su efectividad. Mientras uno sin luz solo se ve de día, uno iluminado trabaja para ti las 24 horas. Las opciones de iluminación que ofrecemos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Módulos LED:</strong> Bajo consumo, larga duración (50.000+ horas) y luz uniforme. Se instalan dentro de letras corpóreas y cajas de luz.</li>
          <li><strong>Tiras LED:</strong> Flexibles y perfilables, ideales para iluminar bordes y crear efectos de halo.</li>
          <li><strong>Retroiluminación:</strong> Las letras se separan ligeramente de la pared y la luz LED trasera crea un efecto de halo flotante muy elegante.</li>
          <li><strong>Cajas de luz:</strong> Estructura de aluminio con frente de metacrilato difusor e iluminación LED interior. Visibilidad total tanto de día como de noche.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">5. Acabados y Protección</h2>
        <p>
          Un buen rótulo no solo se ve bien el día que se instala, sino que debe mantenerse impecable durante años. Por eso aplicamos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Laminado protector UV:</strong> Capa transparente que protege la impresión de los rayos solares y la decoloración.</li>
          <li><strong>Barniz de poliuretano:</strong> Para letras corpóreas pintadas, aporta resistencia extra al exterior.</li>
          <li><strong>Tratamiento anticorrosivo:</strong> En metales expuestos a ambientes marinos o muy húmedos.</li>
          <li><strong>Sellado perimetral:</strong> Evita filtraciones de agua en rótulos y cajas de luz para exterior.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">6. Instalación Profesional</h2>
        <p>
          La fabricación es solo la mitad del trabajo. Una instalación mal hecha puede arruinar el mejor rótulo. Nuestro equipo de montaje se encarga de:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fijación segura a cualquier tipo de superficie (ladrillo, hormigón, panel sándwich, cristal).</li>
          <li>Nivelación precisa para que el rótulo quede perfectamente alineado.</li>
          <li>Conexiones eléctricas seguras y certificadas para rótulos luminosos.</li>
          <li>Limpieza total de la zona tras el montaje.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Conclusión</h2>
        <p>
          La <strong>fabricación de rótulos</strong> es un oficio que combina creatividad, precisión técnica y conocimiento de materiales. En <strong>Rótulos Almazora</strong> llevamos desde 1994 haciendo rótulos a medida para todo tipo de negocios y vehículos. Si necesitas un rótulo nuevo o renovar el que tienes, contacta con nosotros sin compromiso.
        </p>

        <div className="mt-16 p-8 bg-backgroundAlt border border-border/30">
          <p className="font-mono text-label-sm text-secondary uppercase tracking-widest mb-4">¿Necesitas un rótulo a medida?</p>
          <a href="/#contacto" className="btn-primary inline-block">
            <span>Solicita presupuesto</span>
          </a>
        </div>
      </div>
    </article>
  )
}
