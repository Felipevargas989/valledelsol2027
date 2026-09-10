import type { AbstractIntlMessages } from 'next-intl';

/**
 * Solo las secciones de texto que una página usa (09-09-2026). Antes las
 * traducciones completas de las 9 páginas en 3 idiomas viajaban en cada
 * página; cada una lleva ahora Header + Footer + lo suyo.
 */
export const pickMessages = (
  messages: AbstractIntlMessages,
  keys: readonly string[],
): AbstractIntlMessages =>
  Object.fromEntries(keys.filter((k) => k in messages).map((k) => [k, messages[k]]));
