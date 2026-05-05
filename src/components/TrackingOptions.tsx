import Link from "next/link";

export default function TrackingOptions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fastmail-dark mb-4">
            ¿Qué tipo de envío buscas consultar?
          </h2>
          <p className="text-lg text-fastmail-gray">
            Selecciona el tipo de servicio para hacer seguimiento de tu envío
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Option 1: Paquetería */}
          <div className="bg-gradient-to-br from-fastmail-light to-white rounded-2xl border-2 border-fastmail-red shadow-lg hover:shadow-xl transition overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-fastmail-red mb-6 mx-auto">
                <span className="text-3xl">📦</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-fastmail-dark text-center mb-4">
                Paquetería
              </h3>

              {/* Description */}
              <p className="text-fastmail-gray text-center mb-6 leading-relaxed">
                Seguimiento de paquetes, cajas y envíos de logística estándar
              </p>

              {/* Question */}
              <div className="bg-white border-l-4 border-fastmail-red rounded p-4 mb-8">
                <p className="text-fastmail-dark font-semibold">
                  ¿Tenés un número de tracking de paquete?
                </p>
                <p className="text-sm text-fastmail-gray mt-2">
                  Ingresa tu número FM o de seguimiento para ver el estado en tiempo real
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 items-start">
                  <span className="text-fastmail-red font-bold">✓</span>
                  <span className="text-fastmail-dark">Actualizaciones en tiempo real</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-fastmail-red font-bold">✓</span>
                  <span className="text-fastmail-dark">Cobertura nacional</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-fastmail-red font-bold">✓</span>
                  <span className="text-fastmail-dark">Soporte 24/7</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a
                href="https://epresislv.fastmail.com.ar/seguimiento"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-fastmail-red text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Seguir mi paquete
              </a>
            </div>
          </div>

          {/* Option 2: Postal/Telegramas */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-500 shadow-lg hover:shadow-xl transition overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-6 mx-auto">
                <span className="text-3xl">📮</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-fastmail-dark text-center mb-4">
                Postal / Telegramas
              </h3>

              {/* Description */}
              <p className="text-fastmail-gray text-center mb-6 leading-relaxed">
                Seguimiento de cartas documentos, telegramas y correspondencia postal
              </p>

              {/* Question */}
              <div className="bg-white border-l-4 border-blue-500 rounded p-4 mb-8">
                <p className="text-fastmail-dark font-semibold">
                  ¿Buscas consultar por telegramas o carta documento?
                </p>
                <p className="text-sm text-fastmail-gray mt-2">
                  Ingresa aquí para hacer seguimiento de tu correspondencia postal
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 items-start">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-fastmail-dark">Consulta de cartas documento</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-fastmail-dark">Telegramas certificados</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-fastmail-dark">Correspondencia asegurada</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a
                href="https://trackerfmv2.fastmail.com.ar/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition text-center"
              >
                Consultar postal/telegramas
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 p-6 bg-fastmail-light rounded-lg border border-gray-200">
          <p className="text-center text-fastmail-gray">
            <span className="font-semibold text-fastmail-dark">¿Problemas para encontrar tu número de tracking?</span>
            {" "}
            <a href="#contacto" className="text-fastmail-red hover:underline font-semibold">
              Contactanos aquí
            </a>
            {" "}y te ayudaremos a ubicarlo.
          </p>
        </div>
      </div>
    </section>
  );
}
