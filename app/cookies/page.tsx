import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/cookies',
  },
  title: 'Política de Cookies',
  description: 'Política de Cookies de Rótulos Almazora - Información sobre el uso de cookies en este sitio web.',
  robots: 'noindex, follow',
}

export default function CookiesPage() {
  return (
    <article className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto">
      <Link href="/" className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mb-8 inline-block">
        ← Volver al Inicio
      </Link>
      <h1 className="font-display font-bold text-3xl sm:text-4xl text-primary uppercase leading-tight mb-8">
        Política de Cookies
      </h1>

      <div className="prose prose-lg max-w-none font-body text-secondary leading-relaxed space-y-6">
        <p>Última actualización: Agosto 2026</p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">1. ¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo al navegar. Se utilizan para recordar preferencias, analizar el tráfico y mejorar la experiencia de navegación.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">2. Cookies que Utiliza esta Web</h2>
        <p>
          <strong>rotulosalmazora.com</strong> utiliza únicamente cookies técnicas esenciales para el funcionamiento del sitio. No se utilizan cookies de publicidad, seguimiento ni análisis de terceros.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Cookies técnicas o de sesión:</strong> Necesarias para el correcto funcionamiento de la web. Permiten la navegación y el uso de las diferentes opciones o servicios, como el formulario de contacto. Se eliminan al cerrar el navegador.
          </li>
          <li>
            <strong>Cookies de preferencias:</strong> Permiten recordar información para que accedas al servicio con determinadas características, como el idioma. Se conservan durante un máximo de 12 meses.
          </li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">3. Cookies de Terceros</h2>
        <p>Esta web <strong>no utiliza cookies de terceros</strong> con fines publicitarios ni de análisis.</p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">4. Cómo Gestionar las Cookies</h2>
        <p>
          Puedes configurar tu navegador para bloquear o eliminar las cookies en cualquier momento. Consulta la ayuda de tu navegador para más información:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
          <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies</li>
          <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
          <li><strong>Microsoft Edge:</strong> Configuración → Cookies y permisos del sitio</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">5. Contacto</h2>
        <p>
          Si tienes dudas sobre nuestra política de cookies, contacta con <strong>Rótulos Almazora</strong> en{' '}
          <a href="mailto:contacto@rotulosalmazora.com" className="text-accent hover:text-primary transition-colors">
            contacto@rotulosalmazora.com
          </a>.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">6. Actualizaciones</h2>
        <p>
          Esta política puede actualizarse ocasionalmente. Te recomendamos revisarla periódicamente para estar informado sobre cómo protegemos tus datos.
        </p>
      </div>
    </article>
  )
}
