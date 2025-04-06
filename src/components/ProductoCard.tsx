import Image from 'next/image';
import Link from 'next/link';

export interface Producto {
    id: string;
    nombre: string;
    precio: number;
    categoria: string;
    imagen: string;
    descripcion: string;
}

export default function ProductoCard({ producto }: { producto: Producto }) {
    return (
        <Link href={`/productos/${producto.id}`}>
            <div className="rounded-lg border p-3 shadow hover:shadow-xl transition">
                <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={500}
                    height={500}
                    className="rounded"
                />
                <h3 className="mt-2 text-lg font-semibold">{producto.nombre}</h3>
                <p className="text-orange-500 font-bold">${producto.precio}</p>
            </div>
        </Link>
    );
}
