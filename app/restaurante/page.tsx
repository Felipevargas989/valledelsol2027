'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock3, MapPin } from 'lucide-react';
import { SocialLink } from '../components/types';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { useTranslations } from 'next-intl';

const socialLinks: SocialLink[] = [
  {
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.cl/Hotel_Review-g3732316-d7155218-Reviews-Centro_de_Eventos_Valle_del_Sol-Quillon_Biobio_Region.html',
    icon: 'tripadvisor',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/valledelsolquillon',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/valledelsolquillon.cl/',
    icon: 'instagram',
  },
  {
    name: 'Whatsapp',
    href: 'https://api.whatsapp.com/send?phone=%2B56976705424',
    icon: 'whatsapp',
  },
];

const galleryImages = [
  '/images/restaurante/r1.jpg',
  '/images/restaurante/r2.jpg',
  '/images/restaurante/r4.jpg',
  '/images/restaurante/r7.jpg',
  '/images/restaurante/r8.jpg',
  '/images/restaurante/r9.jpg',
  '/images/restaurante/r10.jpg',
  '/images/restaurante/r11.jpg',
  '/images/restaurante/r12.jpg',
  '/images/restaurante/r13.jpg',
  '/images/restaurante/r14.jpg',
  '/images/restaurante/r15.jpg',
];

export default function RestaurantPage() {
  const t = useTranslations('Restaurante');

  /* PARALLAX DEL HERO */
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ['-8%', '28%']
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1.15, 1.25]
  );

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main>

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
              src="/images/restaurante/resthero.webp"
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

        {/* CTA HERO */}
        <div className="text-center -mt-10 mb-16 relative z-10">

          <Link
            href="https://menu.fu.do/entrepinosquillon/qr-menu"
            target="_blank"
            className="
              inline-block
              px-10
              py-4
              rounded-full
              font-semibold
              text-black
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              backgroundColor: '#FBB03B',
            }}
          >
            {t('viewMenu')}
          </Link>

        </div>

        {/* DESCRIPCIÓN RESTAURANT */}
        <section className="pb-20">

          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">

              <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* TEXTO */}
                <div>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
  {t('descriptionBeforeArea')}{' '}
  <strong>300m²</strong>,{' '}
  {t('descriptionBeforeCapacity')}{' '}
  <strong>150 {t('people')}</strong>{' '}
  {t('descriptionAnd')}{' '}
  <strong>{t('panoramicTerrace')}</strong>{' '}
  {t('descriptionEnd')}
</p>

                </div>

                {/* INFORMACIÓN */}
                <div className="space-y-5">

                  {/* HORARIO */}
                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-[#FBB03B]/10 flex items-center justify-center">

                      <Clock3 className="w-7 h-7 text-[#FBB03B]" />

                    </div>

                    <div>

                      <p className="text-sm uppercase tracking-wider text-gray-400">
                        {t('scheduleLabel')}
                      </p>

                      <p className="text-lg font-semibold text-gray-800">
                        {t('schedule')}
                      </p>

                    </div>

                  </div>

                  {/* UBICACIÓN */}
                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-[#FBB03B]/10 flex items-center justify-center">

                      <MapPin className="w-7 h-7 text-[#FBB03B]" />

                    </div>

                    <div>

                      <p className="text-sm uppercase tracking-wider text-gray-400">
                        {t('locationLabel')}
                      </p>

                      <p className="text-lg font-semibold text-gray-800">
                        {t('location')}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* INTRO */}
        <section className="pt-4 pb-20">

          <div className="max-w-6xl mx-auto px-6">

            {/* TÍTULO */}
            <motion.div
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

              <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-tight">
                {t('flavorsTitle')}{' '}
                <span className="font-semibold text-gray-900">
                  {t('flavorsTitleHighlight')}
                </span>
              </h2>

            </motion.div>

            {/* SUBTÍTULO */}
            <motion.p
              className="mt-4 text-lg text-gray-600 uppercase tracking-wide"
              initial={{
                opacity: 0,
                y: -20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              {t('flavorsSubtitle')}
            </motion.p>

          </div>

        </section>

        {/* GALERÍA */}
        <section className="px-6 pb-24">

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

            {galleryImages.map((img, i) => (
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
                viewport={{
                  once: false,
                }}
                className="overflow-hidden rounded-2xl group"
              >

                <div className="relative h-[300px]">

                  <Image sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
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

        {/* CTA FINAL */}
        <section className="py-24 text-center bg-gray-50">

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