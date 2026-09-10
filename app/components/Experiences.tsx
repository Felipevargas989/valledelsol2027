'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const experiences = [
  {
    key: 'cabins',
    image: '/images/experiencia/cabanas.jpg',
    href: '/cabanas',
  },
  {
    key: 'restaurant',
    image: '/images/experiencia/restaurante.jpg',
    href: '/restaurante',
  },
  {
    key: 'companies',
    image: '/images/empresas/e10.jpg',
    href: '/empresas',
  },
  {
    key: 'schools',
    image: '/images/colegios.jpg',
    href: '/colegios',
  },
  {
    key: 'tourOperators',
    image: '/images/experiencia/tour-operadores.jpg',
    href: '/touroperadores',
  },
];

export default function Experiences() {
  const t = useTranslations('Experiences');

  return (
    <section className="pt-24 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-tight">
            {t('titleLight')}{' '}
            <span className="font-semibold text-gray-900">
              {t('titleBold')}
            </span>
          </h2>
        </motion.div>

        {/* SUBTÍTULO */}
        <motion.p
          className="mt-4 pb-14 text-lg text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CARDS */}
        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-5 md:overflow-visible">

          {experiences.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="min-w-[260px] md:min-w-0 block"
            >
              <Card
                image={item.image}
                title={t(`items.${item.key}.title`)}
                subtitle={t(`items.${item.key}.subtitle`)}
                explore={t('explore')}
              />
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

/* CARD */
function Card({
  image,
  title,
  subtitle,
  explore,
}: {
  image: string;
  title: string;
  subtitle: string;
  explore: string;
}) {
  return (
    <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden group cursor-pointer">

      {/* Imagen */}
      <Image sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-8">

        <div className="transform transition-all duration-500 group-hover:-translate-y-6 max-w-[220px]">

          {/* TÍTULO */}
          <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug break-words">
            {title}
          </h3>

          <p className="text-white/80 mt-2 text-sm">
            {subtitle}
          </p>

        </div>

        <div className="mt-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="inline-block bg-white text-gray-900 text-sm px-4 py-2 rounded-full font-medium">
            {explore}
          </span>
        </div>

      </div>
    </div>
  );
}