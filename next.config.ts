import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Cabeceras de seguridad estándar (PageSpeed las echaba de menos, 09-09).
  // HSTS ya lo pone Vercel; estas tres no rompen nada del sitio.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  // El CSS (11,8 KB) va incrustado en el HTML: le ahorra un viaje al
  // celular antes de pintar (PageSpeed: 'solicitud que bloquea', 09-09).
  experimental: { inlineCss: true },
  images: {
    // Fondos con capa oscura a 60, portadas a 70, el resto 75.
    qualities: [60, 70, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'valledelsolquillon.cl',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
