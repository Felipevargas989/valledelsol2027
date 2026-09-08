'use client';

import { useEffect, useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

interface HeroProps {
  staticText: string;
  animatedWords: string[];
  magicText: string;
  subtitle: string;
  cabinsButton: string;
  quoteButton: string;
  animationSpeed?: number;
}

export default function Hero({
  staticText,
  animatedWords,
  magicText,
  subtitle,
  cabinsButton,
  quoteButton,
  animationSpeed = 3000,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Animación de palabras
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % animatedWords.length);
        setIsVisible(true);
      }, 300);
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [animatedWords.length, animationSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* 🎥 VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">

        <iframe
          className="
            absolute top-1/2 left-1/2
            min-w-full min-h-full
            w-auto h-auto
            aspect-video
            -translate-x-1/2 -translate-y-1/2
            pointer-events-none
          "
          src="https://www.youtube.com/embed/ly7mtnfeCFA?autoplay=1&mute=1&controls=0&loop=1&playlist=ly7mtnfeCFA&modestbranding=1&showinfo=0&rel=0"
          title="Video Valle del Sol"
          allow="autoplay; fullscreen"
        />

      </div>

      {/* Overlay oscuro elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-3xl md:text-5xl lg:text-7xl mb-6">

          {/* Línea 1 */}
          <span className="block font-light">
            {staticText}
          </span>

          {/* Línea 2 */}
          <span className="block mt-2 font-bold">
            {magicText}{' '}
            <span
              className={`inline-block transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              {animatedWords[currentIndex]}
            </span>
          </span>

        </h1>

        <p className="text-lg md:text-xl mb-8">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">

          <PrimaryButton href="/cabanas">
            {cabinsButton}
          </PrimaryButton>

          <SecondaryButton
  href="https://www.eventi-app.com/public-quotation/1"
  className="
    !border-white/50
    !text-white
    hover:!bg-white
    hover:!text-black
  "
>
  {quoteButton}
</SecondaryButton>

        </div>

      </div>

    </section>
  );
}