'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const items = [
  {
    key: 'greenAreas',
    image: '/images/galeria/areas-verdes.jpg',
  },
  {
    key: 'pools',
    image: '/images/galeria/piscinas.jpg',
  },
  {
    key: 'rooms',
    image: '/images/galeria/habitaciones.jpg',
  },
  {
    key: 'traditionalFood',
    image: '/images/galeria/comida.jpg',
  },
  {
    key: 'hotTubs',
    image: '/images/galeria/tinajas.jpg',
  },
  {
    key: 'sportsCourts',
    image: '/images/galeria/canchas.jpg',
  },
];

export default function GalleryFilter() {
  const t = useTranslations('Gallery');

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = items[active];

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [active, paused]);

  return (
    <section
      className="relative w-full h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* IMAGEN */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {/* Por el optimizador de Next (09-09): como fondo CSS cada foto
              iba cruda (250-740 KB) a cualquier pantalla. */}
          <Image
            src={current.image}
            alt=""
            fill
            sizes="100vw"
            quality={60}
            className="object-cover object-center"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* MENÚ */}
        <div className="flex flex-wrap gap-4 mb-12">
          {items.map((item, index) => (
            <button
              key={item.key}
              onClick={() => setActive(index)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all backdrop-blur-md border ${
                active === index
                  ? 'bg-white text-black border-white shadow-lg scale-105'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:scale-105'
              }`}
            >
              {t(`items.${item.key}.title`)}
            </button>
          ))}
        </div>

        {/* TEXTO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            className="max-w-xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* TÍTULO */}
            <motion.h2
              className="text-4xl md:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {t(`items.${current.key}.title`).split(' ')[0]}{' '}
              <span className="font-semibold">
                {t(`items.${current.key}.title`)
                  .split(' ')
                  .slice(1)
                  .join(' ')}
              </span>
            </motion.h2>

            {/* DESCRIPCIÓN */}
            <motion.p
              className="mt-6 text-lg text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t(`items.${current.key}.description`)}
            </motion.p>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}