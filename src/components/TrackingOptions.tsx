export default function TrackingOptions() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-fastmail-red text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Seguimiento de Envíos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-fastmail-dark mb-3">
            ¿Qué tipo de envío querés consultar?
          </h2>
          <p className="text-fastmail-gray text-lg">
            Seleccioná el servicio según el tipo de envío que recibiste
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Card 1 — Paquetería */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            {/* Color bar */}
            <div className="h-2 bg-fastmail-red w-full" />

            <div className="p-8 flex flex-col flex-1">
              {/* Icon + title row */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 text-3xl flex-shrink-0">
                  📦
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fastmail-dark">Paquetería</h3>
                  <p className="text-sm text-fastmail-gray">Logística · Distribución</p>
                </div>
              </div>

              {/* Question callout */}
              <div className="bg-red-50 border-l-4 border-fastmail-red rounded-lg p-4 mb-6">
                <p className="text-fastmail-dark font-semibold text-sm">
                  ¿Tenés un número de tracking de paquete o envío?
                </p>
                <p className="text-fastmail-gray text-xs mt-1">
                  Consultá el estado en tiempo real con tu número FM
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8 text-sm text-fastmail-dark">
                <li className="flex gap-2 items-center">
                  <span className="text-fastmail-red font-bold">✓</span> Actualizaciones en tiempo real
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-fastmail-red font-bold">✓</span> Cobertura nacional
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-fastmail-red font-bold">✓</span> Seguimiento 24/7
                </li>
              </ul>

              {/* CTA */}
              <a
                href="https://epresislv.fastmail.com.ar/seguimiento"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full bg-fastmail-red text-white font-bold py-3.5 rounded-xl hover:bg-opacity-90 transition text-center text-sm tracking-wide"
              >
                Seguir mi paquete →
              </a>
            </div>
          </div>

          {/* Card 2 — Postal / Telegramas */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            {/* Color bar */}
            <div className="h-2 bg-blue-600 w-full" />

            <div className="p-8 flex flex-col flex-1">
              {/* Icon + title row */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-3xl flex-shrink-0">
                  📮
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fastmail-dark">Postal / Telegramas</h3>
                  <p className="text-sm text-fastmail-gray">Carta documento · Correspondencia</p>
                </div>
              </div>

              {/* Question callout */}
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4 mb-6">
                <p className="text-fastmail-dark font-semibold text-sm">
                  ¿Buscás consultar por telegramas o carta documento?
                </p>
                <p className="text-fastmail-gray text-xs mt-1">
                  Ingresá aquí para rastrear tu correspondencia postal
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8 text-sm text-fastmail-dark">
                <li className="flex gap-2 items-center">
                  <span className="text-blue-600 font-bold">✓</span> Consulta de cartas documento
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-blue-600 font-bold">✓</span> Telegramas certificados
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-blue-600 font-bold">✓</span> Correspondencia asegurada
                </li>
              </ul>

              {/* CTA */}
              <a
                href="https://trackerfmv2.fastmail.com.ar/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition text-center text-sm tracking-wide"
              >
                Consultar postal / telegramas →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom help */}
        <p className="text-center text-sm text-fastmail-gray mt-8">
          ¿No sabés cuál elegir o no encontrás tu número?{" "}
          <a href="#contacto" className="text-fastmail-red font-semibold hover:underline">
            Contactanos
          </a>
          {" "}y te ayudamos.
        </p>

      </div>
    </section>
  );
}
