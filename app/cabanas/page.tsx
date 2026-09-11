'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { useAlohaBooking } from '../components/AlohaBookingProvider';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

/* =========================
   DATA CABAÑAS
========================= */
const cabins = [
  {
    titleKey: 'cabin2Title',

    unitSlug: 'cabana-para-2-xkbp7',

    descriptionKey: 'cabin2Description',
    detailsKey: 'cabin2Details',

    images: [
      '/images/cabanas/cabana2/ca1.jpg',
      '/images/cabanas/cabana2/ca2.jpg',
      '/images/cabanas/cabana2/ca3.jpg',
      '/images/cabanas/cabana2/ca4.jpg',
    ],

    icons: [
      {
        icon: '/images/cabanas/iconos/cama2plazas.png',
        labelKey: 'bedDouble',
      },
      {
        icon: '/images/cabanas/iconos/cocina.png',
        labelKey: 'equippedKitchen',
      },
      {
        icon: '/images/cabanas/iconos/nevera.png',
        labelKey: 'minibar',
      },
      {
        icon: '/images/cabanas/iconos/parrilla.png',
        labelKey: 'grill',
      },
      {
        icon: '/images/cabanas/iconos/toallas.png',
        labelKey: 'towels',
      },
      {
        icon: '/images/cabanas/iconos/papel-de-bano.png',
        labelKey: 'comfort',
      },
      {
        icon: '/images/cabanas/iconos/estufa-de-lena.png',
        labelKey: 'woodStove',
      },
      {
        icon: '/images/cabanas/iconos/terraza.png',
        labelKey: 'terrace',
      },
      {
        icon: '/images/cabanas/iconos/wifi.png',
        labelKey: 'wifi',
      },
      {
        icon: '/images/cabanas/iconos/smarttv.png',
        labelKey: 'smartTv',
      },
      {
        icon: '/images/cabanas/iconos/servicio-de-habitacion.png',
        labelKey: 'roomService',
      },
    ],
  },

  {
    titleKey: 'cabin4Title',

    unitSlug: 'cabana-para-4-personas-fedqr',

    descriptionKey: 'cabin4Description',
    detailsKey: 'cabin4Details',

    images: [
      '/images/cabanas/cabana4/ca1.jpg',
      '/images/cabanas/cabana4/ca2.jpg',
      '/images/cabanas/cabana4/ca3.jpg',
      '/images/cabanas/cabana4/ca4.jpg',
      '/images/cabanas/cabana4/ca5.jpg',
      '/images/cabanas/cabana4/ca6.jpg',
    ],

    icons: [
      {
        icon: '/images/cabanas/iconos/cama2plazas.png',
        labelKey: 'bedDouble',
      },
      {
        icon: '/images/cabanas/iconos/cama1plaza.png',
        labelKey: 'twoSingleBeds',
      },
      {
        icon: '/images/cabanas/iconos/cocina.png',
        labelKey: 'equippedKitchen',
      },
      {
        icon: '/images/cabanas/iconos/nevera.png',
        labelKey: 'minibar',
      },
      {
        icon: '/images/cabanas/iconos/parrilla.png',
        labelKey: 'grill',
      },
      {
        icon: '/images/cabanas/iconos/toallas.png',
        labelKey: 'towels',
      },
      {
        icon: '/images/cabanas/iconos/papel-de-bano.png',
        labelKey: 'comfort',
      },
      {
        icon: '/images/cabanas/iconos/estufa-de-lena.png',
        labelKey: 'woodStove',
      },
      {
        icon: '/images/cabanas/iconos/terraza.png',
        labelKey: 'terrace',
      },
      {
        icon: '/images/cabanas/iconos/wifi.png',
        labelKey: 'wifi',
      },
      {
        icon: '/images/cabanas/iconos/smarttv.png',
        labelKey: 'smartTv',
      },
      {
        icon: '/images/cabanas/iconos/servicio-de-habitacion.png',
        labelKey: 'roomService',
      },
    ],
  },

  {
    titleKey: 'cabin6Title',

    unitSlug: 'cabana-para-6-personas-v8ujy',

    descriptionKey: 'cabin6Description',
    detailsKey: 'cabin6Details',

    images: [
      '/images/cabanas/cabana6/ca1.jpg',
      '/images/cabanas/cabana6/ca2.jpg',
      '/images/cabanas/cabana6/ca3.jpg',
      '/images/cabanas/cabana6/ca4.jpg',
      '/images/cabanas/cabana6/ca5.jpg',
      '/images/cabanas/cabana6/ca6.jpg',
    ],

    icons: [
      {
        icon: '/images/cabanas/iconos/cama2plazas.png',
        labelKey: 'bedDouble',
      },
      {
        icon: '/images/cabanas/iconos/cama1plaza.png',
        labelKey: 'twoSingleBeds',
      },
      {
        icon: '/images/cabanas/iconos/literas.png',
        labelKey: 'bunkBed',
      },
      {
        icon: '/images/cabanas/iconos/cocina.png',
        labelKey: 'equippedKitchen',
      },
      {
        icon: '/images/cabanas/iconos/nevera.png',
        labelKey: 'minibar',
      },
      {
        icon: '/images/cabanas/iconos/parrilla.png',
        labelKey: 'grill',
      },
      {
        icon: '/images/cabanas/iconos/toallas.png',
        labelKey: 'towels',
      },
      {
        icon: '/images/cabanas/iconos/papel-de-bano.png',
        labelKey: 'comfort',
      },
      {
        icon: '/images/cabanas/iconos/estufa-de-lena.png',
        labelKey: 'woodStove',
      },
      {
        icon: '/images/cabanas/iconos/terraza.png',
        labelKey: 'terrace',
      },
      {
        icon: '/images/cabanas/iconos/wifi.png',
        labelKey: 'wifi',
      },
      {
        icon: '/images/cabanas/iconos/smarttv.png',
        labelKey: 'smartTv',
      },
      {
        icon: '/images/cabanas/iconos/servicio-de-habitacion.png',
        labelKey: 'roomService',
      },
    ],
  },
];

/* =========================
   CARRUSEL IMÁGENES
========================= */
function Carousel({
  images,
  imageAlt,
  previousLabel,
  nextLabel,
}: {
  images: string[];
  imageAlt: string;
  previousLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="
        relative
        w-full
        max-w-full
        min-w-0
        h-[260px]
        sm:h-[320px]
        md:h-[420px]
        rounded-2xl
        overflow-hidden
      "
    >
      <Image
        src={images[index]}
        alt={`${imageAlt} ${index + 1}`}
        fill
        sizes="(max-width: 768px) 90vw, 50vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

      <button
        type="button"
        onClick={prev}
        aria-label={previousLabel}
        className="
          absolute
          left-3
          sm:left-4
          top-1/2
          -translate-y-1/2
          z-10
          w-10
          h-10
          rounded-full
          bg-black/45
          backdrop-blur-sm
          text-white
          text-2xl
          flex
          items-center
          justify-center
          shadow-lg
          transition-all
          duration-300
          hover:bg-black/70
          hover:scale-110
        "
      >
        <span className="-mt-1">‹</span>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label={nextLabel}
        className="
          absolute
          right-3
          sm:right-4
          top-1/2
          -translate-y-1/2
          z-10
          w-10
          h-10
          rounded-full
          bg-black/45
          backdrop-blur-sm
          text-white
          text-2xl
          flex
          items-center
          justify-center
          shadow-lg
          transition-all
          duration-300
          hover:bg-black/70
          hover:scale-110
        "
      >
        <span className="-mt-1">›</span>
      </button>
    </div>
  );
}

/* =========================
   CARRUSEL ÍCONOS
========================= */
function AmenitiesCarousel({
  amenities,
  t,
  previousLabel,
  nextLabel,
}: {
  amenities: {
    icon: string;
    labelKey: string;
  }[];
  t: (key: string) => string;
  previousLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const maxIndex = Math.max(
    0,
    amenities.length - visibleItems
  );

  /* ELEMENTOS VISIBLES SEGÚN PANTALLA */
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setVisibleItems(1);
      } else if (width < 640) {
        setVisibleItems(2);
      } else if (width < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();

    window.addEventListener(
      'resize',
      updateVisibleItems
    );

    return () => {
      window.removeEventListener(
        'resize',
        updateVisibleItems
      );
    };
  }, []);

  /* CORREGIR ÍNDICE AL CAMBIAR DE TAMAÑO */
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  /* AUTOPLAY */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 2500);

    return () => window.clearInterval(interval);
  }, [maxIndex]);

  const next = () => {
    setIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  return (
    <div className="relative mt-8 w-full min-w-0 px-12 sm:px-14">

      {/* FLECHA ANTERIOR */}
      <button
        type="button"
        onClick={prev}
        aria-label={previousLabel}
        className="
          absolute
          left-0
          top-8
          sm:top-10
          z-20
          w-10
          h-10
          rounded-full
          bg-white
          text-gray-600
          text-2xl
          shadow-lg
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:bg-[#FBB03B]
          hover:text-black
          hover:scale-110
        "
      >
        <span className="-mt-1">‹</span>
      </button>

      {/* VIEWPORT */}
      <div className="w-full min-w-0 overflow-hidden">

        <div
          className="
            flex
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
          style={{
            transform: `translateX(-${
              index * (100 / visibleItems)
            }%)`,
          }}
        >
          {amenities.map((item, i) => (
            <div
              key={i}
              className="
                flex-shrink-0
                min-w-0
                flex
                flex-col
                items-center
                text-center
                px-2
                sm:px-3
              "
              style={{
                width: `${100 / visibleItems}%`,
              }}
            >
              <div
                className="
                  w-20
                  h-20
                  sm:w-24
                  sm:h-24
                  rounded-full
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                  shadow-sm
                  mb-3
                "
              >
                <Image
                  src={item.icon}
                  alt={t(item.labelKey)}
                  width={42}
                  height={42}
                  className="
                    w-9
                    h-9
                    sm:w-[42px]
                    sm:h-[42px]
                    object-contain
                  "
                />
              </div>

              <p
                className="
                  text-sm
                  text-gray-700
                  leading-tight
                  break-words
                  max-w-[130px]
                  sm:max-w-[150px]
                "
              >
                {t(item.labelKey)}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* FLECHA SIGUIENTE */}
      <button
        type="button"
        onClick={next}
        aria-label={nextLabel}
        className="
          absolute
          right-0
          top-8
          sm:top-10
          z-20
          w-10
          h-10
          rounded-full
          bg-white
          text-gray-600
          text-2xl
          shadow-lg
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:bg-[#FBB03B]
          hover:text-black
          hover:scale-110
        "
      >
        <span className="-mt-1">›</span>
      </button>

    </div>
  );
}

/* =========================
   PAGE
========================= */
export default function CabanasPage() {
  const t = useTranslations('Cabanas');

  const { isReady, openBooking } = useAlohaBooking();

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ['0%', '28%']
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1.15, 1.25]
  );

  const benefits = [
    t('breakfastIncluded'),
    t('smartTvWifiIncluded'),
    t('bathAmenities'),
    t('poolAccess'),
    t('picnicAccess'),
    t('terraceGrillAccessories'),
  ];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip">

      <Header />

      <main className="w-full max-w-full overflow-x-clip">

        {/* HERO CON PARALLAX */}
        <section className="relative min-h-[78vh] h-[85vh] -mt-24 overflow-hidden bg-black">

          {/* IMAGEN PARALLAX */}
          <motion.div
            className="absolute -inset-y-32 inset-x-0"
            style={{
              y: heroY,
              scale: heroScale,
            }}
          >
            <Image sizes="100vw"
              src="/images/cabanas/hero.jpg"
              alt={t('heroImageAlt')}
              fill
              className="object-cover"
              priority
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

        {/* INTRO */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('intro')}
              <br />
              <br />
              <strong>
                {t('introHighlight')}
              </strong>
            </p>

          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="relative py-28 md:py-36 overflow-hidden">

          <Image sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 33vw"
            src="/images/cabanas/bg-beneficios.jpeg"
            alt={t('benefitsImageAlt')}
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

          <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: false }}
            >

              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                {t('benefitsTitle')}{' '}
                <span className="font-semibold">
                  {t('benefitsTitleHighlight')}
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto text-lg md:text-xl mt-14">

                {benefits.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                    }}
                    viewport={{ once: false }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-orange-400 text-xl">
                      ✔
                    </span>

                    {item}
                  </motion.p>
                ))}

              </div>

            </motion.div>

          </div>

        </section>

        {/* CABAÑAS
            Recorte lateral con clip y no con hidden: hidden la volvía una caja
            con scroll propio y en el celular el scroll se pegaba. Las tarjetas
            se animan una sola vez (11-09-2026). */}
        <section className="w-full max-w-full overflow-x-clip py-16 sm:py-20">

          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-24">

            {cabins.map((cabin, i) => (
              <motion.div
                key={cabin.unitSlug}
                className="
                  w-full
                  max-w-full
                  min-w-0
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-10
                  md:gap-12
                  items-start
                "
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >

                {/* IMÁGENES E ÍCONOS */}
                <div className="w-full max-w-full min-w-0 overflow-hidden">

                  <Carousel
                    images={cabin.images}
                    imageAlt={t(cabin.titleKey)}
                    previousLabel={t('previousImage')}
                    nextLabel={t('nextImage')}
                  />

                  <AmenitiesCarousel
                    amenities={cabin.icons}
                    t={t}
                    previousLabel={t('previousAmenity')}
                    nextLabel={t('nextAmenity')}
                  />

                </div>

                {/* INFORMACIÓN */}
                <div className="w-full max-w-full min-w-0 pt-0 md:pt-2">

                  <h3
                    className="
                      text-3xl
                      sm:text-4xl
                      font-semibold
                      leading-tight
                      text-gray-950
                      break-words
                    "
                  >
                    {t(cabin.titleKey)}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-base
                      sm:text-lg
                      text-gray-800
                      font-semibold
                      leading-relaxed
                      break-words
                    "
                  >
                    {t(cabin.descriptionKey)}
                  </p>

                  <p
                    className="
                      mt-5
                      text-base
                      sm:text-lg
                      text-gray-500
                      leading-relaxed
                      break-words
                      whitespace-normal
                    "
                  >
                    {t(cabin.detailsKey)}
                  </p>

                  <div className="mt-8 w-full sm:w-auto">

                    <button
                      type="button"
                      onClick={() =>
                        openBooking({
                          unitSlug: cabin.unitSlug,
                        })
                      }
                      disabled={!isReady}
                      className="
                        w-full
                        sm:w-auto
                        inline-flex
                        items-center
                        justify-center
                        px-8
                        py-4
                        rounded-full
                        bg-[#FBB03B]
                        text-black
                        text-base
                        font-semibold
                        shadow-xl
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-2xl
                        disabled:opacity-70
                        disabled:cursor-wait
                      "
                    >
                      {t('reserve')}
                    </button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 text-center bg-gray-50">

          <div className="max-w-3xl mx-auto px-6">

            <p className="text-xl text-gray-700 mb-10">
              {t('finalCta')}
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">

              {/* COTIZAR EVENTO */}
              <PrimaryButton
                href="https://www.eventi-app.com/public-quotation/1"
                className="px-10 py-4"
              >
                {t('quoteEvent')}
              </PrimaryButton>

              {/* RESERVAR CABAÑA - ALOHA */}
              <button
                type="button"
                onClick={() => openBooking()}
                disabled={!isReady}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-10
                  py-4
                  rounded-full
                  bg-[#FBB03B]
                  text-black
                  font-semibold
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-2xl
                  disabled:opacity-70
                  disabled:cursor-wait
                "
              >
                {t('reserveCabin')}
              </button>

              {/* WHATSAPP */}
              <SecondaryButton
                href="https://wa.me/56940588585"
                className="
                  px-10
                  py-4
                  border-gray-900
                  text-gray-900
                  hover:bg-gray-900
                  hover:text-white
                "
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