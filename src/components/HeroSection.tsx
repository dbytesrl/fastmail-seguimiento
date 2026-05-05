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

          {/* Right Illustration */}
          <div className="animate-slide-in-right hidden md:flex justify-center">
            <svg
              viewBox="0 0 800 500"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-md"
            >
              <defs>
                <linearGradient
                  id="bgGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#F5F5F5", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#E8E8E8", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>

              <rect width="800" height="500" fill="url(#bgGrad)" />

              {/* Decorative elements */}
              <polygon points="0,0 200,0 0,200" fill="#E21B0F" opacity="0.1" />
              <circle cx="650" cy="80" r="60" fill="#E21B0F" opacity="0.05" />

              {/* Package */}
              <rect
                x="250"
                y="140"
                width="180"
                height="160"
                fill="#FFFFFF"
                stroke="#E21B0F"
                strokeWidth="3"
                rx="5"
              />
              <polygon points="250,140 340,80 430,140 340,140" fill="#E21B0F" />
              <polygon
                points="250,140 340,80 340,140"
                fill="#C41808"
                opacity="0.8"
              />
              <rect x="325" y="140" width="30" height="160" fill="#E21B0F" opacity="0.6" />

              {/* Person */}
              <circle cx="500" cy="170" r="25" fill="#DFA372" />
              <ellipse cx="500" cy="230" rx="35" ry="45" fill="#E21B0F" />

              {/* Arms */}
              <ellipse
                cx="460"
                cy="220"
                rx="15"
                ry="50"
                fill="#DFA372"
                transform="rotate(-25 460 220)"
              />
              <circle cx="430" cy="190" r="12" fill="#DFA372" />
              <ellipse
                cx="540"
                cy="220"
                rx="15"
                ry="50"
                fill="#DFA372"
                transform="rotate(25 540 220)"
              />
              <circle cx="570" cy="200" r="12" fill="#DFA372" />

              {/* Legs & shoes */}
              <rect x="485" y="275" width="12" height="60" fill="#333333" />
              <rect x="503" y="275" width="12" height="60" fill="#333333" />
              <ellipse cx="491" cy="340" rx="12" ry="8" fill="#555555" />
              <ellipse cx="509" cy="340" rx="12" ry="8" fill="#555555" />

              {/* Face */}
              <circle cx="495" cy="165" r="3" fill="#333333" />
              <circle cx="505" cy="165" r="3" fill="#333333" />

              {/* Phone */}
              <rect x="555" y="195" width="45" height="75" fill="#333333" rx="6" />
              <rect
                x="560"
                y="200"
                width="35"
                height="60"
                fill="#4DB8E8"
                rx="3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
