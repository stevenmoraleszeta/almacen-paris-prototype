'use client';
import { useCarrito } from '../hooks/useCarrito';
import Image from 'next/image';
import { Producto } from '../types/producto';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

export default function ProductoDetalle({ producto }: { producto: Producto }) {
    const { agregarProducto } = useCarrito();

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg">
                    <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        fill
                        className="object-cover"
                    />
                    <button 
                        className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                        onClick={() => {/* TODO: Implementar favoritos */}}
                    >
                        <FiHeart className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800">{producto.nombre}</h1>
                    <p className="text-3xl font-bold text-[var(--primary-aqua)]">
                        ${producto.precio}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {producto.descripcion}
                    </p>
                    <button
                        onClick={() => agregarProducto(producto)}
                        className="btn-primary flex items-center gap-2 text-lg"
                    >
                        <FiShoppingCart className="w-6 h-6" />
                        <span>Agregar al carrito</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
