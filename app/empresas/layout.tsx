import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { pickMessages } from '../../i18n/pickMessages';

// Título y descripción propios de esta página (lo que Google muestra).
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Meta.empresas');
  return { title: t('title'), description: t('description') };
}

// Solo las secciones de texto que esta página usa (ver i18n/pickMessages).
const SECCIONES = ['Header', 'Footer', 'Empresas'] as const;

export default async function Layout({ children }: { children: ReactNode }) {
  const messages = pickMessages(await getMessages(), SECCIONES);
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
