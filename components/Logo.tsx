export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-label="Rótulos Almozora Logo"
    >
      <rect width="48" height="48" rx="2" fill="#121212" />
      <path d="M12 12h24v4H12v-4z" fill="#fbf9f9" />
      <path d="M12 22h18v4H12v-4z" fill="#e45400" />
      <path d="M12 32h14v4H12v-4z" fill="#fbf9f9" />
      <path d="M38 12v24h-4V12h4z" fill="#e45400" />
    </svg>
  )
}

export function LogoWithText({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo />
      <span className="font-display font-bold text-xl uppercase tracking-tighter hidden sm:block">
        Almozora
      </span>
    </div>
  )
}
