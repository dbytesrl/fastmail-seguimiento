"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdabgblv");

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-fastmail-dark mb-4">
            Consultá tu envío
          </h2>
          <p className="text-lg text-fastmail-gray">
            Si tenés un número de tracking, ingresalo aquí o{" "}
            <a
              href="https://epresislv.fastmail.com.ar/seguimiento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fastmail-red font-semibold hover:underline"
            >
              hacé click acá
            </a>
            .
          </p>
        </div>

        {state.succeeded && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-semibold">
              ✓ Tu mensaje fue enviado correctamente. Te contactaremos pronto.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-fastmail-light p-8 rounded-xl border border-gray-200"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-fastmail-dark mb-2"
            >
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre completo"
              required
              className="w-full"
            />
            <ValidationError field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-fastmail-dark mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              required
              className="w-full"
            />
            <ValidationError field="email" errors={state.errors} />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-fastmail-dark mb-2"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+54 11 1234-5678"
              className="w-full"
            />
            <ValidationError field="phone" errors={state.errors} />
          </div>

          {/* Tracking Number */}
          <div>
            <label
              htmlFor="tracking"
              className="block text-sm font-semibold text-fastmail-dark mb-2"
            >
              Número de Tracking
            </label>
            <input
              type="text"
              id="tracking"
              name="tracking"
              placeholder="Ej: FM-123456789"
              className="w-full"
            />
            <ValidationError field="tracking" errors={state.errors} />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-fastmail-dark mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos tu consulta..."
              rows={4}
              className="w-full"
              required
            />
            <ValidationError field="message" errors={state.errors} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-fastmail-red text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {state.submitting ? "Enviando..." : "Enviar Mensaje"}
          </button>

          <p className="text-xs text-fastmail-gray text-center">
            También podés comunicarte por teléfono de lunes a viernes, de 9 a
            17hs.
          </p>
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-fastmail-red text-white">
                📞
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-fastmail-dark mb-1">Teléfono</h3>
              <p className="text-fastmail-gray">4766-6007 / 7700-1042</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-fastmail-red text-white">
                📍
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-fastmail-dark mb-1">Ubicación</h3>
              <p className="text-fastmail-gray">
                Av. Ader 495, Boulogne, Buenos Aires
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
