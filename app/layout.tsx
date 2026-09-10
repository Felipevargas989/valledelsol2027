import type { Metadata } from 'next';
import { Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import {NextIntlClientProvider} from 'next-intl';
import { getMessages } from 'next-intl/server';
import { pickMessages } from '../i18n/pickMessages';

import { AlohaBookingProvider } from './components/AlohaBookingProvider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Valle del Sol - Complejo Turístico Quillón',
  description:
    'Descubre en Valle del Sol la magia de la naturaleza, la relajación y la hospitalidad. Cabañas, restaurante, eventos y más en Quillón.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="es" className={montserrat.variable}>
    <body
      className={`${montserrat.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <NextIntlClientProvider messages={pickMessages(await getMessages(), ['Header', 'Footer'])}>
        <AlohaBookingProvider>
          {children}
        </AlohaBookingProvider>
      </NextIntlClientProvider>
            {/* Visitas y velocidad real de los visitantes, en el panel de Vercel (gratis). */}
        <Analytics />
        <SpeedInsights />
      </body>
  </html>
);
}