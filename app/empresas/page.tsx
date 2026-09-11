'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HorizontalGallery from '../components/HorizontalGallery';
import EventFeatureCard from '../components/EventFeatureCard';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

/* BENEFICIOS */

const highlightStats = [
  {
    titleKey: 'locationBenefitTitle',
    descriptionKey: 'locationBenefitDescription',
    iconUrl: '/images/empresas/em1.webp',
  },
  {
    titleKey: 'capacityBenefitTitle',
    descriptionKey: 'capacityBenefitDescription',
    iconUrl: '/images/empresas/em2.webp',
  },
  {
    titleKey: 'roomsBenefitTitle',
    descriptionKey: 'roomsBenefitDescription',
    iconUrl: '/images/empresas/em3.webp',
  },
  {
    titleKey: 'teamBuildingBenefitTitle',
    descriptionKey: 'teamBuildingBenefitDescription',
    iconUrl: '/images/empresas/em4.webp',
  },
  {
    titleKey: 'cateringBenefitTitle',
    descriptionKey: 'cateringBenefitDescription',
    iconUrl: '/images/empresas/em5.webp',
  },
  {
    titleKey: 'parkingBenefitTitle',
    descriptionKey: 'parkingBenefitDescription',
    iconUrl: '/images/empresas/em6.webp',
  },
] as const;

/* GALERÍA CAPACITACIONES */

const trainingGalleryImages = [
  '/images/empresas/e1.jpg',
  '/images/empresas/e2.jpg',
  '/images/empresas/e3.jpg',
  '/images/empresas/e4.jpg',
  '/images/empresas/e5.jpg',
];

/* GALERÍA CORPORATIVA */

const corporateGallery = [
  '/images/empresas/e1.jpg',
  '/images/empresas/e4.jpg',
  '/images/colegios/graduaciones/g17.jpg',
  '/images/matrimonio/ma8.jpg',
  '/images/matrimonio/ma9.jpg',
  '/images/empresas/e6.jpg',
  '/images/empresas/e7.jpg',
  '/images/empresas/e8.jpg',
  '/images/empresas/e9.jpg',
];

/* PASEOS FIN DE AÑO */

const yearEndFeatures = [
  'yearEndPrivateCelebrations',
  'yearEndFullCatering',
  'yearEndPools',
  'yearEndActivities',
] as const;

/* SOLUCIONES PARA EMPRESAS */

const corporateSolutions = [
  {
    titleKey: 'solutionAccommodationTitle',
    descriptionKey: 'solutionAccommodationDescription',
  },
  {
    titleKey: 'solutionMeetingsTitle',
    descriptionKey: 'solutionMeetingsDescription',
  },
  {
    titleKey: 'solutionSeminarsTitle',
    descriptionKey: 'solutionSeminarsDescription',
  },
  {
    titleKey: 'solutionDinnersTitle',
    descriptionKey: 'solutionDinnersDescription',
  },
  {
    titleKey: 'solutionYearEndTitle',
    descriptionKey: 'solutionYearEndDescription',
  },
  {
    titleKey: 'solutionToursTitle',
    descriptionKey: 'solutionToursDescription',
  },
] as const;

/* PAGE */

export default function CorporateEventPage() {
  const t = useTranslations('Empresas');

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
    <div className="min-h-screen flex flex-col overflow-hidden bg-white">

      <Header />

      <main>

        {/* HERO */}
        <section
          ref={heroRef}
          className="relative min-h-[78vh] h-[85vh] -mt-24 overflow-hidden bg-black"
        >

          {/* IMAGEN PARALLAX */}
          <motion.div
            className="absolute -inset-y-32 inset-x-0"
            style={{
              y: heroY,
              scale: heroScale,
            }}
          >

            <Image sizes="100vw"
              src="/images/empresas/e4.jpg"
              alt={t('heroImageAlt')}
              fill
              priority
              className="object-cover"
            />

          </motion.div>

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

            <div className="max-w-6xl mx-auto text-center text-white">

              <motion.h1
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                  font-bold
                  leading-[0.95]
                  tracking-tight
                  text-white
                "
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
                  max-w-5xl
                  mx-auto
                  leading-relaxed
                "
              >
                {t('heroSubtitle')}
              </motion.p>

            </div>

          </div>

        </section>

        {/* STRIP */}
        <section className="py-6 bg-black text-white text-center uppercase tracking-[0.35em] text-sm md:text-base">
          {t('servicesStrip')}
        </section>

        {/* BENEFICIOS */}
        <section className="py-28 bg-white">

          <div className="max-w-6xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm font-bold mb-5">
                {t('infrastructureLabel')}
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-black leading-tight uppercase">

                {t('infrastructureTitle')}{' '}

                <span className="font-semibold text-black">
                  {t('infrastructureTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                {t('infrastructureDescription')}
              </motion.p>

            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">

              {highlightStats.map((item, i) => (

                <motion.div
                  key={item.titleKey}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.8,
                  }}
                  viewport={{ once: true }}
                >

                  <EventFeatureCard
                    title={t(item.titleKey)}
                    description={t(item.descriptionKey)}
                    iconUrl={item.iconUrl}
                    iconAlt={t(item.titleKey)}
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* PASEOS FIN DE AÑO */}
        <section className="relative py-36 bg-[#071827] overflow-hidden text-white">

          <Image sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 33vw"
            src="/images/empresas/e9.jpg"
            alt={t('yearEndBackgroundAlt')}
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#071827]/85 to-black/55" />

          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FBB03B]/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#FBB03B]/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{
                opacity: 0,
                x: -120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="inline-flex items-center gap-3 rounded-full bg-[#FBB03B] px-6 py-3 text-black text-sm md:text-base font-bold uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(251,176,59,0.35)] mb-8">
                {t('yearEndBadge')}
              </div>

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm font-bold mb-5">
                {t('yearEndLabel')}
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight uppercase">

                {t('yearEndTitle')}{' '}

                <span className="font-semibold text-white">
                  {t('yearEndTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-8 text-xl md:text-2xl text-white/85 leading-relaxed"
              >
                {t('yearEndLead')}
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-6 text-lg text-white/70 leading-relaxed"
              >
                {t('yearEndDescription')}
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                {yearEndFeatures.map((item, i) => (

                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.7,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-lg font-semibold flex items-center gap-4"
                  >

                    <span className="text-[#FBB03B] text-2xl leading-none">
                      ✓
                    </span>

                    <span>
                      {t(item)}
                    </span>

                  </motion.div>

                ))}

              </div>

              <div className="flex flex-col sm:flex-row gap-5 mt-12">

                <a
                  href="https://www.eventi-app.com/public-quotation/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#FBB03B] text-black text-lg font-bold shadow-[0_20px_60px_rgba(251,176,59,0.35)] hover:scale-105 transition-all duration-500"
                >
                  {t('quoteEvent')}
                </a>

                <a
                  href="https://wa.me/56926035311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/30 text-white text-lg font-semibold backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500"
                >
                  {t('whatsapp')}
                </a>

              </div>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
              className="relative h-[520px] md:h-[680px] rounded-[42px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.45)] border border-white/10"
            >

              <Image sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 33vw"
                src="/images/empresas/e10.jpg"
                alt={t('yearEndImageAlt')}
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            </motion.div>

          </div>

        </section>

        {/* CAPACITACIONES */}
        <section className="py-32 bg-gray-50">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{
                opacity: 0,
                x: -120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm font-bold mb-5">
                {t('businessEventsLabel')}
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-black leading-tight uppercase">

                {t('trainingTitle')}{' '}

                <span className="font-semibold text-black">
                  {t('trainingTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-8 text-lg text-gray-600 leading-relaxed"
              >
                {t('trainingDescription')}
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                {t('trainingServicesDescription')}
              </motion.p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="rounded-2xl bg-white shadow-lg p-5">

                  <h4 className="font-semibold mb-2">
                    ✔ {t('withStayTitle')}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {t('withStayDescription')}
                  </p>

                </div>

                <div className="rounded-2xl bg-white shadow-lg p-5">

                  <h4 className="font-semibold mb-2">
                    ✔ {t('withoutStayTitle')}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {t('withoutStayDescription')}
                  </p>

                </div>

                <div className="rounded-2xl bg-white shadow-lg p-5">

                  <h4 className="font-semibold mb-2">
                    ✔ {t('coffeeBreakTitle')}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {t('coffeeBreakDescription')}
                  </p>

                </div>

                <div className="rounded-2xl bg-white shadow-lg p-5">

                  <h4 className="font-semibold mb-2">
                    ✔ {t('teamBuildingTitle')}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {t('teamBuildingDescription')}
                  </p>

                </div>

              </div>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
            >

              <HorizontalGallery
                images={trainingGalleryImages}
                height={430}
              />

            </motion.div>

          </div>

        </section>

        {/* SOLUCIONES PARA EMPRESAS */}
        <section className="relative py-24 md:py-28 bg-black overflow-hidden text-white">

          {/* FONDO */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-95" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-6">

            {/* ENCABEZADO */}
            <motion.div
              initial={{
                opacity: 0,
                x: -120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-14 md:mb-16"
            >

              <p className="uppercase tracking-[0.3em] text-[#FBB03B] text-xs md:text-sm mb-4">
                {t('solutionsLabel')}
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
                {t('solutionsTitle')}
              </h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-4 text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              >
                {t('solutionsSubtitle')}
              </motion.p>

            </motion.div>

            {/* TARJETAS */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

              {corporateSolutions.map((item, index) => (

                <motion.div
                  key={item.titleKey}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    rounded-[24px]
                    bg-[#1b1a17]
                    border
                    border-white/10
                    p-7
                    md:p-8
                    min-h-[190px]
                    flex
                    flex-col
                    justify-center
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#FBB03B]/60
                    hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                  "
                >

                  {/* TÍTULO + TICKET */}
                  <div className="flex items-start gap-4 mb-4">

                    {/* TICKET NARANJO */}
                    <div
                      className="
                        shrink-0
                        w-8
                        h-8
                        rounded-full
                        bg-[#FBB03B]/15
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        group-hover:bg-[#FBB03B]
                        group-hover:scale-110
                      "
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="
                          text-[#FBB03B]
                          transition-colors
                          duration-300
                          group-hover:text-black
                        "
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>

                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight pt-0.5">
                      {t(item.titleKey)}
                    </h3>

                  </div>

                  {/* DESCRIPCIÓN */}
                  <p className="text-white/65 text-base leading-relaxed pl-12">
                    {t(item.descriptionKey)}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* CONVENIOS */}
        <section className="relative py-36 overflow-hidden">

          <Image sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 33vw"
            src="/images/empresas/e1.jpg"
            alt={t('agreementsImageAlt')}
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

            <motion.div
              initial={{
                opacity: 0,
                x: -120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                {t('agreementsLabel')}
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight uppercase">

                {t('agreementsTitle')}{' '}

                <span className="font-semibold text-white">
                  {t('agreementsTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-8 text-xl text-white/80 leading-relaxed max-w-4xl mx-auto"
              >
                {t('agreementsDescription')}
              </motion.p>

            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">

              <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">

                <h3 className="text-2xl mb-3">
                  {t('discountsTitle')}
                </h3>

                <p className="text-white/70">
                  {t('discountsDescription')}
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">

                <h3 className="text-2xl mb-3">
                  {t('promotionsTitle')}
                </h3>

                <p className="text-white/70">
                  {t('promotionsDescription')}
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8">

                <h3 className="text-2xl mb-3">
                  {t('experiencesTitle')}
                </h3>

                <p className="text-white/70">
                  {t('experiencesDescription')}
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* GALERÍA */}
        <section className="py-32 bg-gray-50">

          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              initial={{
                opacity: 0,
                x: -120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
              }}
              className="mb-16 text-center"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                {t('galleryLabel')}
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-black leading-tight uppercase">

                {t('galleryTitle')}{' '}

                <span className="font-semibold text-black">
                  {t('galleryTitleHighlight')}
                </span>

              </h2>

            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {corporateGallery.map((img, i) => (

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
                    duration: 0.7,
                    delay: i * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group overflow-hidden rounded-[32px]"
                >

                  <div className="relative h-[340px]">

                    <Image sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 33vw"
                      src={img}
                      alt={`${t('galleryImageAlt')} ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-32 bg-white">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-4xl mx-auto px-6 text-center"
          >

            <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
              {t('ctaLabel')}
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight uppercase">

              {t('ctaTitle')}{' '}

              <span className="font-semibold text-black">
                {t('ctaTitleHighlight')}
              </span>

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              {t('ctaDescription')}
            </p>

            <a
              href="https://wa.me/56926035311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-12 px-12 py-5 rounded-full text-black font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
              style={{
                backgroundColor: 'rgb(251,176,59)',
              }}
            >
              {t('requestQuote')}
            </a>

          </motion.div>

        </section>

      </main>

      <Footer />

    </div>
  );
}