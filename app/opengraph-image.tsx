import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Rótulos Almozora - Fabricación e Instalación de Rótulos'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#fbf9f9',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Logo block */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          <div style={{ width: 80, height: 80, background: '#121212', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '12px' }}>
            <div style={{ width: '100%', height: 8, background: '#fbf9f9', marginBottom: 8 }} />
            <div style={{ width: '65%', height: 8, background: '#e45400', marginBottom: 8 }} />
            <div style={{ width: '55%', height: 8, background: '#fbf9f9' }} />
          </div>
          <span style={{ fontSize: 48, fontWeight: 800, color: '#121212', textTransform: 'uppercase', letterSpacing: '-0.04em' }}>
            Almozora
          </span>
        </div>

        {/* Main text */}
        <h1 style={{
          fontSize: 72,
          fontWeight: 800,
          color: '#121212',
          lineHeight: 0.95,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          maxWidth: '90%',
          marginBottom: '24px',
        }}>
          Fabricación de <span style={{ color: '#e45400' }}>Rótulos</span>
        </h1>

        <p style={{
          fontSize: 28,
          color: '#5e5e5d',
          maxWidth: '75%',
          lineHeight: 1.5,
          margin: 0,
        }}>
          Rótulos para negocios, rotulación de vehículos y señalética corporativa. Expertos desde 1994.
        </p>

        {/* Orange accent bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 8,
          background: '#e45400',
        }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
