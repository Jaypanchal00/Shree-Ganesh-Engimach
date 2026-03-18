import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shree Ganesh Engimach',
    short_name: 'SGE Machines',
    description:
      'Premier manufacturer of bottle filling, capping, washing and labeling machines in Ahmedabad, Gujarat, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0F3D5E',
    orientation: 'portrait',
    scope: '/',
    lang: 'en-IN',
    categories: ['business', 'industrial', 'manufacturing'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
