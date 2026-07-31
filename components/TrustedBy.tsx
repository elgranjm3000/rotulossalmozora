export function TrustedBy() {
  const materials = [
    'VINILO PREMIUM',
    'ACRÍLICO',
    'ALUMINIO',
    'PVC',
    'LONA',
  ]

  return (
    <section className="py-12 lg:py-16 bg-backgroundAlt border-y border-border/30 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-16 max-w-container mx-auto mb-8">
        <span className="font-mono text-label-md text-secondary uppercase tracking-widest">
          Trabajamos con los mejores materiales
        </span>
      </div>

      <div className="relative">
        <div className="flex gap-16 lg:gap-24 items-center opacity-50 animate-scroll">
          {[...materials, ...materials].map((material, index) => (
            <span
              key={`${material}-${index}`}
              className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-primary tracking-widest whitespace-nowrap px-8 sm:px-12"
            >
              {material}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
