'use client';

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type OpenBookingOptions = {
  unitSlug?: string;
};

type AlohaBookingContextValue = {
  isReady: boolean;
  openBooking: (options?: OpenBookingOptions) => void;
};

const AlohaBookingContext =
  createContext<AlohaBookingContextValue | null>(null);

/*
 * La llave de la propiedad en Aloha. NO es un secreto: viaja dentro de la
 * página y cualquiera que abra el sitio puede leerla (así se verificó la
 * configuración del widget el 09-09-2026). La variable de entorno manda si
 * está; el valor de acá es el respaldo, para que el widget funcione en
 * TODOS los ambientes sin depender de que la variable esté declarada en
 * cada uno — el 10-09 la vista previa salió sin ella y el botón de
 * reservas quedaba desactivado.
 */
const ALOHA_PROPERTY_KEY =
  process.env.NEXT_PUBLIC_ALOHA_PROPERTY_KEY ||
  'a0e3417e-1b4e-4088-9f65-6a86e8c47c3f';

/*
 * PÁGINA PROPIA DE LA VENTANA DE RESERVAS (public/reservas/aloha.html)
 *
 * Antes el widget se armaba con srcdoc. Aloha arma la dirección de regreso
 * del pago con la dirección del marco, y un srcdoc no tiene dirección real:
 * el 11-09-2026, en una reserva con pago real (la 2458), el cliente terminó
 * en una hoja en blanco en prod.alojate.pro. Con una página de nuestro
 * dominio, WebPay devuelve al cliente acá.
 */
const PAGINA_DE_RESERVAS = '/reservas/aloha.html';

/*
 * Aviso para Tag Manager. Si Tag Manager no está cargado (vista previa,
 * local), el aviso queda en una lista que nadie lee: no rompe nada.
 */
function avisarATagManager(datos: Record<string, unknown>) {
  const pagina = window as unknown as {
    dataLayer?: Record<string, unknown>[];
  };
  pagina.dataLayer = pagina.dataLayer || [];
  pagina.dataLayer.push(datos);
}

/*
 * Conversión "Cabañas · Reserva pagada" (11-09-2026). Solo pagos exitosos,
 * y una sola vez por reserva en esta pestaña aunque el cliente recargue.
 */
function contarReservaPagada(reserva: string, estado: string) {
  if (estado !== 'success') {
    return;
  }

  const clave = `vds_reserva_pagada_${reserva}`;

  try {
    if (window.sessionStorage.getItem(clave)) {
      return;
    }
    window.sessionStorage.setItem(clave, '1');
  } catch {
    // Modo privado o almacenamiento bloqueado: se cuenta igual.
  }

  avisarATagManager({
    event: 'reserva_pagada',
    booking_id: reserva,
    estado_pago: estado,
  });
}

type AvisoDeLaVentana = {
  fuente?: string;
  tipo?: string;
  booking_id?: string;
  status?: string;
};

export function AlohaBookingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [unitSlug, setUnitSlug] = useState<string | undefined>();
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  /*
   * RECUPERAR RESERVA AL VOLVER DEL PAGO
   *
   * WebPay devuelve al cliente a la página de reservas, y esa página lo
   * manda acá con booking_id y status. Se abre la ventana en modo
   * confirmación, se cuenta la conversión y se limpia la dirección para que
   * al recargar no se repita.
   */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const returnedBookingId = params.get('booking_id');
    const returnedStatus = params.get('status');

    if (returnedBookingId && returnedStatus) {
      setBookingId(returnedBookingId);
      setPaymentStatus(returnedStatus);
      setIsOpen(true);

      contarReservaPagada(returnedBookingId, returnedStatus);

      params.delete('booking_id');
      params.delete('status');
      const consulta = params.toString();
      window.history.replaceState(
        window.history.state,
        '',
        `${window.location.pathname}${consulta ? `?${consulta}` : ''}${window.location.hash}`
      );
    }
  }, []);

  /*
   * ABRIR ALOHA
   */
  const openBooking = useCallback(
    (options?: OpenBookingOptions) => {
      if (!ALOHA_PROPERTY_KEY) {
        console.error(
          'Falta configurar NEXT_PUBLIC_ALOHA_PROPERTY_KEY.'
        );
        return;
      }

      /*
       * Aviso para Tag Manager: conversión "Cabañas · Reservar" (11-09-2026).
       * Reservar es un botón y no un enlace, así que Tag Manager no lo ve
       * solo. Si Tag Manager no está cargado (vista previa, local), el aviso
       * queda en una lista que nadie lee: no rompe nada.
       */
      avisarATagManager({
        event: 'abrir_reservas',
        unidad: options?.unitSlug ?? 'general',
      });

      setBookingId(null);
      setPaymentStatus(null);
      setUnitSlug(options?.unitSlug);
      setIsOpen(true);
    },
    []
  );

  /*
   * CERRAR ALOHA COMPLETAMENTE
   */
  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setUnitSlug(undefined);
    setBookingId(null);
    setPaymentStatus(null);

    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }, []);

  /*
   * DIRECCIÓN DE LA VENTANA DE RESERVAS
   */
  const iframeSrc = useMemo(() => {
    if (!isOpen || !ALOHA_PROPERTY_KEY) {
      return '';
    }

    const params = new URLSearchParams({ key: ALOHA_PROPERTY_KEY });

    if (unitSlug) {
      params.set('unit_slug', unitSlug);
    }

    // Modo confirmación: Aloha reconoce solo esta combinación de parámetros.
    if (bookingId && paymentStatus) {
      params.set('request-type', 'embed');
      params.set('booking_id', bookingId);
      params.set('status', paymentStatus);
    }

    return `${PAGINA_DE_RESERVAS}?${params.toString()}`;
  }, [isOpen, unitSlug, bookingId, paymentStatus]);

  /*
   * BLOQUEAR SCROLL MIENTRAS EL MODAL ESTÁ ABIERTO
   */
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  /*
   * ESCAPE CIERRA TODO
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeBooking();
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [isOpen, closeBooking]);

  /*
   * AVISOS DESDE LA PÁGINA DE RESERVAS
   *
   * - 'cerrado': el cliente cerró con la X de Aloha. Aloha no le avisa a la
   *   página, y quedaba el fondo oscuro con la página bloqueada; el botón
   *   naranjo era la única salida (probado el 11-09-2026).
   * - 'pago': el pago volvió dentro de la ventana en vez de la pestaña
   *   completa; se cuenta igual la conversión.
   *
   * Solo se aceptan avisos del mismo dominio y de nuestra propia ventana.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return;
      }

      if (event.source !== iframeRef.current?.contentWindow) {
        return;
      }

      const aviso = event.data as AvisoDeLaVentana | null;

      if (!aviso || aviso.fuente !== 'vds-reservas') {
        return;
      }

      if (aviso.tipo === 'cerrado') {
        closeBooking();
      }

      if (aviso.tipo === 'pago' && aviso.booking_id && aviso.status) {
        contarReservaPagada(aviso.booking_id, aviso.status);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isOpen, closeBooking]);

  return (
    <AlohaBookingContext.Provider
      value={{
        isReady: Boolean(ALOHA_PROPERTY_KEY),
        openBooking,
      }}
    >
      {children}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/70
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label="Sistema de reservas"
        >

          {/* BOTÓN DE CIERRE PROPIO */}
<button
  type="button"
  onClick={closeBooking}
  aria-label="Cerrar reservas"
  className="
    fixed
    top-4
    right-4
    z-[10001]
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-[#FBB03B]
    px-5
    py-3
    text-sm
    font-semibold
    text-black
    shadow-xl
    transition-all
    duration-300
    hover:bg-black
    hover:text-white
    hover:scale-105
  "
>
  Cerrar reservas

  <span className="text-xl leading-none">
    ×
  </span>
</button>

          {/* IFRAME ALOHA */}
          <iframe
            ref={iframeRef}
            title="Reservas Aloha"
            src={iframeSrc}
            className="
              fixed
              inset-0
              w-full
              h-[100dvh]
              border-0
              bg-transparent
            "
            allow="payment"
          />

        </div>
      )}

    </AlohaBookingContext.Provider>
  );
}

export function useAlohaBooking() {
  const context = useContext(
    AlohaBookingContext
  );

  if (!context) {
    throw new Error(
      'useAlohaBooking debe utilizarse dentro de AlohaBookingProvider.'
    );
  }

  return context;
}