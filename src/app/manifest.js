export default function manifest() {
    return {
      name: 'Daytech Blog',
      short_name: 'Daytech',
      description: 'Get All the Tech Updates in our Blog',
      start_url: '/',
      display: 'standalone',
      background_color: '#1b1b1b',
      theme_color: '#1b1b1b',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
          {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
            {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
            {
          src: '/icon-512x512',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }