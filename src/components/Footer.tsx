'use client';
import Link from 'next/link';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const footerLinks = {
    'Sobre Nosotros': [
      'Nuestra Historia',
      'Trabaja con Nosotros',
      'Sostenibilidad',
      'Prensa'
    ],
    'Servicio al Cliente': [
      'Centro de Ayuda',
      'Devoluciones',
      'Envíos',
      'Garantías'
    ],
    'Legal': [
      'Términos y Condiciones',
      'Política de Privacidad',
      'Cookies',
      'Aviso Legal'
    ]
  };

  return (
    <footer className="bg-[var(--primary-dark)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[var(--primary-aqua)] to-[var(--primary-yellow)] bg-clip-text text-transparent">
              Suscríbete a nuestro Newsletter
            </h3>
            <p className="text-gray-400 mb-4">Recibe las últimas novedades y ofertas exclusivas</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="input-field flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <button type="submit" className="btn-primary">
                Suscribir
              </button>
            </form>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-gray-400">
                <FiMapPin className="mr-2" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FiPhone className="mr-2" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FiMail className="mr-2" />
                <span>contacto@parisstore.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 text-[var(--primary-yellow)]">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiYoutube size={24} />
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Paris Store. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
