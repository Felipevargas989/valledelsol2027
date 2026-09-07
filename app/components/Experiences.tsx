'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Cabañas',
    subtitle: 'Escápate a la serenidad',
    image: '/images/experiencia/cabanas.jpg',
    href: '/cabanas',
  },
  {
    title: 'Restaurante',
    subtitle: 'Sabores que enamoran',
    image: '/images/experiencia/restaurante.jpg',
    href: '/restaurante',
  },
  {
    title: 'Empresas',
    subtitle: 'Experiencias corporativas a medida',
    image: '/images/empresas/e10.jpg',
    href: '/empresas',
  },
  {
    title: 'Colegios',
    subtitle: 'Paseos de curso y graduaciones',
    image: '/images/colegios.jpg',
    href: '/colegios',
  },
  {
    title: 'Tour Operadores',
    subtitle: 'Programas diseñados para agencias',
    image: '/images/experiencia/tour-operadores.jpg',
    href: '/touroperadores',
  },
];

export default function Experiences() {
  return (
    <section className="pt-24 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-tight">
            DESCUBRE <span className="font-semibold text-gray-900">EXPERIENCIAS ÚNICAS</span>
          </h2>
        </motion.div>

        {/* SUBTÍTULO */}
        <motion.p
          className="mt-4 pb-14 text-lg text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          EN UN ENTORNO NATURAL INCOMPARABLE
        </motion.p>

        {/* CARDS */}
        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-5 md:overflow-visible">

          {experiences.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="min-w-[260px] md:min-w-0 block"
            >
              <Card item={item} />
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

/* CARD */
function Card({ item }: { item: any }) {
  return (
    <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden group cursor-pointer">

      {/* Imagen */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-8">

        <div className="transform transition-all duration-500 group-hover:-translate-y-6 max-w-[220px]">

          {/* 🔥 TÍTULO AJUSTADO */}
          <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug break-words">
            {item.title}
          </h3>

          <p className="text-white/80 mt-2 text-sm">
            {item.subtitle}
          </p>

        </div>

        <div className="mt-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="inline-block bg-white text-gray-900 text-sm px-4 py-2 rounded-full font-medium">
            Explorar
          </span>
        </div>

      </div>
    </div>
  );
}