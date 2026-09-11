'use client';

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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

export function AlohaBookingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [unitSlug, setUnitSlug] = useState<string | undefined>();
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  /*
   * RECUPERAR RESERVA AL VOLVER DEL PAGO
   */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const returnedBookingId = params.get('booking_id');
    const returnedStatus = params.get('status');

    if (returnedBookingId && returnedStatus) {
      setBookingId(returnedBookingId);
      setPaymentStatus(returnedStatus);
      setIsOpen(true);
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
      const pagina = window as unknown as {
        dataLayer?: Record<string, unknown>[];
      };
      pagina.dataLayer = pagina.dataLayer || [];
      pagina.dataLayer.push({
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
   * HTML AISLADO DEL WIDGET
   */
  const iframeDocument = useMemo(() => {
    if (!isOpen || !ALOHA_PROPERTY_KEY) {
      return '';
    }

    const widgetConfig: Record<string, string> = {
      key: ALOHA_PROPERTY_KEY,
      currency: 'CLP',
    };

    if (unitSlug) {
      widgetConfig.unit_slug = unitSlug;
    }

    if (bookingId && paymentStatus) {
      widgetConfig.booking_id = bookingId;
      widgetConfig.payment_status = paymentStatus;
    }

    const serializedConfig = JSON.stringify(widgetConfig).replace(
      /</g,
      '\\u003c'
    );

    return `
      <!DOCTYPE html>
      <html lang="es">

        <head>

          <meta charset="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <link
            rel="stylesheet"
            href="https://booking-widget.aloha.co/aloha-booking-widget.css"
          />

          <style>
            html,
            body {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              /* Se puede desplazar: en iPhone el widget no cabía entero y
                 quedaban cortados el selector de niños y el botón de
                 continuar (Felipe, 10-09-2026). */
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
              background: transparent !important;
            }

            #aloha-widget {
              width: 100%;
              height: 100%;
              background: transparent !important;
            }
          </style>

        </head>

        <body>

          <div id="aloha-widget"></div>

          <script
            src="https://booking-widget.aloha.co/aloha-booking-widget.umd.js"
          ></script>

          <script>
            window.addEventListener(
              'load',
              function () {
                try {
                  var widget =
                    new AlohaBookingWidget(
                      ${serializedConfig}
                    );

                  widget.open();
                } catch (error) {
                  console.error(
                    'No fue posible abrir el widget de Aloha:',
                    error
                  );
                }
              }
            );
          </script>

        </body>

      </html>
    `;
  }, [
    isOpen,
    unitSlug,
    bookingId,
    paymentStatus,
  ]);

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
            title="Reservas Aloha"
            srcDoc={iframeDocument}
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