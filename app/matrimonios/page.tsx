'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import EventFeatureCard from '../components/EventFeatureCard';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { useTranslations } from 'next-intl';

const backgroundIncludes = '/images/matrimonio/matri.jpg';

const weddingGallery = [
  '/images/matrimonio/ma10.jpg',
  '/images/matrimonio/m2.jpg',
  '/images/matrimonio/m3.jpg',
  '/images/matrimonio/m4.jpg',
  '/images/matrimonio/m5.jpg',
  '/images/matrimonio/ma1.jpg',
  '/images/matrimonio/ma2.jpg',
  '/images/matrimonio/ma3.jpg',
  '/images/matrimonio/ma4.jpg',
  '/images/matrimonio/ma5.jpg',
  '/images/matrimonio/ma6.jpg',
  '/images/matrimonio/ma7.jpg',
  '/images/matrimonio/ma8.jpg',
  '/images/matrimonio/ma9.jpg',
  '/images/matrimonio/m1.jpg',
  '/images/matrimonio/ma11.jpg',
  '/images/matrimonio/ma12.jpg',
  '/images/matrimonio/ma13.jpg',
  '/images/matrimonio/ma14.jpg',
  '/images/matrimonio/ma15.jpg',
  '/images/matrimonio/ma16.jpg',
];

const services = [
  {
    titleKey: 'cateringTitle',
    descriptionKey: 'cateringDescription',
    iconUrl: '/images/matrimonio/sombrero-de-cocinero.webp',
    iconAltKey: 'cateringIconAlt',
  },
  {
    titleKey: 'decorationTitle',
    descriptionKey: 'decorationDescription',
    iconUrl: '/images/matrimonio/pasillo-1.webp',
    iconAltKey: 'decorationIconAlt',
  },
  {
    titleKey: 'plannerTitle',
    descriptionKey: 'plannerDescription',
    iconUrl: '/images/matrimonio/planificador-de-la-boda.webp',
    iconAltKey: 'plannerIconAlt',
  },
  {
    titleKey: 'musicTitle',
    descriptionKey: 'musicDescription',
    iconUrl: '/images/matrimonio/sistema-de-sonido.webp',
    iconAltKey: 'musicIconAlt',
  },
  {
    titleKey: 'experiencesTitle',
    descriptionKey: 'experiencesDescription',
    iconUrl: '/images/matrimonio/fotografo.webp',
    iconAltKey: 'experiencesIconAlt',
  },
  {
    titleKey: 'barTitle',
    descriptionKey: 'barDescription',
    iconUrl: '/images/matrimonio/copa-de-vino.webp',
    iconAltKey: 'barIconAlt',
  },
];

export default function WeddingsPage() {
  const t = useTranslations('Matrimonios');
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  useEffect(() => {
    const chica = window.matchMedia('(max-width: 768px)').matches;
    setVideoSrc(chica ? '/videos/bodas-480.mp4' : '/videos/bodas-720.mp4');
  }, []);

  const includesRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: includesRef,
    offset: ['start end', 'end start'],
  });

  const includesY = useTransform(
    scrollYProgress,
    [0, 1],
    ['-35%', '35%']
  );

  const weddingIncludes = [
    t('includeFoodService'),
    t('includeCateringBar'),
    t('includeDecoration'),
    t('includeMusic'),
    t('includeGardens'),
    t('includeCabin'),
  ];

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main>

        {/* HERO VIDEO */}
        <section className="relative min-h-[78vh] h-[85vh] -mt-24 overflow-hidden bg-black">

          {/* VIDEO */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">

            {/* Video propio servido por Vercel (09-09-2026), igual que el hero de
              la portada: antes era YouTube y el celular bajaba el reproductor
              entero antes de pintar. Portada al instante; 480p en pantallas
              chicas, 720p en el resto. */}

            <video
              className="
                absolute
                top-1/2
                left-1/2
                min-w-full
                min-h-full
                w-auto
                h-auto
                -translate-x-1/2
                -translate-y-1/2
                object-cover
                pointer-events-none
              "
              src={videoSrc ?? undefined}
              poster="/images/matrimonio/bodas-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />

          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

          {/* CONTENIDO */}
          <div
            className="
              relative
              z-10
              h-full
              flex
              items-center
              justify-center
              px-6
              pt-36
              md:pt-40
              lg:pt-44
            "
          >

            <div className="max-w-5xl mx-auto text-center text-white">

              <motion.h1
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  xl:text-9xl
                  text-white
                  leading-none
                "
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontStyle: 'italic',
                  letterSpacing: '1px',
                  fontWeight: 500,
                }}
              >
                {t('heroTitle')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="
                  mt-6
                  md:mt-8
                  lg:mt-10
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  text-white/90
                  max-w-4xl
                  mx-auto
                  leading-relaxed
                "
              >
                {t('heroSubtitle')}
              </motion.p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <div className="text-center -mt-12 mb-20 relative z-10">

          <Link
            href="https://www.eventi-app.com/public-quotation/1"
            className="
              inline-block
              px-12
              py-4
              rounded-full
              text-white
              font-semibold
              shadow-2xl
              hover:scale-105
              transition
            "
            style={{
              backgroundColor: 'rgb(251,176,59)',
            }}
          >
            {t('quoteEvent')}
          </Link>

        </div>

        {/* INTRO */}
        <section className="pt-10 pb-20 text-center overflow-hidden">

          <div className="max-w-6xl mx-auto px-5 sm:px-6">

            {/* TÍTULO */}
            <motion.h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-light
                text-gray-700
                leading-tight
                max-w-5xl
                mx-auto
                break-words
              "
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: false,
                margin: '-100px',
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {t('introTitle')}{' '}

              <span className="font-semibold text-gray-900">
                {t('introTitleHighlight')}
              </span>
            </motion.h2>

            {/* SUBTÍTULO */}
            <motion.p
              className="
                mt-6
                text-lg
                sm:text-xl
                md:text-2xl
                text-gray-600
                leading-relaxed
                max-w-5xl
                mx-auto
              "
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              {t('introSubtitle')}
            </motion.p>

          </div>

        </section>

        {/* BENEFICIOS MATRIMONIO */}
        <section
          ref={includesRef}
          className="relative py-40 md:py-52 overflow-hidden"
        >

          {/* PARALLAX BACKGROUND */}
          <motion.div
            className="absolute inset-0 -z-10 h-[140%]"
            style={{
              y: includesY,
            }}
          >

            <Image sizes="100vw"
              src={backgroundIncludes}
              alt={t('benefitsImageAlt')}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

          </motion.div>

          {/* CONTENIDO */}
          <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: 'easeOut',
              }}
              viewport={{
                once: true,
              }}
            >

              <h2 className="text-3xl md:text-5xl font-semibold mb-12">
                {t('includesTitle')}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto text-lg md:text-xl">

                {weddingIncludes.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="flex items-center gap-3"
                  >

                    <span className="text-[#FBB03B] text-xl">
                      ✔
                    </span>

                    {item}

                  </motion.p>
                ))}

              </div>

            </motion.div>

          </div>

        </section>

        {/* FEATURES */}
        <section className="py-24 bg-white">

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

            {services.map((service, i) => (
              <motion.div
                key={service.titleKey}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
              >

                <EventFeatureCard
                  title={t(service.titleKey)}
                  description={t(service.descriptionKey)}
                  iconUrl={service.iconUrl}
                  iconAlt={t(service.iconAltKey)}
                />

              </motion.div>
            ))}

          </div>

        </section>

        {/* GALERÍA */}
        <section className="px-6 pb-24 bg-white">

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

            {weddingGallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                className="overflow-hidden rounded-2xl group"
              >

                <div className="relative h-[300px]">

                  <Image sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    src={img}
                    alt={`${t('galleryImageAlt')} ${i + 1}`}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />

                </div>

              </motion.div>
            ))}

          </div>

        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gray-100 text-center">

          <div className="max-w-5xl mx-auto px-6">

            <div className="flex flex-col md:flex-row gap-6 justify-center">

              <PrimaryButton
                href="https://www.eventi-app.com/public-quotation/1"
                target="_blank"
              >
                {t('quoteEvent')}
              </PrimaryButton>

              <SecondaryButton
                href="https://wa.me/56926035311"
                target="_blank"
              >
                {t('whatsapp')}
              </SecondaryButton>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}