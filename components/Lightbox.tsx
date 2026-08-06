'use client'

import { useEffect, useCallback } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

interface LightboxProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  const current = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        aria-label="Cerrar galería"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute top-6 left-6 z-10 font-mono text-label-sm text-white/60 uppercase tracking-widest">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        aria-label="Imagen anterior"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        aria-label="Imagen siguiente"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-6 right-6 text-center">
        <p className="font-body text-body-sm text-white/60 max-w-xl mx-auto leading-relaxed">
          {current.alt}
        </p>
        <a
          href="https://wa.me/34XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#25D366] text-white font-mono text-label-sm uppercase tracking-widest hover:bg-[#20bd5a] transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>¿Quieres uno así? Consúltanos</span>
        </a>
      </div>
    </div>
  )
}
