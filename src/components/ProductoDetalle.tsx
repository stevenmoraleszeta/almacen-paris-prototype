'use client';
import { useCarrito } from '../hooks/useCarrito';
import Image from 'next/image';
import { Producto } from './ProductoCard';

export default function ProductoDetalle({ producto }: { producto: Producto }) {
    const { agregarProducto } = useCarrito();

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <Image src={producto.imagen} alt={producto.nombre} width={600} height={600} className="rounded" />
            <div>
                <h1 className="text-3xl font-bold">{producto.nombre}</h1>
                <p className="mt-4 text-xl font-semibold text-orange-600">${producto.precio}</p>
                <p className="mt-4 text-gray-600">{producto.descripcion}</p>
                <button
                    onClick={() => agregarProducto(producto)}
                    className="mt-6 rounded bg-orange-500 px-6 py-2 font-semibold text-white hover:bg-orange-600"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}
