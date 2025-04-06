'use client';
import Image from 'next/image';
import { useCarrito } from '../hooks/useCarrito';
import { Producto } from '../types/producto';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

export default function ProductoCard({ product }: { product: Producto }) {
    const { agregarProducto } = useCarrito();

    return (
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={product.imagen}
                    alt={product.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button 
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                    onClick={() => {/* TODO: Implementar favoritos */}}
                >
                    <FiHeart className="w-5 h-5 text-gray-600" />
                </button>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.nombre}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.descripcion}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--primary-aqua)]">
                        ${product.precio}
                    </span>
                    <button
                        onClick={() => agregarProducto(product)}
                        className="btn-primary flex items-center gap-2"
                    >
                        <FiShoppingCart className="w-5 h-5" />
                        <span>Agregar</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
