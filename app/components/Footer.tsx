'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  FaInstagram,
  FaFacebookF,
  FaTripadvisor,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COLUMNA 1 - LOGO */}
          <div>
            <Image
              src="/images/logo/logo-blanco.png"
              alt="Valle del Sol"
              width={120}
              height={120}
              className="mb-4"
            />

            <p className="text-gray-400 leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* COLUMNA 2 - CONTACTO */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('contact')}
            </h3>

            <p className="text-gray-400 mb-2">
              Km. 1,5 Camino a Cerro Negro, Parcela 51, Quillón
            </p>

            <a
              href="mailto:contacto@valledelsolquillon.cl"
              className="text-gray-400 hover:text-white transition"
            >
              contacto@valledelsolquillon.cl
            </a>
          </div>

          {/* COLUMNA 3 - MENÚ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('menu')}
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>
                <Link
                  href="/cabanas"
                  className="hover:text-white transition"
                >
                  {t('cabins')}
                </Link>
              </li>

              <li>
                <Link
                  href="/restaurante"
                  className="hover:text-white transition"
                >
                  {t('restaurant')}
                </Link>
              </li>

              <li>
                <Link
                  href="/matrimonios"
                  className="hover:text-white transition"
                >
                  {t('weddings')}
                </Link>
              </li>

              <li>
                <Link
                  href="/colegios"
                  className="hover:text-white transition"
                >
                  {t('schools')}
                </Link>
              </li>

              <li>
                <Link
                  href="/empresas"
                  className="hover:text-white transition"
                >
                  {t('companies')}
                </Link>
              </li>

              <li>
                <Link
                  href="/touroperadores"
                  className="hover:text-white transition"
                >
                  {t('tourOperators')}
                </Link>
              </li>

              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-white transition"
                >
                  {t('about')}
                </Link>
              </li>

            </ul>
          </div>

          {/* COLUMNA 4 - REDES */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              {t('followUs')}
            </h3>

            <div className="flex gap-4 text-xl mb-8">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/valledelsolquillon.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/valledelsolquillon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              {/* TRIPADVISOR */}
              <a
                href="https://www.tripadvisor.cl/Hotel_Review-g3732316-d7155218-Reviews-Centro_de_Eventos_Valle_del_Sol-Quillon_Biobio_Region.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Tripadvisor"
              >
                <FaTripadvisor />
              </a>

              {/* WHATSAPP FOOTER */}
              <a
                href="https://wa.me/56940588585"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>

            {/* SELLOS */}
            <div className="mt-8 w-[204px]">

              <div className="grid grid-cols-2 gap-3 items-center">

                {/* CHILE SUSTENTABLE */}
                <div className="flex justify-center hover:scale-105 transition duration-300">

                  <Image
                    src="/images/tour/iconos/sellochilesustentable.png"
                    alt="Chile Sustentable"
                    width={92}
                    height={92}
                    className="object-contain"
                  />

                </div>

                {/* SERNATUR */}
                <div className="flex justify-center hover:scale-105 transition duration-300">

                  <Image
                    src="/images/tour/iconos/sellosernatur.png"
                    alt="Sernatur"
                    width={92}
                    height={92}
                    className="object-contain"
                  />

                </div>

                {/* CHILECOMPRA */}
                <div className="col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center py-2 hover:scale-105 transition duration-300">

                  <Image
                    src="/images/tour/iconos/spemundohosting.webp"
                    alt="Proveedor del Estado y ChileCompra"
                    width={170}
                    height={46}
                    className="object-contain"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          {t('rights')} {t('madeWith')}
        </div>

      </footer>

            {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/56940588585"
        target="_blank"
        rel="noopener noreferrer"
        className="
          floating-whatsapp
          fixed
          bottom-6
          right-6
          z-50
          group
          transition-all
          duration-300
        "
        aria-label="WhatsApp"
      >
        <div className="relative flex items-center">

          {/* TEXTO HOVER */}
          <span
            className="
              absolute
              right-16
              opacity-0
              group-hover:opacity-100
              translate-x-2
              group-hover:translate-x-0
              transition-all
              duration-300
              bg-black
              text-white
              text-xs
              px-3
              py-2
              rounded-lg
              whitespace-nowrap
              shadow-lg
            "
          >
            {t('whatsappQuote')}
          </span>

          {/* BOTÓN */}
          <div
            className="
              w-14
              h-14
              bg-green-500
              rounded-full
              flex
              items-center
              justify-center
              shadow-xl
              hover:bg-green-600
              transition-all
              duration-300
              animate-heartbeat
            "
          >
            <FaWhatsapp className="text-white text-2xl" />
          </div>

        </div>
      </a>
    </>
  );
}