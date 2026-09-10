'use client';

import { useEffect } from 'react';
import { evento, guardarGclid } from '../lib/medicion';

/**
 * Cuenta los clics que valen: WhatsApp, cotizar y correo.
 *
 * Por qué un solo escuchador y no una línea en cada botón: el sitio
 * tiene 26 enlaces de contacto repartidos en 7 páginas, y todos son
 * etiquetas <a> de verdad. Un escuchador en el documento los cubre a
 * todos, incluidos los que se agreguen mañana, sin tocar ninguna página.
 *
 * Va montado DENTRO de Analitica, o sea bajo el mismo candado de
 * dominio: en las vistas previas de Vercel y en local no manda nada.
 *
 * Regla por dominio, no por lista de enlaces: el sitio usa wa.me en
 * unas páginas y wa.link en otras (Empresas, Tour operadores). Una
 * regla que solo mire wa.me se pierde esas dos.
 */

const WHATSAPP = /^https?:\/\/(wa\.me|wa\.link|api\.whatsapp\.com)/i;
const COTIZADOR = 'eventi-app.com';

export default function SeguimientoDeClics() {
  useEffect(() => {
    guardarGclid();

    const alHacerClic = (e: MouseEvent) => {
      const enlace = (e.target as HTMLElement | null)?.closest?.('a');
      if (!enlace) return;

      const destino = enlace.getAttribute('href') || '';
      const pagina = window.location.pathname;

      if (WHATSAPP.test(destino)) {
        evento('contacto_whatsapp', { pagina, destino });
        return;
      }
      if (destino.includes(COTIZADOR)) {
        evento('clic_cotizar', { pagina });
        return;
      }
      if (destino.startsWith('mailto:')) {
        evento('contacto_correo', { pagina });
      }
    };

    // Fase de captura: se entera aunque el enlace detenga el evento.
    document.addEventListener('click', alHacerClic, true);
    return () => document.removeEventListener('click', alHacerClic, true);
  }, []);

  return null;
}
