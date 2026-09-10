'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const slides = [
  {
    key: 'companies',
    image: '/images/convenios.jpg',
    href: '/empresas',
  },
  {
    key: 'tourOperators',
    image: '/images/tour-operadores.jpg',
    href: '/touroperadores',
  },
  {
    key: 'schools',
    image: '/images/colegios.jpg',
    href: '/colegios',
  },
];

export default function ContactSection() {
  const t = useTranslations('Contact');

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  let startX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }

    if (endX - startX > 50) {
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-tight">
            {t('titleLight')}{' '}
            <span className="font-semibold text-gray-900">
              {t('titleBold')}
            </span>
          </h2>
        </motion.div>

        <motion.p
          className="mt-4 pb-14 text-lg text-gray-600"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          {t('subtitle')}
        </motion.p>

        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.key}
                className="w-full flex-shrink-0 grid md:grid-cols-2 gap-12 items-center"
              >

                <div className="flex justify-center">
                  <div className="relative w-full max-w-[420px] aspect-square rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                    <Image sizes="(max-width: 768px) 100vw, 50vw"
                      src={slide.image}
                      alt={t(`slides.${slide.key}.title`)}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                    {t(`slides.${slide.key}.title`)}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {t(`slides.${slide.key}.text`)}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <PrimaryButton
                      href={slide.href}
                      className="px-6 py-3 text-base shadow-xl"
                    >
                      {t(`slides.${slide.key}.cta`)}
                    </PrimaryButton>

                    <SecondaryButton
                      href="https://wa.me/56940588585"
                      className="
                        px-6 py-3 text-base
                        border-gray-900
                        text-gray-900
                        hover:bg-gray-900
                        hover:text-white
                      "
                    >
                      WhatsApp
                    </SecondaryButton>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-2">
          {slides.map((slide, index) => (
            <div
              key={slide.key}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                current === index
                  ? 'bg-black scale-125'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}