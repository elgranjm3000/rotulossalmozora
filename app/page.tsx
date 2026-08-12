import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { TrustedBy } from '@/components/TrustedBy'
import { Services } from '@/components/Services'
import { FabricacionBanner } from '@/components/FabricacionBanner'
import { ServiciosDestacados } from '@/components/ServiciosDestacados'
import { ProductosPremium } from '@/components/ProductosPremium'
import { Benefits } from '@/components/Benefits'
import { Process } from '@/components/Process'
import { Testimonial } from '@/components/Testimonial'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <FabricacionBanner />
        <ServiciosDestacados />
        <ProductosPremium />
        <Benefits />
        <Process />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
