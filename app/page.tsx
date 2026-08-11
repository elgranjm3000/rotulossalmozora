import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { TrustedBy } from '@/components/TrustedBy'
import { Services } from '@/components/Services'
import { FabricacionBanner } from '@/components/FabricacionBanner'
import { Gallery } from '@/components/Gallery'
import { Benefits } from '@/components/Benefits'
import { ServiciosDestacados } from '@/components/ServiciosDestacados'
import { Process } from '@/components/Process'
import { Testimonial } from '@/components/Testimonial'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <FabricacionBanner />
        <Gallery />
        <Benefits />
        <ServiciosDestacados />
        <Process />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
