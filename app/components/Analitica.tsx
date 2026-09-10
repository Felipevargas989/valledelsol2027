'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import SeguimientoDeClics from './SeguimientoDeClics';

/**
 * Google Analytics (propiedad "Valle del Sol", 10-09-2026).
 *
 * Solo reporta desde el dominio real: las vistas previas y el desarrollo
 * local no ensucian los datos con nuestras pruebas — misma regla que usa
 * Eventia con su propia propiedad. El ID de medición no es secreto: viaja
 * dentro de la página.
 */
const ID = 'G-SWDQW51F85';

export default function Analitica() {
  const [enElSitioReal, setEnElSitioReal] = useState(false);

  useEffect(() => {
    setEnElSitioReal(
      window.location.hostname.endsWith('valledelsolquillon.cl'),
    );
  }, []);

  if (!enElSitioReal) return null;

  return (
    <>
      <GoogleAnalytics gaId={ID} />
      <SeguimientoDeClics />
    </>
  );
}
