import type { Metadata } from 'next';
import { Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import {NextIntlClientProvider} from 'next-intl';

import { AlohaBookingProvider } from './components/AlohaBookingProvider';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="es" className={montserrat.variable}>
    <body
      className={`${montserrat.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <NextIntlClientProvider>
        <AlohaBookingProvider>
          {children}
        </AlohaBookingProvider>
      </NextIntlClientProvider>
    </body>
  </html>
);
}