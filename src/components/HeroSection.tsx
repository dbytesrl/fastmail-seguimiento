import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-fastmail-light to-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-fastmail-dark mb-4 leading-tight">
              Consultá tu envío
              <span className="text-fastmail-red"> en tiempo real</span>
            </h1>

            <p className="text-lg text-fastmail-gray mb-6 leading-relaxed">
              Seguimiento completo de tu paquete desde que sale hasta que llega
              a tu puerta. Transparencia y confianza en cada paso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://epresislv.fastmail.com.ar/seguimiento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-fastmail-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition text-center"
              >
                Ver estado de mi envío
              </a>
              <a
                href="#contacto"
                className="inline-block border-2 border-fastmail-red text-fastmail-red px-8 py-3 rounded-lg font-semibold hover:bg-fastmail-red hover:text-white transition text-center"
              >
                Consultar
              </a>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-fastmail-red text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-fastmail-dark">Seguimiento 24/7</h3>
                  <p className="text-sm text-fastmail-gray">Siempre disponible</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-fastmail-red text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-fastmail-dark">Actualizaciones en tiempo real</h3>
                  <p className="text-sm text-fastmail-gray">Sin demoras</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-fastmail-red text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-fastmail-dark">Cobertura nacional</h3>
                  <p className="text-sm text-fastmail-gray">Todo el país</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-fastmail-red text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-fastmail-dark">Soporte dedicado</h3>
                  <p className="text-sm text-fastmail-gray">Resolvemos tus dudas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right hidden md:flex justify-center">
            <img
              src="/hero-delivery.jpg"
              alt="Courier Fastmail entregando paquetes"
              className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
