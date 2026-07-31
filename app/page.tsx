import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { TrustedBy } from '@/components/TrustedBy'
import { Services } from '@/components/Services'
import { Benefits } from '@/components/Benefits'
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
        <Benefits />
        <Process />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
