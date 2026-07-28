import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#121212',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="128" height="128" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="2" fill="#121212" />
          <path d="M12 12h24v4H12v-4z" fill="#fbf9f9" />
          <path d="M12 22h18v4H12v-4z" fill="#e45400" />
          <path d="M12 32h14v4H12v-4z" fill="#fbf9f9" />
          <path d="M38 12v24h-4V12h4z" fill="#e45400" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
