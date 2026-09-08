'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Booking() {
  const t = useTranslations('Booking');

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center">

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/relajacion.jpg')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENEDOR */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

        <div className="flex">

          {/* CONTENIDO IZQUIERDA */}
          <div className="w-full md:w-1/2 text-white text-left">

            {/* SUBTÍTULO */}
            <p className="text-sm tracking-widest uppercase text-white/70 mb-4">
              Valle del Sol
            </p>

            {/* TÍTULO */}
            <motion.h2
              className="text-4xl md:text-6xl font-semibold leading-tight"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {t('title')}
            </motion.h2>

            {/* TEXTO */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              {t('description')}
            </motion.p>

            {/* BOTÓN */}
            <div className="mt-10 flex gap-4 flex-wrap">

              <Link href="https://www.instagram.com/valledelsolquillon.cl/">
                <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-sm font-semibold transition hover:scale-105">
                  {t('instagram')}
                </button>
              </Link>

            </div>

          </div>

          {/* COLUMNA VACÍA */}
          <div className="hidden md:block md:w-1/2" />

        </div>

      </div>

    </section>
  );
}