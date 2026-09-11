'use client';

import { useEffect, useState } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

/**
 * Medición del sitio con Google Tag Manager (contenedor GTM-PJKJCW76,
 * cuenta "Valle del Sol", 11-09-2026).
 *
 * Tag Manager carga adentro Analytics (G-SWDQW51F85), la etiqueta de Google
 * Ads, el píxel de Facebook y las conversiones de las campañas. Todo eso se
 * administra desde la pantalla de Tag Manager, sin tocar este código.
 *
 * Solo carga en el dominio real: las vistas previas de Vercel y el
 * desarrollo local no ensucian los datos.
 *
 * OJO: Analytics ya NO se carga directo desde acá; viene dentro de Tag
 * Manager. Si alguien vuelve a poner <GoogleAnalytics> junto a este
 * componente, cada visita se cuenta dos veces.
 */
const GTM_ID = 'GTM-PJKJCW76';

export default function Analitica() {
  const [enElSitioReal, setEnElSitioReal] = useState(false);

  useEffect(() => {
    setEnElSitioReal(
      window.location.hostname.endsWith('valledelsolquillon.cl'),
    );
  }, []);

  return enElSitioReal ? <GoogleTagManager gtmId={GTM_ID} /> : null;
}
