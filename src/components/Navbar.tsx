'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FiSearch, FiUser, FiMenu, FiChevronDown, FiHeart, FiBell } from 'react-icons/fi';
import Cart from './Cart';
import { useCarrito } from '@/hooks/useCarrito';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { carrito } = useCarrito();

  const categories = [
    { name: 'Electrónicos', icon: '💻' },
    { name: 'Ropa', icon: '👕' },
    { name: 'Hogar', icon: '🏠' },
    { name: 'Deportes', icon: '⚽' },
    { name: 'Juguetes', icon: '🎮' },
    { name: 'Libros', icon: '📚' },
    { name: 'Música', icon: '🎵' },
    { name: 'Videojuegos', icon: '🎮' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/productos?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-[var(--primary-aqua)] to-[var(--primary-yellow)] bg-clip-text text-transparent">
              Paris Store
            </Link>
            <div className="hidden lg:flex items-center space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/categorias/${category.name.toLowerCase()}`}
                  className="flex items-center text-gray-700 hover:text-[var(--primary-aqua)] transition-colors group"
                >
                  <span className="mr-1 group-hover:scale-110 transition-transform">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="input-field w-full pl-10 pr-4"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[var(--primary-aqua)] transition-colors"
                >
                  <FiSearch size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <Link href="/favoritos" className="text-gray-700 hover:text-[var(--primary-yellow)] transition-colors">
              <FiHeart size={24} />
            </Link>
            <Link href="/notificaciones" className="text-gray-700 hover:text-[var(--primary-aqua)] transition-colors">
              <FiBell size={24} />
            </Link>
            <Link href="/cuenta" className="text-gray-700 hover:text-[var(--primary-aqua)] transition-colors">
              <FiUser size={24} />
            </Link>
            <Cart />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[var(--primary-aqua)] transition-colors"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl animate-fade-in">
            <div className="px-4 py-3 space-y-2">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar productos..."
                    className="input-field w-full pl-10 pr-4"
                  />
                  <button
                    type="submit"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <FiSearch size={20} />
                  </button>
                </div>
              </form>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/categorias/${category.name.toLowerCase()}`}
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
