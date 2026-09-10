'use client';

import Image from 'next/image';

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
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  // El video arranca DESPUÉS de que la página terminó de cargar (Felipe,
  // 09-09): así no compite con lo que el visitante necesita ver primero.
  // Mientras tanto se ve la portada. Teléfonos: 480p; el resto: 720p.
  useEffect(() => {
    const chica = window.matchMedia('(max-width: 768px)').matches;
    const fuente = chica ? '/videos/hero-480.mp4' : '/videos/hero-720.mp4';
    let timer: ReturnType<typeof setTimeout> | undefined;
    const arrancar = () => { timer = setTimeout(() => setVideoSrc(fuente), 800); };
    if (document.readyState === 'complete') arrancar();
    else window.addEventListener('load', arrancar, { once: true });
    return () => { if (timer) clearTimeout(timer); window.removeEventListener('load', arrancar); };
  }, []);
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

      {/* 🎥 VIDEO BACKGROUND — propio, servido por Vercel (09-09-2026).
          Antes era un iframe de YouTube: el celular tenía que bajar el
          reproductor completo (y sus cookies) antes de pintar la portada,
          y Google lo cobraba 2,4 s en el LCP. Ahora la imagen de portada
          se pinta al instante y el video entra después, sin bloquear.
          En pantallas chicas va la versión de 480p (5,9 MB), en el resto
          la de 720p (24,7 MB); el navegador baja solo lo que reproduce. */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* La portada como imagen optimizada (AVIF/WebP al tamaño justo) DEBAJO
            del video: como atributo poster no pasaba por el optimizador (140 KB
            planos). Cuando el video arranca, la tapa. */}
        <Image
          src="/images/hero/hero-poster.jpg"
          alt=""
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
          />
        <video
          className="
            absolute top-1/2 left-1/2
            min-w-full min-h-full
            w-auto h-auto
            -translate-x-1/2 -translate-y-1/2
            object-cover
            pointer-events-none
          "
          src={videoSrc ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
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