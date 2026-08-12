import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacidad',
  },
  title: 'Política de Privacidad',
  description: 'Política de Privacidad de Rótulos Almazora - Información sobre el tratamiento de datos personales.',
  robots: 'noindex, follow',
}

export default function PrivacidadPage() {
  return (
    <article className="pt-40 pb-section px-4 sm:px-6 lg:px-16 max-w-3xl mx-auto">
      <Link href="/" className="font-mono text-label-sm text-accent uppercase tracking-widest hover:text-primary transition-colors mb-8 inline-block">
        ← Volver al Inicio
      </Link>
      <h1 className="font-display font-bold text-3xl sm:text-4xl text-primary uppercase leading-tight mb-8">
        Política de Privacidad
      </h1>

      <div className="prose prose-lg max-w-none font-body text-secondary leading-relaxed space-y-6">
        <p>Última actualización: Agosto 2026</p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">1. Responsable del Tratamiento</h2>
        <p>
          <strong>Titular:</strong> Rótulos Almazora<br />
          <strong>Web:</strong> rotulosalmazora.com<br />
          <strong>Email:</strong> contacto@rotulosalmazora.com<br />
          <strong>Actividad:</strong> Fabricación e instalación de rótulos, letreros corporativos, rotulación de fachadas y vehículos.
        </p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">2. Datos que Recopilamos</h2>
        <p>Únicamente recopilamos los datos que nos proporcionas voluntariamente a través de:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>El formulario de contacto de nuestra web (nombre, teléfono, mensaje).</li>
          <li>Comunicaciones por correo electrónico o WhatsApp.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">3. Finalidad del Tratamiento</h2>
        <p>Tus datos se utilizan exclusivamente para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Atender tu consulta y elaborar presupuestos.</li>
          <li>Gestionar la relación comercial derivada de tu solicitud.</li>
          <li>No se utilizan para fines publicitarios ni se ceden a terceros.</li>
        </ul>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">4. Legitimación</h2>
        <p>El tratamiento de tus datos se basa en tu consentimiento expreso al enviarnos el formulario de contacto o al comunicarte con nosotros voluntariamente.</p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">5. Conservación de los Datos</h2>
        <p>Los datos se conservan durante el tiempo necesario para gestionar tu consulta y, si se establece una relación comercial, durante el plazo legalmente exigible. Transcurrido dicho plazo, se eliminarán de forma segura.</p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">6. Tus Derechos</h2>
        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <strong>contacto@rotulosalmazora.com</strong> con el asunto "Protección de Datos".</p>

        <h2 className="font-display font-semibold text-xl text-primary uppercase mt-10 mb-4">7. Cookies</h2>
        <p>Consulta nuestra <Link href="/cookies" className="text-accent hover:text-primary transition-colors">Política de Cookies</Link> para más información.</p>
      </div>
    </article>
  )
}
