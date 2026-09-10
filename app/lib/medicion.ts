/**
 * Medición del sitio (10-09-2026).
 *
 * Una sola puerta para mandar eventos a Google. Nadie llama a `gtag`
 * directamente desde un componente: si mañana cambiamos de herramienta,
 * se cambia acá y no en veinte archivos.
 *
 * Todo lo de este archivo es inofensivo si Google no cargó: `gtag?.()`
 * no explota, simplemente no manda nada. Eso pasa a propósito en las
 * vistas previas de Vercel y en local, donde la etiqueta no se monta.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Parametros = Record<string, unknown>;

/** Manda un evento a Google Analytics. */
export function evento(nombre: string, parametros: Parametros = {}) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', nombre, parametros);
}

/* ------------------------------------------------------------------ *
 * gclid — el número con que Google identifica el clic en un anuncio.
 *
 * Viaja en la dirección cuando alguien llega desde un anuncio. Lo
 * guardamos para poder pegarlo después a la cotización en Eventia: ese
 * es el único camino para decirle a Google "este matrimonio de tres
 * millones vino de tal anuncio", meses después de que se hizo el clic.
 *
 * Hoy solo se guarda. Usarlo es la etapa siguiente.
 * ------------------------------------------------------------------ */

const CLAVE = 'vds_gclid';
const NOVENTA_DIAS = 90 * 24 * 60 * 60 * 1000;

export function guardarGclid() {
  if (typeof window === 'undefined') return;
  const parametros = new URLSearchParams(window.location.search);
  const id =
    parametros.get('gclid') ||
    parametros.get('wbraid') ||
    parametros.get('gbraid');
  if (!id) return;
  try {
    localStorage.setItem(CLAVE, JSON.stringify({ id, guardadoEn: Date.now() }));
  } catch {
    /* modo privado, o el navegador no deja guardar: no es grave */
  }
}

export function leerGclid(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const guardado = localStorage.getItem(CLAVE);
    if (!guardado) return null;
    const { id, guardadoEn } = JSON.parse(guardado);
    return Date.now() - guardadoEn > NOVENTA_DIAS ? null : id;
  } catch {
    return null;
  }
}
