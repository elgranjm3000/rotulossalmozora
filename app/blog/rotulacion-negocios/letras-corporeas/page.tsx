import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Letras Corpóreas: Tipos, Materiales e Iluminación para tu Negocio',
  description: 'Guía completa sobre letras corpóreas 3D para fachadas e interiores. Materiales, tipos de iluminación LED, acabados y proceso de fabricación de rótulos con volumen.',
  keywords: ['letras corpóreas', 'letras 3D', 'letras corpóreas iluminadas', 'letras corpóreas fachada', 'letras corpóreas LED', 'letras corpóreas acrílico', 'letras corpóreas aluminio', 'fabricación letras corpóreas', 'rótulos corpóreos', 'letras con volumen', 'letras corpóreas Almazora'],
  openGraph: {
    title: 'Letras Corpóreas: Tipos, Materiales e Iluminación para tu Negocio',
    description: 'Guía completa sobre letras corpóreas 3D: materiales, iluminación LED, acabados y proceso de fabricación. Dale volumen a tu marca.',
  },
}

export default function BlogLetrasCorporeas() {
  return (
    <article className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto">
      <Link href="/blog" className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mb-8 inline-block">
        ← Volver al Blog
      </Link>
      <span className="font-mono text-label-sm text-accent uppercase tracking-widest">Rotulación para Negocios</span>
      <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase leading-tight mt-4 mb-8">
        Letras Corpóreas: La Guía Definitiva para Letreros 3D
      </h1>

      <div className="prose prose-lg max-w-none font-body text-secondary leading-relaxed space-y-6">
        <p className="text-body-lg">
          Si alguna vez has pasado por delante de un edificio corporativo, una clínica dental o un restaurante con letras que sobresalen de la pared —esas que parecen flotar y tienen presencia física— has visto <strong>letras corpóreas</strong>. Son el formato de rótulo más elegante y profesional que existe. En este artículo te contamos todo lo que necesitas saber.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">¿Qué son las Letras Corpóreas?</h2>
        <p>
          Las letras corpóreas son <strong>elementos tridimensionales</strong> que se instalan sobre una superficie —normalmente una fachada, un recibidor o un stand— creando un efecto de volumen y presencia que ningún rótulo plano puede igualar. Cada letra se fabrica de forma independiente y se monta sobre la pared con unos pequeños separadores que las despegan ligeramente de la superficie, creando una sensación de ingravidez muy sofisticada.
        </p>
        <p>
          A diferencia de un vinilo o un panel impreso, las letras corpóreas tienen <strong>profundidad real</strong>. Según el ángulo de la luz, proyectan sombras sutiles que cambian durante el día, añadiendo dinamismo visual sin mover un dedo. De noche, si llevan iluminación LED, se convierten en el elemento más llamativo de toda la calle.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Materiales para Letras Corpóreas</h2>
        <p>
          La elección del material determina el aspecto, la durabilidad y el precio. Estos son los que más utilizamos en <strong>Rótulos Almazora</strong>:
        </p>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">Acrílico / Metacrilato</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>El material más versátil y popular para letras corpóreas.</li>
          <li>Disponible en una amplia gama de colores, grosores y acabados (brillo, mate, satinado, metalizado).</li>
          <li>Translúcido: ideal para retroiluminar con LED, ya que difunde la luz de forma uniforme.</li>
          <li>Ligero y resistente a la intemperie. No se oxida, no se decolora con el sol.</li>
          <li>Se puede cortar con precisión láser para formas complejas y logotipos con detalle fino.</li>
          <li><strong>Precio orientativo:</strong> desde unos 40-60€ por letra de 20 cm, según grosor y acabado.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">Aluminio</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Máxima resistencia para exteriores. Aguanta sol intenso, lluvia, viento y ambientes marinos sin deteriorarse.</li>
          <li>Acabados premium: cepillado, lacado en cualquier color RAL, anodizado o efecto espejo.</li>
          <li>Las letras de aluminio cepillado transmiten solidez, tecnología y alta gama. Muy usadas en despachos de arquitectura, clínicas y oficinas.</li>
          <li>Se pueden combinar con un frente de acrílico blanco translúcido para crear letras con el cuerpo metálico y el frente iluminado.</li>
          <li><strong>Precio orientativo:</strong> desde unos 70-100€ por letra de 20 cm, según el tipo de aluminio y acabado.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">Acero Inoxidable</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>El material más noble y duradero. Letras corpóreas de acero inoxidable 304 o 316 para exteriores extremos.</li>
          <li>Acabados: pulido espejo, cepillado mate, granallado o lacado al horno.</li>
          <li>Peso considerable: requieren una fijación más robusta que el aluminio o el acrílico.</li>
          <li>Aspecto imponente y de calidad absoluta. Se usa en sedes corporativas, hoteles de lujo y edificios emblemáticos.</li>
          <li><strong>Precio orientativo:</strong> desde unos 100-150€ por letra de 20 cm.</li>
        </ul>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">PVC Espumado (Forex)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Opción económica para interiores o uso temporal. Ligero y fácil de instalar.</li>
          <li>No recomendado para exteriores permanentes: el sol y la humedad lo degradan con el tiempo.</li>
          <li>Ideal para stands de ferias, decoración de eventos, escaparatismo y señalización interior de bajo presupuesto.</li>
          <li>Se pinta o se lamina con vinilo de color para darle el acabado deseado.</li>
          <li><strong>Precio orientativo:</strong> desde unos 15-25€ por letra de 20 cm.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Tipos de Iluminación para Letras Corpóreas</h2>
        <p>
          La iluminación es lo que transforma unas buenas letras corpóreas en un rótulo espectacular. Hay varias formas de iluminarlas:
        </p>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">Letras Retroiluminadas (Efecto Halo)</h3>
        <p>
          La luz LED se coloca en la parte trasera de la letra, proyectándose contra la pared. El resultado es un <strong>halo de luz</strong> que rodea cada letra, separándola visualmente del fondo. Es el efecto más elegante y el que mejor funciona en fachadas oscuras o de ladrillo visto.
        </p>
        <p>
          Las letras en sí pueden ser de aluminio opaco con separadores de acero, de modo que solo se ve el resplandor alrededor. El efecto de noche es hipnótico y muy fotogénico —perfecto para negocios que quieren ser Instagrameables.
        </p>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">Letras con Frente Iluminado</h3>
        <p>
          La luz LED va dentro de la letra y el frente es de acrílico blanco translúcido, de modo que <strong>toda la cara frontal se ilumina</strong> de manera uniforme. Los laterales son de aluminio o PVC opaco para evitar fugas de luz. Es el formato más legible de noche y el más común en comercios, farmacias y clínicas.
        </p>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">Letras con Iluminación Lateral</h3>
        <p>
          Variante menos común pero muy efectista: la luz se coloca en los cantos de la letra, iluminando solo el perímetro. El cuerpo de la letra permanece opaco y se dibuja un contorno luminoso. Funciona muy bien en ambientes con poca luz ambiental como bares, restaurantes y salas de exposición.
        </p>

        <h3 className="font-display font-semibold text-lg text-primary mt-8 mb-3">¿LED o neón?</h3>
        <p>
          Hoy día, el 95% de las letras corpóreas iluminadas usan <strong>módulos LED de 12V</strong>. Consumen hasta un 80% menos que el neón tradicional, duran más de 50.000 horas, no requieren mantenimiento y la calidad de la luz es más uniforme. El neón ha quedado relegado a proyectos muy específicos de estética retro o artística.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">El Proceso de Fabricación</h2>
        <p>
          Fabricar letras corpóreas de calidad es un proceso que combina diseño digital, maquinaria de precisión y montaje artesanal. En nuestro taller seguimos estos pasos:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Diseño y vectorización:</strong> A partir de tu logo o tipografía, creamos los archivos vectoriales a escala real. Definimos altura de letra, grosor, tipo de material y sistema de iluminación.
          </li>
          <li>
            <strong>Corte CNC o láser:</strong> La fresadora CNC corta el contorno de cada letra con precisión milimétrica. Para acrílicos finos usamos corte láser, que sella los bordes y deja un acabado pulido.
          </li>
          <li>
            <strong>Conformado del cuerpo:</strong> En letras con volumen, los laterales se fabrican con tiras de aluminio o PVC termoformado que se pegan y sellan formando una caja. Aquí se alojan los módulos LED en caso de letras iluminadas.
          </li>
          <li>
            <strong>Pintura y acabado:</strong> Las letras metálicas se lijan, se impriman y se pintan al horno con pintura de poliuretano de alta resistencia. Los acrílicos pueden dejarse con su color natural o lacarse por la cara interior.
          </li>
          <li>
            <strong>Instalación de iluminación:</strong> Se colocan los módulos o tiras LED, se cablean y se prueban uno a uno. Llevan fuente de alimentación estanca para exteriores y conexiones selladas.
          </li>
          <li>
            <strong>Montaje en pared:</strong> Cada letra se instala de forma independiente con tacos químicos o mecánicos y separadores de acero inoxidable que las despegan 2-4 cm de la pared. El cableado queda oculto detrás o dentro de la pared.
          </li>
        </ol>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">¿Dónde se Usan las Letras Corpóreas?</h2>
        <p>
          Las letras corpóreas son increíblemente versátiles. Estos son sus usos más habituales:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Fachadas de negocios:</strong> Clínicas, despachos, farmacias, restaurantes, tiendas de ropa. Cualquier negocio que quiera transmitir calidad.</li>
          <li><strong>Recepciones y lobbies:</strong> El nombre de la empresa detrás del mostrador de recepción, en letras corpóreas de acero o acrílico, es un clásico del diseño corporativo.</li>
          <li><strong>Edificios corporativos:</strong> Sedes de empresas, bufetes de abogados, aseguradoras. Las letras de aluminio cepillado en la entrada principal comunican poder y solvencia.</li>
          <li><strong>Centros comerciales y retail:</strong> Letras corpóreas sobre los escaparates o en los pasillos del centro comercial, combinadas con iluminación para destacar entre la competencia.</li>
          <li><strong>Stands de ferias:</strong> Letras ligeras de PVC o acrílico que se montan y desmontan fácilmente. Tu marca con presencia tridimensional en un entorno donde todos compiten por la atención.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Mantenimiento y Durabilidad</h2>
        <p>
          Unas letras corpóreas bien fabricadas duran <strong>entre 10 y 20 años en exterior</strong>. El mantenimiento es mínimo:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Limpieza con agua tibia y jabón neutro una o dos veces al año para eliminar polvo y contaminación.</li>
          <li>Revisión de las conexiones eléctricas cada 3-4 años (en letras iluminadas).</li>
          <li>Los módulos LED de calidad tienen una vida útil de 50.000 horas —más de 10 años encendidos 12 horas al día.</li>
          <li>El aluminio y el acero inoxidable no necesitan ningún tratamiento. El acrílico puede perder algo de brillo tras muchos años de sol directo, pero se pule fácilmente.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">¿Cuánto Cuestan unas Letras Corpóreas?</h2>
        <p>
          El precio depende de muchos factores: número de letras, altura, material, iluminación y complejidad del montaje. Como orientación:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>PVC sin iluminación:</strong> 150-300€ un nombre comercial típico (6-8 letras, 20 cm de alto).</li>
          <li><strong>Acrílico retroiluminado:</strong> 400-800€ mismo tamaño. Es el formato más demandado.</li>
          <li><strong>Aluminio con frente iluminado:</strong> 600-1.200€. Acabado premium con cuerpo metálico.</li>
          <li><strong>Acero inoxidable con halo LED:</strong> 1.000-2.500€. El tope de gama para proyectos de alto nivel.</li>
        </ul>
        <p>
          Todos los precios incluyen diseño, fabricación e instalación. En <strong>Rótulos Almazora</strong> damos presupuesto detallado sin compromiso.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-12 mb-4">Conclusión</h2>
        <p>
          Las <strong>letras corpóreas</strong> son, sin duda, la opción más elegante y duradera para rotular un negocio. Aportan volumen, presencia y una calidad percibida que ningún otro tipo de rótulo iguala. Si estás pensando en darle a tu fachada o recepción un salto de calidad, unas buenas letras 3D son la inversión que realmente marca la diferencia.
        </p>

        <div className="mt-16 p-8 bg-backgroundAlt border border-border/30">
          <p className="font-mono text-label-sm text-secondary uppercase tracking-widest mb-4">¿Quieres letras corpóreas para tu negocio?</p>
          <a href="/#contacto" className="btn-primary inline-block">
            <span>Solicita presupuesto sin compromiso</span>
          </a>
        </div>
      </div>
    </article>
  )
}
