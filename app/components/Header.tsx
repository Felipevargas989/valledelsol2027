'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Globe2,
  Menu,
  ShoppingBag,
  X,
} from 'lucide-react';

import {
  useLocale,
  useTranslations,
} from 'next-intl';

import { useAlohaBooking } from './AlohaBookingProvider';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  /*
   * TRADUCCIONES
   */
  const t = useTranslations('Header');
  const locale = useLocale();

  /*
   * ALOHA
   */
  const { isReady, openBooking } = useAlohaBooking();

  /*
   * SCROLL HEADER
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * MENÚ MÓVIL
   *
   * - Bloquea el scroll de la página
   * - Agrega una clase al body
   * - Esa clase nos permitirá ocultar WhatsApp
   */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  /*
   * MENÚ
   */
  const menu = [
    {
      name: t('cabins'),
      href: '/cabanas',
    },
    {
      name: t('restaurant'),
      href: '/restaurante',
    },
    {
      name: t('weddings'),
      href: '/matrimonios',
    },
    {
      name: t('schools'),
      href: '/colegios',
    },
    {
      name: t('companies'),
      href: '/empresas',
    },
    {
      name: t('tourOperators'),
      href: '/touroperadores',
    },
    {
      name: t('about'),
      href: '/nosotros',
    },
  ];

  /*
   * IDIOMAS
   */
  const languages = [
    {
      code: 'es' as const,
      label: 'Español',
      short: 'ES',
    },
    {
      code: 'en' as const,
      label: 'English',
      short: 'EN',
    },
    {
      code: 'pt' as const,
      label: 'Português',
      short: 'PT',
    },
  ];

  const currentLanguage =
    languages.find(
      (language) => language.code === locale
    ) ?? languages[0];

  /*
   * CERRAR MENÚ
   */
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  /*
   * ABRIR RESERVAS ALOHA
   */
  const handleReservation = () => {
    closeMobileMenu();

    /*
     * Esperamos un instante a que el menú
     * empiece a cerrarse antes de abrir Aloha.
     */
    window.setTimeout(() => {
      openBooking();
    }, 50);
  };

  /*
   * CAMBIAR IDIOMA
   */
  const changeLanguage = (
    newLocale: 'es' | 'en' | 'pt'
  ) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    setLanguageOpen(false);
    closeMobileMenu();

    window.location.reload();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-black/25 backdrop-blur-md'
        }`}
      >
        <div
          className="
            w-full
            max-w-[1500px]
            2xl:max-w-[1600px]
            mx-auto
            px-5
            sm:px-6
            lg:px-8
            h-20
            lg:h-24
            flex
            items-center
            justify-between
          "
        >

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="relative z-50 flex-shrink-0"
            aria-label="Valle del Sol"
          >
            {/* Logo circular de la marca (Felipe, 10-09-2026). Es cuadrado,
                así que se mide por ALTO para que calce en la barra de 80 px:
                el anterior era horizontal. Blanco sobre el video, naranjo al
                bajar, igual que antes. */}
            <Image
              src={
                scrolled
                  ? '/images/logo/circular-naranjo.png'
                  : '/images/logo/circular-blanco.png'
              }
              alt="Valle del Sol"
              width={512}
              height={512}
              priority
              className="
                w-[58px]
                lg:w-[68px]
                h-auto
                object-contain
              "
            />
          </Link>

          {/* MENÚ ESCRITORIO */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-4
              xl:gap-5
              text-[13px]
              xl:text-sm
              font-medium
            "
          >

            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group
                  relative
                  whitespace-nowrap
                  transition-colors
                  duration-300
                  ${
                    scrolled
                      ? 'text-gray-800 hover:text-[#FBB03B]'
                      : 'text-white hover:text-[#FBB03B]'
                  }
                `}
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[2px]
                    bg-[#FBB03B]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}

          </nav>

          {/* LADO DERECHO ESCRITORIO */}
          <div
            className="
              hidden
              lg:flex
              items-center
              gap-3
              xl:gap-4
              ml-4
              xl:ml-6
            "
          >

            {/* TIENDA */}
            <Link
              href="https://store.aloha.co/valledelsolquillon"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group
                inline-flex
                items-center
                gap-2
                whitespace-nowrap
                font-semibold
                transition-all
                duration-300
                ${
                  scrolled
                    ? 'text-gray-800 hover:text-[#FBB03B]'
                    : 'text-white hover:text-[#FBB03B]'
                }
              `}
            >
              <ShoppingBag
                size={19}
                strokeWidth={2}
                className="
                  text-[#FBB03B]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>{t('store')}</span>
            </Link>

            {/* RESERVAR */}
            <button
              type="button"
              onClick={handleReservation}
              disabled={!isReady}
              className="
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                px-5
                py-2.5
                rounded-full
                bg-[#FBB03B]
                text-black
                font-semibold
                shadow-md
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                disabled:opacity-70
                disabled:cursor-wait
              "
            >
              {t('book')}
            </button>

            {/* COTIZAR EVENTO */}
            <Link
              href="https://www.eventi-app.com/public-quotation/1"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                px-5
                py-2.5
                rounded-full
                border
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                ${
                  scrolled
                    ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-black'
                }
              `}
            >
              {t('quoteEvent')}
            </Link>

            {/* SELECTOR DE IDIOMA */}
            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setLanguageOpen((prev) => !prev)
                }
                className={`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                  ${
                    scrolled
                      ? 'border-gray-300 text-gray-900 hover:border-[#FBB03B]'
                      : 'border-white/40 text-white hover:border-[#FBB03B]'
                  }
                `}
                aria-label={t('language')}
                aria-expanded={languageOpen}
              >
                <Globe2 size={17} />

                <span>
                  {currentLanguage.short}
                </span>

                <span className="text-[9px]">
                  ▼
                </span>
              </button>

              {/* DROPDOWN */}
              {languageOpen && (
                <div
                  className="
                    absolute
                    top-[calc(100%+10px)]
                    right-0
                    min-w-[180px]
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-2xl
                    border
                    border-gray-100
                    py-2
                  "
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() =>
                        changeLanguage(language.code)
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3
                        text-left
                        text-sm
                        transition-colors
                        duration-200
                        ${
                          locale === language.code
                            ? 'bg-[#FBB03B]/10 text-black font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      <span>
                        {language.label}
                      </span>

                      <span
                        className={`
                          text-xs
                          font-bold
                          ${
                            locale === language.code
                              ? 'text-[#FBB03B]'
                              : 'text-gray-400'
                          }
                        `}
                      >
                        {language.short}
                      </span>
                    </button>
                  ))}
                </div>
              )}

            </div>

          </div>

          {/* CONTROLES MÓVILES */}
          <div
            className="
              flex
              lg:hidden
              items-center
              gap-3
            "
          >

            {/* IDIOMA */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(true);
                setLanguageOpen(false);
              }}
              className={`
                inline-flex
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                px-3
                py-2
                text-xs
                font-semibold
                transition-all
                duration-300
                ${
                  scrolled
                    ? 'border-gray-200 bg-white text-gray-900'
                    : 'border-white/40 bg-black/20 text-white backdrop-blur-md'
                }
              `}
              aria-label={t('language')}
            >
              <Globe2 size={16} />

              {currentLanguage.short}
            </button>

            {/* RESERVAR MÓVIL */}
            <button
              type="button"
              onClick={handleReservation}
              disabled={!isReady}
              className="
                hidden
                sm:inline-flex
                items-center
                justify-center
                px-4
                py-2
                rounded-full
                bg-[#FBB03B]
                text-black
                text-sm
                font-semibold
                shadow-md
                transition-all
                duration-300
                hover:scale-105
                disabled:opacity-70
                disabled:cursor-wait
              "
            >
              {t('book')}
            </button>

            {/* HAMBURGUESA */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(
                  (prev) => !prev
                )
              }
              aria-label={
                mobileMenuOpen
                  ? 'Cerrar menú'
                  : 'Abrir menú'
              }
              aria-expanded={mobileMenuOpen}
              className={`
                relative
                z-50
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                border
                transition-all
                duration-300
                ${
                  scrolled || mobileMenuOpen
                    ? 'border-gray-200 bg-white text-gray-900 shadow-md'
                    : 'border-white/40 bg-black/20 text-white backdrop-blur-md'
                }
              `}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>
      </header>

      {/* FONDO MÓVIL */}
      <button
        type="button"
        aria-label="Cerrar menú"
        onClick={closeMobileMenu}
        className={`
          fixed
          inset-0
          z-40
          bg-black/60
          backdrop-blur-sm
          transition-opacity
          duration-300
          lg:hidden
          ${
            mobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
      />

      {/* MENÚ LATERAL MÓVIL */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-40
          h-[100dvh]
          w-[88%]
          max-w-sm
          bg-black
          text-white
          shadow-2xl
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          lg:hidden
          ${
            mobileMenuOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >

        <div
          className="
            h-full
            flex
            flex-col
            px-5
            sm:px-6
            pt-[88px]
            pb-4
            overflow-hidden
          "
        >

          {/* MENÚ */}
          <nav className="flex flex-col shrink-0">

            {menu.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="
                  py-2.5
                  border-b
                  border-white/10
                  text-[16px]
                  sm:text-[17px]
                  leading-tight
                  font-medium
                  text-white/90
                  transition-all
                  duration-300
                  hover:text-[#FBB03B]
                  hover:pl-2
                "
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${index * 35}ms`
                    : '0ms',
                }}
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* IDIOMA MÓVIL */}
          <div className="mt-4 shrink-0">

            <div
              className="
                flex
                items-center
                gap-2
                mb-2.5
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-white/40
              "
            >
              <Globe2 size={14} />

              {t('language')}
            </div>

            <div className="grid grid-cols-3 gap-2">

              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() =>
                    changeLanguage(language.code)
                  }
                  className={`
                    rounded-xl
                    border
                    px-2
                    py-2.5
                    text-xs
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      locale === language.code
                        ? 'bg-[#FBB03B] border-[#FBB03B] text-black'
                        : 'border-white/15 text-white hover:border-[#FBB03B] hover:text-[#FBB03B]'
                    }
                  `}
                >
                  {language.short}
                </button>
              ))}

            </div>

            <div className="mt-2 text-xs text-white/50">
              {currentLanguage.label}
            </div>

          </div>

          {/* BOTONES */}
          <div className="mt-4 space-y-2.5 shrink-0">

            {/* TIENDA */}
            <Link
              href="https://store.aloha.co/valledelsolquillon"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-full
                border
                border-[#FBB03B]/50
                px-5
                py-3
                text-[#FBB03B]
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-[#FBB03B]
                hover:text-black
                hover:scale-[1.02]
              "
            >
              <ShoppingBag size={18} />

              {t('store')}
            </Link>

            {/* RESERVAR */}
            <button
              type="button"
              onClick={handleReservation}
              disabled={!isReady}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#FBB03B]
                px-5
                py-3
                text-black
                text-sm
                font-semibold
                shadow-xl
                transition-all
                duration-300
                hover:scale-[1.02]
                disabled:opacity-70
                disabled:cursor-wait
              "
            >
              {t('book')}
            </button>

            {/* COTIZAR */}
            <Link
              href="https://www.eventi-app.com/public-quotation/1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/40
                px-5
                py-3
                text-white
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                hover:scale-[1.02]
              "
            >
              {t('quoteEvent')}
            </Link>

          </div>

        </div>

      </aside>
    </>
  );
}