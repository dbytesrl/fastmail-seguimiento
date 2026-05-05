import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fastmail-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <svg
                viewBox="0 0 240 80"
                xmlns="http://www.w3.org/2000/svg"
                className="w-32 h-auto"
              >
                <text x="10" y="35" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="700" fill="#FFFFFF" letterSpacing="0.5">FASTMAIL</text>
                <path d="M 190 18 L 215 35 L 190 52" fill="none" stroke="#CCCCCC" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="10" y="58" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#CCCCCC" letterSpacing="0.5">CORREO PRIVADO</text>
              </svg>
            </div>
            <p className="text-gray-300 text-sm">
              Logística confiable, entregas seguras.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://epresislv.fastmail.com.ar/seguimiento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Seguimiento
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 4766-6007</li>
              <li>📞 7700-1042</li>
              <li>📍 Av. Ader 495, Boulogne</li>
              <li>📧 info@fastmail.com.ar</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Fastmail. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
