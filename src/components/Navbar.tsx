'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-orange-500 px-6 py-4 text-white shadow-lg">
            <Link href="/" className="text-xl font-bold">Tienda Temu</Link>
            <ul className="flex gap-4">
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/categorias">Categorías</Link></li>
                <li><Link href="/carrito">🛒 Carrito</Link></li>
            </ul>
        </nav>
    );
}
