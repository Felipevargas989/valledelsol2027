'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

/* ===========================================================
   ADULTO MAYOR
=========================================================== */

const seniorFeatures = [
  'seniorAllInclusive',
  'seniorAccommodation',
  'seniorRestaurant',
  'seniorActivities',
  'seniorPools',
  'seniorPersonalAttention',
  'seniorParking',
  'seniorSafeEnvironment',
] as const;

/* ===========================================================
   DELEGACIONES
=========================================================== */

const delegationFeatures = [
  'delegationSeniorClubs',
  'delegationMunicipal',
  'delegationSocialOrganizations',
  'delegationGroupTravel',
  'delegationCustomPrograms',
  'delegationRestaurant',
  'delegationTours',
  'delegationLocalExperiences',
] as const;

/* ===========================================================
   TURISMO INTERNACIONAL
=========================================================== */

const internationalServices = [
  {
    icon: '/images/tour/iconos/llegada.png',
    titleKey: 'airportTransferTitle',
    descriptionKey: 'airportTransferDescription',
  },
  {
    icon: '/images/tour/iconos/atencion.png',
    titleKey: 'delegationReceptionTitle',
    descriptionKey: 'delegationReceptionDescription',
  },
  {
    icon: '/images/tour/iconos/bienvenida.png',
    titleKey: 'internationalAccommodationTitle',
    descriptionKey: 'internationalAccommodationDescription',
  },
  {
    icon: '/images/tour/iconos/gastronomia.png',
    titleKey: 'localGastronomyTitle',
    descriptionKey: 'localGastronomyDescription',
  },
  {
    icon: '/images/tour/iconos/traslado.png',
    titleKey: 'touristTransportTitle',
    descriptionKey: 'touristTransportDescription',
  },
  {
    icon: '/images/tour/iconos/ubicacion.png',
    titleKey: 'customProgramsTitle',
    descriptionKey: 'customProgramsDescription',
  },
] as const;

/* ===========================================================
   SERVICIO INTEGRAL
=========================================================== */

const integralFeatures = [
  'integralFlexiblePrograms',
  'integralPersonalAttention',
  'integralGastronomy',
  'integralLargeSpaces',
  'integralLocalExperiences',
  'integralCoordination',
] as const;

/* ===========================================================
   ETAPAS DEL VIAJE
=========================================================== */

const journeySteps = [
  {
    icon: '/images/tour/iconos/llegada.png',
    titleKey: 'journeyArrivalTitle',
    descriptionKey: 'journeyArrivalDescription',
  },
  {
    icon: '/images/tour/iconos/traslado.png',
    titleKey: 'journeyTransferTitle',
    descriptionKey: 'journeyTransferDescription',
  },
  {
    icon: '/images/tour/iconos/bienvenida.png',
    titleKey: 'journeyWelcomeTitle',
    descriptionKey: 'journeyWelcomeDescription',
  },
  {
    icon: '/images/tour/iconos/gastronomia.png',
    titleKey: 'journeyGastronomyTitle',
    descriptionKey: 'journeyGastronomyDescription',
  },
  {
    icon: '/images/tour/iconos/excursiones.png',
    titleKey: 'journeyExcursionsTitle',
    descriptionKey: 'journeyExcursionsDescription',
  },
  {
    icon: '/images/tour/iconos/tiempolibre.png',
    titleKey: 'journeyFreeTimeTitle',
    descriptionKey: 'journeyFreeTimeDescription',
  },
  {
    icon: '/images/tour/iconos/regreso.png',
    titleKey: 'journeyReturnTitle',
    descriptionKey: 'journeyReturnDescription',
  },
] as const;

/* ===========================================================
   POR QUÉ ELEGIRNOS
=========================================================== */

const reasons = [
  {
    icon: '/images/tour/iconos/bienvenida.png',
    titleKey: 'reasonInfrastructureTitle',
    descriptionKey: 'reasonInfrastructureDescription',
  },
  {
    icon: '/images/tour/iconos/traslado.png',
    titleKey: 'reasonGroupProgramsTitle',
    descriptionKey: 'reasonGroupProgramsDescription',
  },
  {
    icon: '/images/tour/iconos/ubicacion.png',
    titleKey: 'reasonLocationTitle',
    descriptionKey: 'reasonLocationDescription',
  },
  {
    icon: '/images/tour/iconos/gastronomia.png',
    titleKey: 'reasonGastronomyTitle',
    descriptionKey: 'reasonGastronomyDescription',
  },
  {
    icon: '/images/tour/iconos/atencion.png',
    titleKey: 'reasonAttentionTitle',
    descriptionKey: 'reasonAttentionDescription',
  },
  {
    icon: '/images/tour/iconos/excursiones.png',
    titleKey: 'reasonExperiencesTitle',
    descriptionKey: 'reasonExperiencesDescription',
  },
] as const;

/* ===========================================================
   PAGE
=========================================================== */

export default function TourOperadoresPage() {
  const t = useTranslations('TourOperadores');

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ['-5%', '35%']
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1.15, 1.25]
  );

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-white">

      <Header />

      <main>

        {/* ======================================================
                            HERO
        ======================================================= */}

        <section
          className="
            relative
            min-h-[680px]
            h-auto
            md:min-h-[720px]
            lg:min-h-[780px]
            xl:min-h-[85vh]
            2xl:min-h-[88vh]
            -mt-24
            overflow-hidden
            bg-black
          "
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
              src="/images/tour/t3.jpg"
              alt={t('heroImageAlt')}
              fill
              priority
              className="object-cover object-[center_40%]"
            />
          </motion.div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

          {/* CONTENIDO */}
          <div
            className="
              relative
              z-10
              min-h-[680px]
              md:min-h-[720px]
              lg:min-h-[780px]
              xl:min-h-[85vh]
              2xl:min-h-[92vh]
              flex
              items-center
              justify-center
              px-5
              sm:px-6
              pt-32
              pb-14
              md:pt-36
              md:pb-16
              lg:pt-40
              lg:pb-16
            "
          >

            <div className="w-full max-w-6xl mx-auto text-center text-white">

              {/* ETIQUETA */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="
                  uppercase
                  tracking-[0.25em]
                  sm:tracking-[0.35em]
                  md:tracking-[0.4em]
                  text-[#FBB03B]
                  text-xs
                  sm:text-sm
                  mb-5
                  md:mb-6
                "
              >
                {t('heroLabel')}
              </motion.p>

              {/* TÍTULO */}
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
                {t('heroTitleFirst')}
                <br />
                {t('heroTitleSecond')}
              </motion.h1>

              {/* DESCRIPCIÓN */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                }}
                className="
                  mt-5
                  sm:mt-6
                  md:mt-8
                  text-base
                  sm:text-lg
                  md:text-xl
                  lg:text-2xl
                  text-white/90
                  max-w-5xl
                  mx-auto
                  leading-relaxed
                "
              >
                {t('heroDescription')}
              </motion.p>

              {/* BOTONES */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.45,
                }}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  sm:gap-5
                  justify-center
                  items-center
                  mt-8
                  md:mt-10
                "
              >

                <PrimaryButton href="https://wa.link/vjoaea">
                  {t('requestProgram')}
                </PrimaryButton>

                <SecondaryButton
                  href="#intro"
                  className="
                    !border-white/40
                    !text-white
                    hover:!bg-white
                    hover:!text-black
                  "
                >
                  {t('discoverMore')}
                </SecondaryButton>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ======================================================
                            INTRO
        ======================================================= */}

        <section
          id="intro"
          className="py-28 bg-white"
        >

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                {t('introLabel')}
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">

                {t('introTitle')}{' '}

                <span className="font-semibold text-gray-900">
                  {t('introTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-8 text-lg text-gray-600 leading-relaxed"
              >
                {t('introDescription')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                }}
                viewport={{ once: true }}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                {t('introDescriptionSecond')}
              </motion.p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="relative h-[650px] rounded-[36px] overflow-hidden shadow-2xl"
            >

              <Image sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                src="/images/tour/t2.jpg"
                alt={t('introImageAlt')}
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </motion.div>

          </div>

        </section>

        {/* ======================================================
                        TURISMO NACIONAL
        ======================================================= */}

        <section className="py-32 bg-gray-50">

          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                {t('nationalTourismLabel')}
              </p>

              <h2 className="text-4xl md:text-6xl font-light">

                {t('nationalTourismTitle')}{' '}

                <span className="font-semibold text-gray-900">
                  {t('nationalTourismTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-8 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                {t('nationalTourismDescription')}
              </motion.p>

            </motion.div>

            {/* ======================================================
                        ADULTO MAYOR
            ======================================================= */}

            <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">

              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="relative h-[650px] rounded-[36px] overflow-hidden shadow-2xl"
              >

                <Image sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  src="/images/tour/t4.jpg"
                  alt={t('seniorImageAlt')}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                  {t('specialProgramsLabel')}
                </p>

                <h3 className="text-4xl font-light mb-8">

                  <span className="font-semibold text-gray-900">
                    {t('seniorTitle')}
                  </span>

                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  {t('seniorDescription')}
                </p>

                <div className="grid sm:grid-cols-2 gap-5">

                  {seniorFeatures.map((item, index) => (

                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="rounded-2xl bg-white shadow-lg p-5 hover:-translate-y-1 transition duration-300"
                    >

                      <span className="text-[#FBB03B] font-bold mr-2">
                        ✔
                      </span>

                      {t(item)}

                    </motion.div>

                  ))}

                </div>

              </motion.div>

            </div>

            {/* ======================================================
                        DELEGACIONES
            ======================================================= */}

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                  {t('groupTravelLabel')}
                </p>

                <h3 className="text-4xl font-light mb-8">

                  <span className="font-semibold text-gray-900">
                    {t('delegationsTitle')}
                  </span>

                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  {t('delegationsDescription')}
                </p>

                <div className="grid sm:grid-cols-2 gap-5">

                  {delegationFeatures.map((item, index) => (

                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="rounded-2xl bg-white shadow-lg p-5 hover:-translate-y-1 transition duration-300"
                    >

                      <span className="text-[#FBB03B] font-bold mr-2">
                        ✔
                      </span>

                      {t(item)}

                    </motion.div>

                  ))}

                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="relative h-[650px] rounded-[36px] overflow-hidden shadow-2xl"
              >

                <Image sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  src="/images/tour/t5.jpg"
                  alt={t('delegationsImageAlt')}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />

              </motion.div>

            </div>

          </div>

        </section>

        {/* ======================================================
                    TURISMO INTERNACIONAL
        ======================================================= */}

        <section className="relative py-32 bg-black overflow-hidden text-white">

          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-95" />

          <div className="relative max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                {t('internationalTourismLabel')}
              </p>

              <h2 className="text-4xl md:text-6xl font-light">

                {t('internationalTourismTitle')}{' '}

                <span className="font-semibold text-white">
                  {t('internationalTourismTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-8 text-white/70 text-lg max-w-4xl mx-auto leading-relaxed"
              >
                {t('internationalTourismDescription')}
              </motion.p>

            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {internationalServices.map((item, index) => (

                <motion.div
                  key={item.titleKey}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group rounded-[30px] bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#FBB03B]/60 hover:bg-white/10 transition-all duration-500"
                >

                  <div className="mb-8">

                    <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">

                      <Image
                        src={item.icon}
                        alt={t(item.titleKey)}
                        width={42}
                        height={42}
                        className="object-contain"
                      />

                    </div>

                  </div>

                  <h3 className="text-2xl font-light mb-5">
                    {t(item.titleKey)}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ======================================================
                    SERVICIO INTEGRAL
        ======================================================= */}

        <section className="py-32 bg-white">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                {t('integralLabel')}
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">

                {t('integralTitle')}{' '}

                <span className="font-semibold text-gray-900">
                  {t('integralTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-8 text-lg text-gray-600 leading-relaxed"
              >
                {t('integralDescription')}
              </motion.p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                {integralFeatures.map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-gray-50 shadow-md p-5 hover:-translate-y-1 transition duration-300"
                  >
                    ✔ {t(item)}
                  </motion.div>

                ))}

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="relative h-[650px] rounded-[36px] overflow-hidden shadow-2xl"
            >

              <Image sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                src="/images/tour/t6.jpg"
                alt={t('integralImageAlt')}
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </motion.div>

          </div>

        </section>

        {/* ======================================================
                    ASÍ VIVIMOS EL VIAJE
        ======================================================= */}

        <section className="relative py-32 bg-black overflow-hidden text-white">

          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

          <div className="relative max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                {t('journeyLabel')}
              </p>

              <h2 className="text-4xl md:text-6xl font-light">

                {t('journeyTitle')}{' '}

                <span className="font-semibold text-white">
                  {t('journeyTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-8 text-white/70 text-lg max-w-4xl mx-auto leading-relaxed"
              >
                {t('journeyDescription')}
              </motion.p>

            </motion.div>

            <div className="relative">

              {/* LÍNEA HORIZONTAL */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-[2px] bg-white/10" />

              <div className="grid lg:grid-cols-7 gap-10">

                {journeySteps.map((step, index) => (

                  <motion.div
                    key={step.titleKey}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="relative text-center"
                  >

                    <div className="relative z-10 w-28 h-28 mx-auto rounded-full bg-[#FBB03B] flex items-center justify-center shadow-[0_20px_60px_rgba(251,176,59,0.35)]">

                      <Image
                        src={step.icon}
                        alt={t(step.titleKey)}
                        width={58}
                        height={58}
                        className="object-contain"
                      />

                    </div>

                    <h3 className="mt-8 text-2xl font-light">
                      {t(step.titleKey)}
                    </h3>

                    <p className="mt-4 text-white/70 leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ======================================================
                    ¿POR QUÉ ELEGIRNOS?
        ======================================================= */}

        <section className="py-32 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-5">
                {t('whyLabel')}
              </p>

              <h2 className="text-4xl md:text-6xl font-light">

                {t('whyTitle')}{' '}

                <span className="font-semibold text-gray-900">
                  {t('whyTitleHighlight')}
                </span>

              </h2>

            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {reasons.map((card, index) => (

                <motion.div
                  key={card.titleKey}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group rounded-[30px] bg-gray-50 shadow-xl p-10 hover:-translate-y-3 transition-all duration-500"
                >

                  <div className="w-20 h-20 rounded-full bg-[#FBB03B]/10 flex items-center justify-center mb-8 group-hover:bg-[#FBB03B]/20 transition-all duration-300">

                    <Image
                      src={card.icon}
                      alt={t(card.titleKey)}
                      width={46}
                      height={46}
                      className="object-contain"
                    />

                  </div>

                  <h3 className="text-2xl font-light mb-5">
                    {t(card.titleKey)}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {t(card.descriptionKey)}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ======================================================
                            CTA FINAL
        ======================================================= */}

        <section className="relative py-40 overflow-hidden">

          <Image sizes="100vw"
            src="/images/tour/t1.jpg"
            alt={t('ctaImageAlt')}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.35em] text-[#FBB03B] text-sm mb-6">
                {t('ctaLabel')}
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">

                {t('ctaTitle')}
                <br />

                <span className="font-semibold text-white">
                  {t('ctaTitleHighlight')}
                </span>

              </h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-10 text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
              >
                {t('ctaDescription')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-6 mt-14"
              >

                <a
                  href="https://wa.link/vjoaea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 rounded-full font-semibold text-lg shadow-2xl hover:scale-105 transition duration-300"
                  style={{
                    backgroundColor: '#FBB03B',
                    color: '#111',
                  }}
                >
                  {t('requestProgram')}
                </a>

                <a
                  href="https://wa.me/56940588585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 rounded-full border border-white/40 hover:bg-white hover:text-black transition duration-300 text-lg"
                >
                  {t('contactUs')}
                </a>

              </motion.div>

            </motion.div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}