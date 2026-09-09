'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMemberCard from '../components/TeamMemberCard';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const aboutGalleryImages: string[] = [
  '/images/cabanas/cabana4/c4.jpg',
  '/images/relajacion.jpg',
  '/images/restaurante/rest4.webp',
  '/images/restaurante/rest2.webp',
  '/images/cabanas/cabana6/c2.jpg',
  '/images/restaurante/rest5.webp',
  '/images/matrimonio/m1.jpg',
  '/images/cabanas/cabana4/c1.jpeg',
  '/images/galeria/areas-verdes.jpg',
];

export default function AboutPage() {
  const t = useTranslations('Nosotros');

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    ['-12%', '28%']
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.15, 1.28]
  );

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="grow pt-24">

        {/* HERO */}
        <section
          ref={heroRef}
          className="relative h-[85vh] -mt-24 overflow-hidden bg-black"
        >

          {/* PARALLAX */}
          <motion.div
            className="absolute -inset-y-32 inset-x-0"
            style={{
              y: heroY,
              scale: heroScale,
            }}
          >

            <Image
              src="/images/galeria/letrero4.jpg"
              alt={t('heroImageAlt')}
              fill
              className="object-cover object-[center_5%]"
              priority
            />

          </motion.div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

          {/* CONTENIDO */}
          <div className="relative z-10 h-full flex items-center justify-center px-6 pt-24">

            <div className="max-w-6xl mx-auto text-center text-white">

              <motion.h1
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white"
              >
                {t('heroTitleFirst')}
                <br />
                {t('heroTitleSecond')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="mt-10 text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed"
              >
                {t('heroSubtitle')}
              </motion.p>

            </div>

          </div>

        </section>

        {/* HISTORIA / NOSOTROS */}
        <section className="py-24 md:py-32 bg-white overflow-hidden">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

              {/* TEXTO */}
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >

                {/* ETIQUETA */}
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-[#FBB03B]
                    text-sm
                    font-medium
                    mb-7
                  "
                >
                  {t('historyLabel')}
                </motion.p>

                {/* TÍTULO */}
                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-light
                    leading-[1.08]
                    tracking-tight
                    text-gray-900
                  "
                >
                  {t('historyTitle')}{' '}

                  <span className="font-semibold">
                    {t('historyTitleHighlight')}
                  </span>

                </h2>

                {/* TEXTO */}
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className="
                    mt-10
                    text-lg
                    md:text-xl
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {t('historyParagraphOne')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35,
                  }}
                  viewport={{ once: true }}
                  className="
                    mt-6
                    text-lg
                    md:text-xl
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {t('historyParagraphTwo')}
                </motion.p>

              </motion.div>

              {/* IMAGEN */}
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="
                  relative
                  w-full
                  h-[450px]
                  md:h-[560px]
                  lg:h-[620px]
                  rounded-[32px]
                  overflow-hidden
                  shadow-2xl
                "
              >

                <Image
                  src="/images/galeria/letrero2.jpg"
                  alt={t('historyImageAlt')}
                  fill
                  priority
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </motion.div>

            </div>

          </div>

        </section>

        {/* EQUIPO */}
        <section className="py-20 bg-gray-50">

          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-12">

              <h2 className="text-3xl md:text-4xl font-bold">
                {t('teamTitle')}
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">

              <TeamMemberCard
                name="Felipe Vargas"
                role={t('felipeRole')}
                description={t('felipeDescription')}
                imageUrl="/images/galeria/Nosotros-Felipe.webp"
              />

              <TeamMemberCard
                name="Camila Carvajal"
                role={t('camilaRole')}
                description={t('camilaDescription')}
                imageUrl="/images/galeria/Nosotros-Camila.webp"
              />

              <TeamMemberCard
                name="Bela"
                role={t('belaRole')}
                description={t('belaDescription')}
                imageUrl="/images/galeria/Bela-7.webp"
              />

            </div>

          </div>

        </section>

        {/* GALERÍA PREMIUM */}
        <section className="px-6 pb-24">

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

            {aboutGalleryImages.map((img, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                }}
                className="overflow-hidden rounded-2xl group"
              >

                <div className="relative h-[260px] md:h-[300px]">

                  <Image
                    src={img}
                    alt={`${t('galleryImageAlt')} ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* FRASE FINAL */}
        <section className="py-20 bg-white">

          <div className="max-w-3xl mx-auto text-center px-6 space-y-8">

            <h2 className="text-2xl md:text-3xl font-bold">
              “{t('finalQuote')}”
            </h2>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}