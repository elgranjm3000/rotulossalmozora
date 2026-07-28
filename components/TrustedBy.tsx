export function TrustedBy() {
  const brands = [
    'ARQUITECH',
    'ESTRUCTURA',
    'VÉRTICE',
    'MODULOR',
    'URBAN_VISION',
  ]

  return (
    <section className="py-12 lg:py-16 bg-backgroundAlt border-y border-border/30 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto mb-8">
        <span className="font-mono text-label-md text-secondary uppercase tracking-widest">
          Colaboramos con Firmas Líderes
        </span>
      </div>

      <div className="relative">
        <div className="flex gap-16 lg:gap-24 items-center opacity-50 animate-scroll">
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-primary tracking-widest whitespace-nowrap px-8 sm:px-12"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
