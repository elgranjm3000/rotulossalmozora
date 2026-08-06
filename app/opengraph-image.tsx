import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
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
          padding: 80,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 48 }}>
          <div style={{
            width: 84,
            height: 84,
            background: '#121212',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 14,
          }}>
            <div style={{ width: '100%', height: 10, background: '#fbf9f9', marginBottom: 8 }} />
            <div style={{ width: '65%', height: 10, background: '#e45400', marginBottom: 8 }} />
            <div style={{ width: '55%', height: 10, background: '#fbf9f9' }} />
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, color: '#121212', textTransform: 'uppercase', letterSpacing: '-0.04em' }}>
            Almazora
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: 76,
          fontWeight: 800,
          color: '#121212',
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          maxWidth: '88%',
          marginBottom: 28,
        }}>
          Fabricación de <span style={{ color: '#e45400' }}>Rótulos</span>
        </div>

        <div style={{
          fontSize: 28,
          color: '#5e5e5d',
          maxWidth: '72%',
          lineHeight: 1.5,
        }}>
          Rótulos para negocios, rotulación de vehículos y señalética corporativa. Expertos desde 1994.
        </div>

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
