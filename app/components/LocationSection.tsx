'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function LocationSection() {
  const t = useTranslations('Location');

  return (
    <section className="relative py-24 overflow-hidden">

      {/* BACKGROUND PARALLAX */}
      <div className="absolute inset-0 -z-10">
        {/* Por el optimizador de Next (09-09): antes iba cruda, 339 KB a
            cualquier pantalla. */}
        <div className="relative w-full h-[120%] parallax-bg">
          <Image
            src="/images/ubicacion.jpg"
            alt={t('imageAlt')}
            fill
            sizes="100vw"
          quality={60}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - TEXT */}
          <div className="space-y-6 text-white">

            {/* TÍTULO PRINCIPAL */}
            <motion.h2
              className="text-4xl md:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('titleLight')}{' '}
              <span className="font-semibold">
                {t('titleBold')}
              </span>
            </motion.h2>

            {/* SUBTÍTULO */}
            <motion.p
              className="text-lg md:text-xl text-white/90"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font">
                {t('subtitle')}
              </span>
            </motion.p>

            {/* TEXTO */}
            <div className="space-y-4 text-white/90 text-lg leading-snug max-w-xl">

              <p>
                {t('description')}
              </p>

              <ul className="space-y-2">
                <li>• {t('distances.plaza')}</li>
                <li>• {t('distances.beach')}</li>
                <li>• {t('distances.biopark')}</li>
                <li>• {t('distances.waterPark')}</li>
                <li>• {t('distances.winery')}</li>
                <li>• {t('distances.busTerminal')}</li>
              </ul>

              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold">
                  {t('address')}
                </p>
              </div>

              {/* CTA WAZE */}
              <a
                href="https://waze.com/ul?q=Km.%201,5%20Camino%20a%20Cerro%20Negro%20Parcela%2051%20Quillón"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold transition hover:scale-105 hover:bg-gray-100"
              >
                {t('directions')}
              </a>

            </div>
          </div>

          {/* RIGHT - MAP */}
          <motion.div
            className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=complejo%20turistico%20valle%20del%20sol%20quill%C3%B3n&t=m&z=14&output=embed&iwloc=near"
              title={t('mapTitle')}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}