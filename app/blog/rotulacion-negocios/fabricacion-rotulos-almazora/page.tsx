import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fabricación de Rótulos a Medida en Almazora | Rótulos Almazora',
  description: 'Fabricamos rótulos a medida para negocios, fachadas y vehículos. Proceso completo: diseño, selección de materiales, corte CNC, iluminación LED e instalación profesional.',
  keywords: [
    'fabricación de rótulos', 'fabricación de rótulos Almazora', 'rótulos a medida', 'fabricar rótulos', 'fabricación letreros', 'taller de rotulación', 'rótulos personalizados', 'fabricación rótulos corporativos', 'empresa de rotulación', 'rotulistas Almazora',
  ],
  alternates: {
    canonical: '/blog/rotulacion-negocios/fabricacion-rotulos-almazora',
  },
  openGraph: {
    title: 'Fabricación de Rótulos a Medida en Almazora | Rótulos Almazora',
    description: 'Fabricamos rótulos a medida para negocios, fachadas y vehículos. Diseño, materiales, corte CNC, iluminación LED e instalación profesional.',
    images: [
      {
        url: 'https://rotulosalmazora.com/images/fabricacion-rotulos.webp',
        width: 1181,
        height: 896,
        alt: 'Fabricación de rótulos en taller - Rótulos Almazora',
      },
    ],
  },
}

export default function BlogFabricacionRotulosAlmazora() {
  return (
    <article className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto">
      <Link href="/blog" className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mb-8 inline-block">
        ← Volver al Blog
      </Link>
      <span className="font-mono text-label-sm text-accent uppercase tracking-widest">Rotulación para Negocios</span>
      <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase leading-tight mt-4 mb-8">
        Fabricación de Rótulos a Medida: Así Trabajamos en Almazora
      </h1>

      {/* Featured image */}
      <div className="relative aspect-video overflow-hidden mb-12">
        <Image
          src="/images/fabricacion-rotulos.webp"
          alt="Fabricación de rótulos en el taller de Rótulos Almazora - proceso de producción de letreros y señalética profesional"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>

      <div className="prose prose-lg max-w-none font-body text-secondary leading-relaxed space-y-6">
        <p className="text-body-lg">
          Cuando un cliente nos pide un rótulo, no encargamos una pieza prefabricada a un proveedor externo. <strong>Lo fabricamos nosotros</strong>. En nuestro taller. Con nuestras máquinas y nuestras manos. Esa es la diferencia entre un rótulo genérico y uno pensado, diseñado y construido específicamente para tu negocio.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Por Qué la Fabricación Propia Marca la Diferencia</h2>
        <p>
          Muchas empresas de rotulación actúan como intermediarias: toman tu encargo, lo envían a un gran taller industrial y te entregan el resultado. El problema es que <strong>pierdes el control sobre la calidad</strong> y cualquier cambio o ajuste se convierte en un quebradero de cabeza de llamadas, plazos y sobrecostes.
        </p>
        <p>
          En <strong>Rótulos Almazora</strong> hacemos todo en casa. Esto significa:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Control total de calidad:</strong> Cada pieza pasa por nuestras manos antes de salir a la calle.</li>
          <li><strong>Flexibilidad absoluta:</strong> ¿Quieres cambiar el color a mitad del proceso? ¿Ajustar el tamaño? Sin problema. No hay un tercero a quien consultar.</li>
          <li><strong>Plazos más cortos:</strong> Al eliminar intermediarios, recortamos días —a veces semanas— en el proceso.</li>
          <li><strong>Asesoramiento real:</strong> Quien te atiende es la misma persona que fabrica tu rótulo. Si tienes una duda técnica, tienes al experto delante.</li>
          <li><strong>Reparaciones y mantenimiento:</strong> Si dentro de tres años necesitas cambiar una letra o un módulo LED, podemos hacerlo porque conocemos cada tornillo de tu rótulo.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">El Proceso de Fabricación Paso a Paso</h2>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">1. Consulta y Toma de Requisitos</h3>
        <p>
          Todo empieza con una conversación. Nos cuentas qué tipo de negocio tienes, dónde va el rótulo (fachada, escaparate, interior, vehículo), las dimensiones disponibles y el presupuesto con el que cuentas. Te preguntamos cosas que quizás no habías considerado:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>¿La fachada recibe sol directo todo el día o está en sombra? Esto afecta al tipo de vinilo y protección UV.</li>
          <li>¿Hay mucha humedad o ambiente salino? Determina si necesitamos acero 316 en lugar de 304.</li>
          <li>¿La normativa municipal o de la comunidad de propietarios impone restricciones de tamaño, color o iluminación?</li>
          <li>¿Quieres que el rótulo se vea más de día o de noche? Define la potencia de la iluminación.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">2. Diseño y Prototipado Digital</h3>
        <p>
          Con la información recopilada, creamos un <strong>mockup digital a escala</strong> donde puedes ver exactamente cómo quedará el rótulo en tu fachada o vehículo. Trabajamos con software de diseño vectorial que nos permite:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Simular la iluminación LED para que veas el efecto nocturno antes de fabricar nada.</li>
          <li>Probar diferentes combinaciones de colores, tipografías y acabados en tiempo real.</li>
          <li>Calcular con precisión milimétrica las distancias entre letras (kerning óptico), los separadores y los puntos de fijación.</li>
        </ul>
        <p>
          No pasamos a producción hasta que tú das el visto bueno final.
        </p>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">3. Selección y Preparación de Materiales</h3>
        <p>
          Esta es una de las fases más infravaloradas pero más críticas. No todos los aluminios son iguales, ni todos los acrílicos resisten igual la intemperie. Seleccionamos el material exacto según el uso:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Aluminio compuesto (Dibond):</strong> Para paneles de fachada. Ligero, rígido y con tratamiento anticorrosión. Usamos marcas con garantía de 10 años sin deformación.</li>
          <li><strong>Acrílico de colada:</strong> Para letras corpóreas y cajas de luz. Mucho más resistente que el acrílico de extrusión barato. No amarillea con el sol.</li>
          <li><strong>Vinilo fundido de alta gama:</strong> Para rotulación de vehículos y superficies curvas. No encoge, no se cuartea y se retira limpiamente incluso años después.</li>
          <li><strong>Módulos LED sellados IP67:</strong> Para letras iluminadas. Resistentes al agua y al polvo, con driver de corriente constante para que no parpadeen.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">4. Corte y Conformado</h3>
        <p>
          Aquí es donde la maquinaria de precisión entra en juego:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Fresadora CNC de 3 ejes:</strong> Corta paneles de aluminio, acrílico y PVC con una precisión de ±0,1 mm. Ideal para letras corpóreas, logotipos complejos y formas orgánicas.</li>
          <li><strong>Plotter de corte de arrastre:</strong> Para vinilos. La cuchilla sigue el trazado vectorial con una fuerza calibrada que corta el vinilo pero no el papel soporte. Fundamental para tipografías finas.</li>
          <li><strong>Corte láser CO₂:</strong> Para acrílicos de hasta 20 mm. El láser funde y sella el borde, dejando un acabado pulido transparente que no requiere post-procesado.</li>
          <li><strong>Plegadora de paneles:</strong> Para conformar los laterales de letras corpóreas y cajas de luz en aluminio.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">5. Pintura, Lacado y Acabados</h3>
        <p>
          Un rótulo no está terminado cuando se corta. El acabado es lo que define su aspecto final y su durabilidad:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Pintura al horno con poliuretano:</strong> Para letras metálicas. Capa de imprimación anticorrosiva + dos manos de color + barniz protector. Curado al horno a 80°C para máxima dureza.</li>
          <li><strong>Lacado de acrílicos:</strong> Se aplica por la cara interior del metacrilato transparente, creando un efecto de profundidad y brillo que no se raya ni se despega.</li>
          <li><strong>Vinilo de corte con laminado UV:</strong> Para paneles y superficies planas. El laminado añade una capa de protección que alarga la vida del color 3-5 años extra.</li>
          <li><strong>Cepillado y anodizado:</strong> Para aluminio y acero. El cepillado crea una textura de líneas finas muy elegante; el anodizado sella el metal y evita la oxidación.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">6. Integración de Iluminación LED</h3>
        <p>
          La iluminación se instala y se prueba <strong>antes de montar el rótulo en la pared</strong>. Esto es clave: detectar cualquier fallo en el taller es un arreglo de 10 minutos; detectarlo una vez instalado en la fachada a 4 metros de altura es un problema.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Módulos LED con lentes de 160° para una difusión uniforme sin puntos calientes.</li>
          <li>Cableado interno con silicona termorretráctil en todas las conexiones.</li>
          <li>Fuente de alimentación estanca IP67 para exteriores, con protección contra sobretensión.</li>
          <li>Prueba de encendido continuo durante 24 horas antes de la entrega.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">7. Instalación y Montaje Final</h3>
        <p>
          El montaje es la última fase y una de las más delicadas. Nuestro equipo de instalación se desplaza a tu ubicación con todo el material necesario:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fijación con tacos químicos o mecánicos según el tipo de pared (ladrillo, hormigón, panel sándwich, cristal).</li>
          <li>Separadores de acero inoxidable de 20-40 mm que despegan las letras de la pared para crear el efecto flotante.</li>
          <li>Nivelación láser para garantizar que todas las letras están perfectamente alineadas.</li>
          <li>Conexión eléctrica segura con canalización oculta o pintada del color de la fachada para que no se vea.</li>
          <li>Limpieza total de la zona de trabajo. No dejamos restos de embalaje, polvo ni huellas.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Tipos de Rótulos que Fabricamos</h2>
        <p>
          Nuestra capacidad de fabricación cubre prácticamente cualquier tipo de rótulo:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mt-6">
          {[
            { title: 'Letras Corpóreas 3D', desc: 'Acrílico, aluminio o acero. Con o sin iluminación LED frontal o trasera (halo).' },
            { title: 'Cajas de Luz', desc: 'Estructura de aluminio con frente de metacrilato difusor. Iluminación LED uniforme.' },
            { title: 'Tótems y Monolitos', desc: 'Estructuras verticales autoportantes. Ideal para entradas de naves, polígonos y centros comerciales.' },
            { title: 'Banderolas', desc: 'Rótulos salientes perpendiculares a la fachada. Máxima visibilidad para peatones.' },
            { title: 'Paneles de Fachada', desc: 'Paneles de aluminio compuesto con impresión digital UV o vinilo de corte.' },
            { title: 'Señalética Interior', desc: 'Placas de despacho, directorios, vinilos para cristal y señalización de zonas.' },
            { title: 'Lonas y Pancartas', desc: 'Lona de PVC con impresión de alta resolución. Para vallas, andamios y eventos.' },
            { title: 'Rotulación de Vehículos', desc: 'Vinilos de corte o impresión digital para coches, furgonetas y flotas completas.' },
          ].map((item) => (
            <div key={item.title} className="border border-border/30 p-5">
              <h4 className="font-display font-semibold text-sm text-primary uppercase mb-2">{item.title}</h4>
              <p className="font-body text-body-sm text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Garantía y Compromiso de Calidad</h2>
        <p>
          Todos nuestros rótulos incluyen:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Garantía</strong> en fabricación e instalación. Si algo falla por defecto de material o montaje, lo arreglamos sin coste.</li>
          <li><strong>Garantía</strong> en módulos LED de primeras marcas.</li>
          <li><strong>Servicio postventa:</strong> Si dentro de unos años necesitas cambiar una letra dañada por un golpe, modificar el teléfono en la rotulación de un vehículo o añadir iluminación a un rótulo que antes no la llevaba, lo hacemos.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Preguntas Frecuentes sobre Fabricación de Rótulos</h2>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">¿Cuánto se tarda en fabricar un rótulo?</h3>
        <p>
          Depende de la complejidad. Un rótulo de vinilo para un escaparate puede estar listo en <strong>2-3 días</strong>. Unas letras corpóreas con iluminación LED para una fachada, entre <strong>7 y 15 días</strong>. Proyectos de mayor envergadura como tótems publicitarios o rotulaciones integrales de fachada los planificamos contigo para cuadrar plazos y minimizar el impacto en tu actividad. Te damos un plazo estimado antes de empezar y lo cumplimos.
        </p>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">¿Puedo ver cómo va quedando durante el proceso?</h3>
        <p>
          Sí. Te enviamos fotos del avance en las fases clave: cuando el diseño está listo, cuando las piezas están cortadas y cuando aplicamos los acabados. No hay sorpresas.
        </p>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">¿Qué pasa si no sé exactamente lo que quiero?</h3>
        <p>
          Es lo más normal del mundo. Para eso estamos. Tras la consulta inicial te presentamos <strong>dos o tres propuestas</strong> con diferentes estilos, materiales y precios. Tú decides cuál encaja mejor.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Conclusión</h2>
        <p>
          La <strong>fabricación de rótulos</strong> es un oficio que requiere conocimiento técnico, maquinaria de precisión y, sobre todo, atención al detalle. En <strong>Rótulos Almazora</strong> llevamos desde 1994 haciendo rótulos para negocios, empresas y autónomos. Si estás pensando en un rótulo nuevo —o en renovar el que tienes— te asesoramos sin compromiso.
        </p>

        <div className="mt-16 p-8 bg-backgroundAlt border border-border/30">
          <p className="font-mono text-label-sm text-secondary uppercase tracking-widest mb-4">¿Necesitas fabricar un rótulo a medida?</p>
          <a href="/#contacto" className="btn-primary inline-block">
            <span>Pide tu presupuesto sin compromiso</span>
          </a>
        </div>
      </div>
    </article>
  )
}
