import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-40">
              <svg
                viewBox="0 0 240 80"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <text x="10" y="35" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="700" fill="#E21B0F" letterSpacing="0.5">FASTMAIL</text>
                <path d="M 190 18 L 215 35 L 190 52" fill="none" stroke="#999999" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="10" y="58" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#000000" letterSpacing="0.5">CORREO PRIVADO</text>
              </svg>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              href="#seguimiento"
              className="text-fastmail-gray hover:text-fastmail-red transition font-medium"
            >
              Seguimiento
            </Link>
            <Link
              href="#contacto"
              className="text-fastmail-gray hover:text-fastmail-red transition font-medium"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="https://epresislv.fastmail.com.ar/seguimiento"
            target="_blank"
            className="hidden sm:inline-block bg-fastmail-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Ver mi envío
          </Link>
        </div>
      </div>
    </header>
  );
}
