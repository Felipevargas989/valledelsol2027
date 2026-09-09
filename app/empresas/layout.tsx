import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

// Título y descripción propios de esta página (lo que Google muestra):
// la página es un componente de cliente, así que el metadata vive acá.
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Meta.empresas');
  return { title: t('title'), description: t('description') };
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
